export type LinkStatus = 'ok' | 'maintenance';

export interface LinkItem {
  name: string;
  url: string;
  status: LinkStatus;
}

export interface LinkCategory {
  slug: string;
  name: string;
  icon: string;
  description: string;
  items: LinkItem[];
}

export type FlatSite = LinkItem & {
  categorySlug: string;
  categoryName: string;
  icon: string;
  rank: number;
};

export const MAX_ITEMS_PER_CATEGORY = 10;

type RecordValue = Record<string, unknown>;

function isRecord(value: unknown): value is RecordValue {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function fail(path: string, message: string): never {
  throw new Error(`${path}: ${message}`);
}

function stringValue(value: unknown, path: string, message: string): string {
  if (typeof value !== 'string') fail(path, message);
  return value.trim();
}

function parseCategory(value: unknown, index: number, slugs: Set<string>): LinkCategory {
  const path = `categories[${index}]`;
  if (!isRecord(value)) fail(path, '객체가 아닙니다');

  const slug = stringValue(value.slug, `${path}.slug`, '문자열이 아닙니다');
  if (!/^[a-z0-9-]+$/.test(slug)) fail(`${path}.slug`, '소문자·숫자·하이픈만 허용됩니다');
  if (slugs.has(slug)) fail(`${path}.slug`, '중복된 slug입니다');
  slugs.add(slug);

  const name = stringValue(value.name, `${path}.name`, '문자열이 아닙니다');
  if (!name) fail(`${path}.name`, '비어 있을 수 없습니다');
  const icon = stringValue(value.icon, `${path}.icon`, '문자열이 아닙니다');
  if (icon.length < 1 || icon.length > 8) fail(`${path}.icon`, '1~8자여야 합니다');
  const description = value.description === undefined
    ? ''
    : stringValue(value.description, `${path}.description`, '문자열이 아닙니다');

  if (!Array.isArray(value.items)) fail(`${path}.items`, '배열이 아닙니다');
  if (value.items.length < 1 || value.items.length > MAX_ITEMS_PER_CATEGORY) {
    fail(`${path}.items`, `1~${MAX_ITEMS_PER_CATEGORY}개여야 합니다`);
  }

  const urls = new Set<string>();
  const items = value.items.map((item, itemIndex) => {
    const itemPath = `${path}.items[${itemIndex}]`;
    if (!isRecord(item)) fail(itemPath, '객체가 아닙니다');
    const itemName = stringValue(item.name, `${itemPath}.name`, '문자열이 아닙니다');
    if (!itemName) fail(`${itemPath}.name`, '비어 있을 수 없습니다');
    const url = stringValue(item.url, `${itemPath}.url`, '문자열이 아닙니다');
    let parsedUrl: URL;
    try {
      parsedUrl = new URL(url);
    } catch {
      fail(`${itemPath}.url`, 'http(s) URL이 아닙니다');
    }
    if (parsedUrl.protocol !== 'http:' && parsedUrl.protocol !== 'https:') {
      fail(`${itemPath}.url`, 'http(s) URL이 아닙니다');
    }
    const normalizedUrl = url.replace(/\/+$/, '');
    if (urls.has(normalizedUrl)) fail(`${itemPath}.url`, '카테고리 안에서 중복된 URL입니다');
    urls.add(normalizedUrl);

    const statusValue = item.status === undefined ? 'ok' : item.status;
    if (statusValue !== 'ok' && statusValue !== 'maintenance') {
      fail(`${itemPath}.status`, 'ok 또는 maintenance여야 합니다');
    }
    const status: LinkStatus = statusValue;
    return { name: itemName, url, status };
  });

  return { slug, name, icon, description, items };
}

export function parseLinkData(raw: unknown): LinkCategory[] {
  if (!isRecord(raw)) fail('root', '객체여야 합니다');
  if (!Array.isArray(raw.categories)) fail('categories', '배열이 아닙니다');
  if (raw.categories.length < 1) fail('categories', '1개 이상이어야 합니다');
  const slugs = new Set<string>();
  return raw.categories.map((category, index) => parseCategory(category, index, slugs));
}

export function categorySlugs(categories: LinkCategory[]): string[] {
  return categories.map(({ slug }) => slug);
}

export function findCategory(categories: LinkCategory[], slug: string): LinkCategory | undefined {
  return categories.find((category) => category.slug === slug);
}

export function flattenSites(categories: LinkCategory[]): FlatSite[] {
  return categories.flatMap((category) => category.items.map((item, index) => ({
    ...item,
    categorySlug: category.slug,
    categoryName: category.name,
    icon: category.icon,
    rank: index + 1,
  })));
}

export function searchSites(sites: FlatSite[], term: string, limit = 20): FlatSite[] {
  const normalizedTerm = term.trim().toLocaleLowerCase();
  if (!normalizedTerm) return sites.slice(0, limit);
  return sites
    .filter((site) => site.name.toLocaleLowerCase().includes(normalizedTerm)
      || site.categoryName.toLocaleLowerCase().includes(normalizedTerm))
    .slice(0, limit);
}

export function featuredSites(categories: LinkCategory[], slugs: string[]): FlatSite[] {
  return slugs.flatMap((slug) => {
    const category = findCategory(categories, slug);
    if (!category || category.items.length === 0) return [];
    const [item] = category.items;
    return [{
      ...item,
      categorySlug: category.slug,
      categoryName: category.name,
      icon: category.icon,
      rank: 1,
    }];
  });
}
