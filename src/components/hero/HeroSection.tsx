'use client';

import { useState, useCallback, type FormEvent } from 'react';

const SEARCH_BASES: Record<string, string> = {
  google: 'https://www.google.com/search?q=',
  naver: 'https://search.naver.com/search.naver?query=',
  daum: 'https://search.daum.net/search?q=',
  youtube: 'https://www.youtube.com/results?search_query=',
};

export default function HeroSection() {
  const [engine, setEngine] = useState('google');
  const [keyword, setKeyword] = useState('');
  const [shake, setShake] = useState(false);

  const handleSearch = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      const q = keyword.trim();
      if (!q) {
        setShake(true);
        setTimeout(() => setShake(false), 500);
        return;
      }
      window.open(
        SEARCH_BASES[engine] + encodeURIComponent(q),
        '_blank',
        'noopener'
      );
    },
    [engine, keyword]
  );

  return (
    <section className="hero" id="hero" aria-label="메인 검색 및 통계">
      <div className="hero-grid">
        <div>
          <div className="eyebrow">🔗 오늘 필요한 링크를 한눈에</div>
          <h1 className="hero-title">
            구글, 네이버, 다음, 유튜브에<br />검색어를 입력하세요
          </h1>
          <p className="hero-desc">
            선택한 포털에서 바로 검색 결과를 확인할 수 있습니다. 자주 찾는
            사이트는 아래 카테고리에서 바로 이동하세요.
          </p>

          <form
            className={`search-box${shake ? ' shake' : ''}`}
            onSubmit={handleSearch}
            role="search"
            aria-label="포털 검색"
          >
            <label htmlFor="searchEngine" className="sr-only">검색 포털 선택</label>
            <select
              id="searchEngine"
              className="search-select"
              value={engine}
              onChange={(e) => setEngine(e.target.value)}
            >
              <option value="google">구글</option>
              <option value="naver">네이버</option>
              <option value="daum">다음</option>
              <option value="youtube">유튜브</option>
            </select>
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

          <div className="tags" aria-label="인기 태그">
            <span className="tag"># 최신 링크</span>
            <span className="tag"># 인기 사이트</span>
            <span className="tag"># 추천 모음</span>
            <span className="tag"># 커뮤니티</span>
            <span className="tag"># 공지사항</span>
          </div>

          <div className="stats">
            <div className="stat">
              <div className="stat-label">전체 링크</div>
              <div className="stat-num">368+</div>
            </div>
            <div className="stat">
              <div className="stat-label">오늘 업데이트</div>
              <div className="stat-num">12</div>
            </div>
            <div className="stat">
              <div className="stat-label">인기 카테고리</div>
              <div className="stat-num">15</div>
            </div>
            <div className="stat">
              <div className="stat-label">주간 방문</div>
              <div className="stat-num">24.8K</div>
            </div>
          </div>
        </div>

        <div className="hero-side">
          <div className="info-card">
            <small>오늘링크 서비스 안내</small>
            <strong>화이트 포털형 + 카드 중심 구조</strong>
            <p className="info-card-desc">
              자주 찾는 링크를 한 곳에 정리하고, 검색은 원하는 포털에서 바로
              확인할 수 있습니다.
            </p>
          </div>
          <div className="quick-grid">
            <a href="#banners" className="quick-item">
              <b>🔥 인기 링크</b>
              <span className="muted">가장 많이 찾는 링크 모음</span>
            </a>
            <a href="#rank-section" className="quick-item">
              <b>🆕 신규 등록</b>
              <span className="muted">최근 추가된 사이트 정리</span>
            </a>
            <a href="#notices" className="quick-item">
              <b>📢 공지사항</b>
              <span className="muted">업데이트 및 안내</span>
            </a>
            <a href="#banners" className="quick-item">
              <b>🎯 배너 영역</b>
              <span className="muted">이벤트/홍보 슬롯 자리</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
