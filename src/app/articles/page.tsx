import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO 아티클',
  description: '검색 최적화, 웹 성능, 구조화 데이터 등 유용한 SEO 관련 아티클을 모아놓았습니다.',
};

const articles = [
  {
    badge: 'SEO',
    emoji: '📝',
    title: '링크 모음 사이트 SEO 최적화 가이드',
    desc: '포털형 링크 모음 사이트를 검색엔진에 최적화하는 핵심 전략과 실전 팁을 소개합니다.',
  },
  {
    badge: 'GUIDE',
    emoji: '🔍',
    title: '구글 검색 상위 노출을 위한 구조화 데이터',
    desc: 'JSON-LD Schema.org를 활용한 구조화 데이터 마크업으로 검색 결과 노출을 극대화하세요.',
  },
  {
    badge: 'TIPS',
    emoji: '📊',
    title: '사이트 속도와 Core Web Vitals 개선법',
    desc: 'LCP, FID, CLS 지표를 개선하여 사용자 경험과 검색 랭킹을 동시에 높이는 방법을 알아봅니다.',
  },
  {
    badge: 'TECH',
    emoji: '🏗',
    title: 'Next.js App Router와 SEO 메타데이터',
    desc: 'Next.js의 generateMetadata, sitemap.ts, robots.ts를 활용한 현대적 SEO 구현법을 설명합니다.',
  },
  {
    badge: 'STRATEGY',
    emoji: '🎯',
    title: '내부 링크 전략으로 크롤러 최적화하기',
    desc: '내부 링크 구조를 체계화하여 검색 엔진 크롤러의 인덱싱 효율을 극대화합니다.',
  },
  {
    badge: 'ANALYTICS',
    emoji: '📈',
    title: 'Plausible Analytics로 프라이버시 중심 분석',
    desc: '쿠키 없이 가벼운 Plausible Analytics를 통해 사이트 방문 데이터를 추적하는 방법을 알아봅니다.',
  },
];

export default function ArticlesPage() {
  return (
    <section className="section" aria-label="SEO 아티클">
      <div className="section-head">
        <div>
          <div className="muted">콘텐츠 허브</div>
          <h1 style={{ fontSize: 32 }}>SEO 아티클</h1>
        </div>
        <div className="muted">검색 최적화 및 유용한 정보 모음</div>
      </div>
      <div className="cards">
        {articles.map((art, i) => (
          <article key={i} className="card">
            <div className="thumb">{art.emoji} 아티클</div>
            <span className="badge">{art.badge}</span>
            <h2 style={{ fontSize: 18, fontWeight: 800 }}>{art.title}</h2>
            <p>{art.desc}</p>
            <div className="card-actions">
              <a className="btn-dark" href="#">자세히 보기</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
