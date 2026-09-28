import type { Metadata } from 'next';
import '@/styles/todaylink.css';
import { LINK_CATEGORIES } from '@/data/link-data';
import { PRETENDARD_CSS_INTEGRITY, PRETENDARD_CSS_URL } from '@/data/site-config';

export const metadata: Metadata = {
  title: '페이지를 찾을 수 없음 | 오늘링크',
  robots: { index: false },
};

export default function NotFound() {
  return (
    <>
      <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="" />
      <link
        rel="stylesheet"
        href={PRETENDARD_CSS_URL}
        integrity={PRETENDARD_CSS_INTEGRITY}
        crossOrigin="anonymous"
        precedence="default"
      />
      <main
        className="container"
        style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <div className="error-state-card" role="alert">
          <span className="error-state-icon" aria-hidden="true">🔍</span>
          <h1 className="error-state-title">페이지를 찾을 수 없어요</h1>
          <p className="error-state-desc">주소가 바뀌었거나 삭제된 페이지입니다.</p>
          <div className="error-state-actions">
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- hard navigation prevents route-group CSS leakage. */}
            <a href="/" className="pill-action-btn">홈으로</a>
            {LINK_CATEGORIES.slice(0, 3).map((category) => (
              <a key={category.slug} href={`/category/${category.slug}`} className="pill-action-btn">
                {category.name}
              </a>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
