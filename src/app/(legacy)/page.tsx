import type { Metadata } from 'next';
import Image from 'next/image';
import SearchForm from '@/components/hero/SearchForm';
import BannerGrid from '@/components/banners/BannerGrid';
import RankSection from '@/components/categories/RankSection';

export const metadata: Metadata = {
  title: '오늘링크 — 주소모아, 주소월드의 새로운 기준 (링크 디렉토리)',
  description:
    '주소모아와 주소월드의 모든 최신 접속 정보를 실시간 통합 안내하는 오늘링크. 주소박스, 주소허브, 주소북 등 유저들이 가장 많이 찾는 대한민국 No.1 링크모음 포털 서비스입니다.',
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <>
      <section className="hero" id="hero" aria-label="메인 검색 및 통계">
        <div className="hero-grid">
          <div className="hero-search-block">
            <div className="hero-text-block">
              <div className="eyebrow">🔗 주소모아 &amp; 주소월드를 잇는 오늘의 링크</div>
              <h1 className="hero-title">
                대한민국 No.1 링크 디렉토리,<br/>
                <span className="hero-brand">오늘링크</span><br/>
                주소모음의 새로운 기준
              </h1>
              <p className="hero-desc">
                <strong>주소모아</strong>와 <strong>주소월드</strong>의 모든 최신 접속 정보를 실시간으로 통합 안내하는 <strong>오늘링크</strong>입니다. <strong>주소박스</strong>, <strong>주소허브</strong>, <strong>주소북</strong> 등 유저들이 가장 많이 찾는 <strong>링크모음</strong> 서비스 — <strong>빠른주소</strong>가 필요할 때, 대한민국 No.1 <strong>주소가이드</strong> <span className="hero-brand">오늘링크</span>에서 안전한 연결을 경험하세요.
              </p>
            </div>

            {/* Render decoupled Client Component for Search Form */}
            <SearchForm />
          </div>

          <div className="hero-side">
            <div className="hero-banner-wrap">
              <Image 
                src="/images/hero_banner.png" 
                alt="오늘링크 배너" 
                width={800} 
                height={400} 
                className="hero-banner-img" 
                priority 
              />
            </div>
            <div className="hero-side-meta">
              <div className="tags" aria-label="인기 태그">
                <span className="tag"># 주소모아</span>
                <span className="tag"># 주소월드</span>
                <span className="tag"># 오늘링크</span>
                <span className="tag"># 링크모음</span>
              </div>
              <div className="stats">
                <div className="stat"><div className="stat-label">전체 링크</div><div className="stat-num">368+</div></div>
                <div className="stat"><div className="stat-label">오늘 업데이트</div><div className="stat-num">12</div></div>
                <div className="stat"><div className="stat-label">인기 카테고리</div><div className="stat-num">15</div></div>
                <div className="stat"><div className="stat-label">주간 방문</div><div className="stat-num">24.8K</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="section" id="categories" aria-label="주요 카테고리">
        <div className="section-head"><div><h2>주요 카테고리</h2></div></div>
        <div className="category-grid" id="main-categories">
          {[
            { n: '구글', i: 'google_s' }, { n: '네이버', i: 'naver_s' }, { n: '유튜브', i: 'youtube_s' },
            { n: '인스타그램', i: 'instagram_s' }, { n: '페이스북', i: 'facebook_s' }, { n: '트위터', i: 'x_s' }
          ].map(c => (
            <a key={c.n} href="#" className="category" aria-label={c.n}>
              <div className="category-icon" style={{background:'#fff'}}><Image src={`/images/${c.i}.svg`} alt={c.n} width={40} height={40}/></div>
              <b className="category-text">{c.n}</b>
            </a>
          ))}
        </div>
      </section>

      {/* Recommended Top Banner Grid */}
      <BannerGrid />

      {/* Render Server-Side RankSection which utilizes client-side JumpBar */}
      <RankSection />

    </>
  );
}
