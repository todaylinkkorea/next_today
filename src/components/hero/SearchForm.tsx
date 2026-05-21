'use client';

import { useState } from 'react';

const ENGINES = {
  google: { name: '구글', icon: '/images/google_s.svg', url: 'https://www.google.com/search?q=' },
  naver: { name: '네이버', icon: '/images/naver_s.svg', url: 'https://search.naver.com/search.naver?query=' },
  daum: { name: '다음', icon: '/images/daum.svg', url: 'https://search.daum.net/search?q=' },
  youtube: { name: '유튜브', icon: '/images/youtube_s.svg', url: 'https://www.youtube.com/results?search_query=' }
};

export default function SearchForm() {
  const [engine, setEngine] = useState<keyof typeof ENGINES>('google');
  const [keyword, setKeyword] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!keyword.trim()) return;
    window.open(ENGINES[engine].url + encodeURIComponent(keyword), '_blank');
  };

  return (
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
  );
}
