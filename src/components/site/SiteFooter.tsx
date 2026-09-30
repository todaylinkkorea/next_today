import Link from 'next/link';

export function SiteFooter() {
  return (
    <>
      <section className="container" style={{ marginTop: 6, textAlign: 'center', paddingTop: 4, borderTop: '1px solid var(--border-color)' }}>
        <p style={{ fontSize: 10, color: 'var(--text-desc)', margin: 0, fontWeight: 600 }}>
          오늘링크는 외부 사이트 정보를 정리해 제공하는 실시간 포털 안내 플랫폼이며, 게재된 사이트와 직접적인 운영 관계는 없습니다.
        </p>
      </section>

      <footer className="site-footer" style={{ marginTop: 2, padding: '2px 0 4px', textAlign: 'center', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <Link href="/" style={{ fontSize: 11, fontWeight: 800, color: 'var(--text-main)', cursor: 'pointer' }}>
            오늘<span style={{ color: 'var(--mint-bright)' }}>링크</span>
          </Link>
          <p style={{ fontSize: 9.5, color: 'var(--text-muted)', margin: '1px 0 0', fontWeight: 600 }}>
            Copyright © 2026 오늘링크. All rights reserved.
          </p>
          <p style={{ fontSize: 10, color: 'var(--text-muted)', margin: 0, textAlign: 'center' }}>
            <a href="/about" style={{ color: 'var(--text-muted)' }}>소개</a>
          </p>
        </div>
      </footer>
    </>
  );
}
