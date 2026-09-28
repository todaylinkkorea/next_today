import type { Metadata } from 'next';
import { AddressBar } from '@/components/site/AddressBar';
import { PartnerBanner } from '@/components/site/PartnerBanner';
import { RankGrid } from '@/components/site/RankList';
import { SiteCard } from '@/components/site/SiteCard';
import { LINK_CATEGORIES } from '@/data/link-data';
import { FEATURED_SLUGS, RANK_LIMIT } from '@/data/site-config';
import { featuredSites } from '@/lib/link-data';

export const metadata: Metadata = {
  title: '오늘링크 — 주소모아, 주소월드의 새로운 기준 (링크 디렉토리)',
  description:
    '주소모아와 주소월드의 모든 최신 접속 정보를 실시간 통합 안내하는 오늘링크. 주소박스, 주소허브, 주소북 등 유저들이 가장 많이 찾는 대한민국 No.1 링크모음 포털 서비스입니다.',
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  const sites = featuredSites(LINK_CATEGORIES, [...FEATURED_SLUGS]);

  return (
    <>
      <h1 className="sr-only">대한민국 No.1 링크 디렉토리, 오늘링크 주소모음의 새로운 기준</h1>
      <PartnerBanner />
      <AddressBar />

      <section id="section-popular">
        <div className="section-head">
          <h2 className="section-head-title">
            <span className="title-fire-emoji" aria-hidden="true">🔥</span>
            <span className="neon-glow-shimmer-title">실시간 트렌드 핫링크</span>
          </h2>
        </div>
        <div className="featured-grid-4">
          {sites.map((site, index) => (
            <SiteCard key={site.url} site={site} index={index} metaLabel="오늘링크 핫추천" />
          ))}
        </div>
      </section>

      <section>
        <div className="section-head">
          <h2 className="section-head-title">
            <span className="title-animated-star" aria-hidden="true">⭐</span>
            <span className="rainbow-shimmer-title">TOP {RANK_LIMIT} 실시간 인기 순위</span>
          </h2>
        </div>
        <RankGrid categories={LINK_CATEGORIES} />
      </section>
    </>
  );
}
