'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  return (
    <>
      <header className="topbar" role="banner">
        <div className="topbar-inner">
          <Link href="/" className="brand" aria-label="오늘링크 홈으로 이동">
            <div className="brand-badge" aria-hidden="true">오</div>
            <div>오늘링크</div>
          </Link>
          <nav aria-label="주요 메뉴">
            <ul className="menu" role="list">
              <li><Link href="/">홈</Link></li>
              <li><Link href="/#banners">인기링크</Link></li>
              <li><Link href="/#categories">카테고리</Link></li>
              <li><Link href="/#rank-section">바로가기</Link></li>
              <li><Link href="/articles">아티클</Link></li>
              <li><Link href="/about">소개</Link></li>
            </ul>
          </nav>
          <button
            className="mobile-menu-btn"
            onClick={toggleMenu}
            aria-label="메뉴 열기"
            aria-expanded={menuOpen}
          >
            ☰
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="mobile-menu open" role="dialog" aria-label="모바일 메뉴">
          <div className="mobile-menu-panel">
            <button className="mobile-menu-close" onClick={closeMenu} aria-label="메뉴 닫기">
              ✕ 닫기
            </button>
            <ul className="mobile-menu-list" role="list">
              <li><Link href="/" onClick={closeMenu}>홈</Link></li>
              <li><Link href="/#banners" onClick={closeMenu}>인기링크</Link></li>
              <li><Link href="/#categories" onClick={closeMenu}>카테고리</Link></li>
              <li><Link href="/#rank-section" onClick={closeMenu}>바로가기</Link></li>
              <li><Link href="/articles" onClick={closeMenu}>아티클</Link></li>
              <li><Link href="/about" onClick={closeMenu}>소개</Link></li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
