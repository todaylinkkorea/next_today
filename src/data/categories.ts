// 호환 어댑터 — 구 홈 제거 시(Phase 1 Task 13) 함께 삭제. 원본 데이터는 categories.json.
import { LINK_CATEGORIES } from './link-data';

export interface CategoryLink {
  name: string;
  url: string;
}

export interface Category {
  id: string;
  title: string;
  sub: string;
  icon: string;
  items: CategoryLink[];
}

const LEGACY_ICONS: Record<string, string> = {
  adult: '🔞',
  foreign: '🌐',
};

export const categories: Category[] = LINK_CATEGORIES.map((category) => ({
  id: `${category.slug}-panel`,
  title: category.name,
  sub: category.description,
  icon: LEGACY_ICONS[category.slug] ?? category.icon,
  items: category.items.map(({ name, url }) => ({ name, url })),
}));
