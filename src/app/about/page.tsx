import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '서비스 소개',
  description: '오늘링크 서비스 소개, 운영 정보, 주요 기능을 확인하세요.',
};

export default function AboutPage() {
  return (
    <section className="section" aria-label="서비스 소개">
      <div className="section-head">
        <div>
          <div className="muted">서비스 안내</div>
          <h1 style={{ fontSize: 32 }}>오늘링크 소개</h1>
        </div>
      </div>
      <div className="service-info-grid">
        <div className="service-info-card">
          <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 16 }}>🔗 오늘링크란?</h2>
          <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: 15 }}>
            오늘링크는 자주 찾는 사이트를 카테고리별로 정리하여 빠르게 접근할 수 있는
            포털형 링크 모음 서비스입니다. 구글, 네이버, 다음, 유튜브 검색을 한 곳에서
            바로 사용할 수 있습니다.
          </p>
        </div>
        <div className="service-info-card">
          <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 16 }}>📍 운영 정보</h2>
          <ul className="service-info-list">
            <li><strong>서비스명:</strong> 오늘링크 (TodayLink)</li>
            <li><strong>URL:</strong> <a href="https://todaylink.kr" target="_blank" rel="noopener noreferrer">https://todaylink.kr</a></li>
            <li><strong>이메일:</strong> <a href="mailto:contact@todaylink.kr">contact@todaylink.kr</a></li>
            <li><strong>운영시간:</strong> 24시간 자동 운영</li>
          </ul>
        </div>
        <div className="service-info-card">
          <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 16 }}>💡 주요 기능</h2>
          <ul className="service-info-list">
            <li>✅ 15개 카테고리, 150+ 바로가기 링크</li>
            <li>✅ 구글·네이버·다음·유튜브 통합 검색</li>
            <li>✅ 모바일 반응형 디자인</li>
            <li>✅ 추천 배너 및 카드형 링크 노출</li>
            <li>✅ SEO 최적화 (메타태그, JSON-LD, 사이트맵)</li>
            <li>✅ Plausible 기반 프라이버시 분석</li>
          </ul>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: '오늘링크',
            url: 'https://todaylink.kr',
            email: 'contact@todaylink.kr',
            description: '포털형 링크 모음 서비스',
          }).replace(/</g, '\\u003c'),
        }}
      />
    </section>
  );
}
