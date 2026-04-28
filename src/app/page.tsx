'use client';

import { useState, useCallback, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { categories } from '@/data/categories';



const ENGINES = {
  google: { name: '구글', icon: '/images/google_s.svg', url: 'https://www.google.com/search?q=' },
  naver: { name: '네이버', icon: '/images/naver_s.svg', url: 'https://search.naver.com/search.naver?query=' },
  daum: { name: '다음', icon: '/images/daum.svg', url: 'https://search.daum.net/search?q=' },
  youtube: { name: '유튜브', icon: '/images/youtube_s.svg', url: 'https://www.youtube.com/results?search_query=' }
};

export default function Home() {
  const [engine, setEngine] = useState<keyof typeof ENGINES>('google');
  const [keyword, setKeyword] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!keyword.trim()) return;
    window.open(ENGINES[engine].url + encodeURIComponent(keyword), '_blank');
  };

  return (
    <>
      <section className="hero" id="hero" aria-label="메인 검색 및 통계">
        <div className="hero-grid">
          <div className="hero-search-block">
            <div className="hero-text-block">
              <div className="eyebrow">🔗 주소모아 &amp; 주소월드를 잇는 오늘의 링크</div>
              <h1 className="hero-title">대한민국 No.1 링크 디렉토리,<br/><span className="hero-brand">오늘링크</span><br/>주소모음의 새로운 기준</h1>
              <p className="hero-desc">
                <strong>주소모아</strong>와 <strong>주소월드</strong>의 모든 최신 접속 정보를 실시간으로 통합 안내하는 <strong>오늘링크</strong>입니다. <strong>주소박스</strong>, <strong>주소허브</strong>, <strong>주소북</strong> 등 유저들이 가장 많이 찾는 <strong>링크모음</strong> 서비스 — <strong>빠른주소</strong>가 필요할 때, 대한민국 No.1 <strong>주소가이드</strong> <span className="hero-brand">오늘링크</span>에서 안전한 연결을 경험하세요.
              </p>
            </div>

            <form className="search-box" onSubmit={handleSearch} role="search" aria-label="포털 검색">
              <label htmlFor="searchEngine" className="sr-only">검색 포털 선택</label>
              <div className="search-custom-select">
                <select 
                  id="searchEngine" 
                  className="search-select-hidden" 
                  value={engine} 
                  onChange={(e) => setEngine(e.target.value as keyof typeof ENGINES)}
                >
                  <option value="google">구글</option>
                  <option value="naver">네이버</option>
                  <option value="daum">다음</option>
                  <option value="youtube">유튜브</option>
                </select>
                <div className="search-select-display">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={ENGINES[engine].icon} alt="선택된 포털 로고" id="searchEngineLogo" />
                  <svg viewBox="0 0 24 24" fill="none" className="search-select-arrow"><path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              </div>
              <label htmlFor="searchKeyword" className="sr-only">검색어</label>
              <input 
                id="searchKeyword" 
                className="search-input" 
                type="text" 
                placeholder="검색어를 입력하세요." 
                autoComplete="off"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
              <button type="submit" className="search-btn">검색</button>
            </form>
          </div>

          <div className="hero-side">
            <div className="hero-banner-wrap">
              <Image src="/images/hero_banner.png" alt="오늘링크 배너" width={800} height={400} className="hero-banner-img" priority />
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

      <section className="section" id="banners" aria-label="추천 배너">
        <div className="section-head">
          <div><h2>추천 배너</h2></div>
        </div>
        <div className="banner-grid">
          <a href="#" className="banner-item banner-item--lg banner-pink-1"><div className="banner-label banner-label-pink-1">FEATURED 01</div><div className="banner-title">추천 배너 01</div><div className="banner-desc banner-desc-pink">화이트와 핑크 조합의 대표 배너 스타일</div></a>
          <a href="#" className="banner-item banner-item--lg banner-pink-2"><div className="banner-label banner-label-pink-2">FEATURED 02</div><div className="banner-title">추천 배너 02</div><div className="banner-desc banner-desc-pink">부드럽고 밝은 톤으로 시선이 가는 배너</div></a>
          <a href="#" className="banner-item banner-item--lg banner-pink-3"><div className="banner-label banner-label-pink-3">FEATURED 03</div><div className="banner-title">추천 배너 03</div><div className="banner-desc banner-desc-pink">텍스트형으로도 예쁘게 보이는 상단 배너</div></a>
          <a href="#" className="banner-item banner-item--lg banner-pink-1"><div className="banner-label banner-label-pink-1">FEATURED 04</div><div className="banner-title">추천 배너 04</div><div className="banner-desc banner-desc-pink">화이트와 핑크 조합의 대표 배너 스타일</div></a>
          <a href="#" className="banner-item banner-item--lg banner-pink-2"><div className="banner-label banner-label-pink-2">FEATURED 05</div><div className="banner-title">추천 배너 05</div><div className="banner-desc banner-desc-pink">부드럽고 밝은 톤으로 시선이 가는 배너</div></a>
          <a href="#" className="banner-item banner-item--lg banner-pink-3"><div className="banner-label banner-label-pink-3">FEATURED 06</div><div className="banner-title">추천 배너 06</div><div className="banner-desc banner-desc-pink">텍스트형으로도 예쁘게 보이는 상단 배너</div></a>
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

      <section className="section" id="rank-section" aria-label="카테고리별 바로가기 랭킹">
        <div className="section-head"><div><h2>카테고리 바로가기 모음</h2></div></div>
        <nav className="jump-bar" id="jumpBar" aria-label="카테고리 빠른 이동">
          {categories.map((cat, i) => (
            <a key={cat.id} className={`jump-chip ${i === 0 ? 'active' : ''}`} href={`#${cat.id}`}>{cat.title}</a>
          ))}
        </nav>
        <div className="rank-grid" id="rankGrid">
          {categories.map(cat => (
            <div key={cat.id} className="rank-panel" id={cat.id}>
              <div className="rank-head">
                <div><div className="rank-title">{cat.title}</div><div className="rank-sub">{cat.sub}</div></div>
              </div>
              <div className="rank-list">
                {cat.items.map((item, idx) => (
                  <a key={idx} className="rank-item" href={item.url} target="_blank" rel="noopener noreferrer">
                    <div className="rank-left">
                      <div className="rank-num">{idx + 1}</div>
                      <div className="rank-name">{item.name}</div>
                    </div>
                    <span className="rank-go">바로가기</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="bottom-banners" aria-label="하단 배너" style={{marginTop: '20px'}}>
        <div className="banner-grid" style={{gridTemplateColumns: 'repeat(2, 1fr)'}}>
          {[1,2,3,1,2,3,1,2,3,1].map((b, idx) => (
            <a key={idx} href="#" className={`banner-item banner-item--md banner-pink-md-${b}`}><div className="banner-title">배너 {idx+1}</div></a>
          ))}
        </div>
      </section>
    </>
  );
}
