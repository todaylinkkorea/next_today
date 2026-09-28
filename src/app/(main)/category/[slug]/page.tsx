import type { Metadata } from 'next';
import Link from 'next/link';
import { AddressBar } from '@/components/site/AddressBar';
import { CategoryIcon } from '@/components/site/CategoryIcon';
import { PartnerBanner } from '@/components/site/PartnerBanner';
import { RankPageList } from '@/components/site/RankList';
import { LINK_CATEGORIES } from '@/data/link-data';
import { RANK_LIMIT } from '@/data/site-config';
import { categorySlugs, findCategory } from '@/lib/link-data';
import { notFound } from 'next/navigation';

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return categorySlugs(LINK_CATEGORIES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = findCategory(LINK_CATEGORIES, slug);

  if (!category) notFound();

  const title = `${category.name} 인기 순위 TOP ${RANK_LIMIT} | 오늘링크`;
  const description = category.description
    || `${category.name} 인기 사이트 TOP ${RANK_LIMIT} 최신 접속 주소를 오늘링크에서 실시간으로 안내합니다.`;
  const url = `/category/${slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = findCategory(LINK_CATEGORIES, slug);

  if (!category) notFound();

  return (
    <>
      <div className="page-head-card">
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 30 }}><CategoryIcon icon={category.icon} /></span>
          <div>
            <h1 style={{ fontSize: 19, fontWeight: 900, margin: 0, color: 'var(--text-main)' }}>
              {category.name} 인기 순위 TOP {RANK_LIMIT}
            </h1>
            <p style={{ color: 'var(--text-desc)', fontSize: 12.5, margin: '2px 0 0' }}>
              클릭하면 해당 항목 또는 공식 우회주소가 새 탭으로 즉시 열립니다.
            </p>
          </div>
        </div>
        <Link href="/" className="pill-action-btn">전체 메인 보기</Link>
      </div>

      <RankPageList category={category} />

      <div style={{ marginTop: 10 }}>
        <PartnerBanner category={{ name: category.name }} />
        <AddressBar />
      </div>
    </>
  );
}
