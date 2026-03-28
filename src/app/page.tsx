import HeroSection from '@/components/hero/HeroSection';
import BannerGrid from '@/components/banners/BannerGrid';
import CategoryGrid from '@/components/categories/CategoryGrid';
import RankSection from '@/components/categories/RankSection';

export default function Home() {
  const jsonLdWebsite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: '오늘링크',
    url: 'https://todaylink.kr',
    description: '오늘 필요한 링크를 한눈에 정리한 포털형 링크 모음 서비스',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.google.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  const jsonLdOrg = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '오늘링크',
    url: 'https://todaylink.kr',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdWebsite).replace(/</g, '\\u003c'),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdOrg).replace(/</g, '\\u003c'),
        }}
      />

      <HeroSection />
      <BannerGrid />
      <CategoryGrid />
      <RankSection />

      {/* ─── Recommended + Sidebar ─── */}
      <div className="portal-grid" id="recommended">
        <section className="section" style={{ marginTop: 0 }} aria-label="오늘 추천 링크">
          <div className="section-head">
            <div>
              <div className="muted">대표 노출 영역</div>
              <h2>오늘 추천 링크</h2>
            </div>
            <div className="muted">카드형 6개 구성</div>
          </div>
          <div className="cards">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="card">
                <div className="thumb">썸네일</div>
                <span className="badge">TOP {n}</span>
                <h3>프리미엄 링크 {String.fromCharCode(64 + n)}</h3>
                <p>포털형 메인에서 가장 눈에 잘 띄는 대표 카드 예시입니다.</p>
                <div className="card-actions">
                  <a className="btn-dark" href="#">바로가기</a>
                  <a className="btn-light" href="#">상세보기</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="side-stack">
          <section className="section" style={{ marginTop: 0 }} id="notices" aria-label="공지사항">
            <div className="section-head">
              <div>
                <div className="muted">운영 안내</div>
                <h2 style={{ fontSize: 24 }}>공지사항</h2>
              </div>
            </div>
            <div className="notice-list">
              <div className="list-row"><span>메인 디자인 리뉴얼 안내</span><span className="muted">2026.03.25</span></div>
              <div className="list-row"><span>카테고리 구조 개선 공지</span><span className="muted">2026.03.24</span></div>
              <div className="list-row"><span>모바일 레이아웃 최적화 적용</span><span className="muted">2026.03.23</span></div>
              <div className="list-row"><span>신규 링크 카드 섹션 추가</span><span className="muted">2026.03.22</span></div>
            </div>
          </section>

          <section className="section" style={{ marginTop: 0 }} aria-label="최근 업데이트">
            <div className="section-head">
              <div>
                <div className="muted">실시간 느낌</div>
                <h2 style={{ fontSize: 24 }}>최근 업데이트</h2>
              </div>
            </div>
            <div className="update-list">
              <div className="list-row"><span>오늘 등록된 링크 12건</span><span className="muted" style={{ color: 'var(--color-primary)', fontWeight: 700 }}>NEW</span></div>
              <div className="list-row"><span>검색창 UI 개선</span><span className="muted" style={{ color: '#f97316', fontWeight: 700 }}>UP</span></div>
              <div className="list-row"><span>카드형 레이아웃 조정</span><span className="muted" style={{ color: '#f97316', fontWeight: 700 }}>UP</span></div>
            </div>
          </section>

          <section className="section" style={{ marginTop: 0 }} aria-label="배너">
            <div className="banner-box">
              <div>
                <div className="banner-box-sub">배너 슬롯</div>
                <div className="banner-box-title">여기에 메인 배너가 들어갑니다</div>
                <div className="banner-box-desc">이벤트, 공지, 추천 영역용 배너 자리</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
