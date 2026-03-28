import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-inner">
        <nav aria-label="사이트 맵">
          <ul className="footer-links" role="list">
            <li><Link href="/">홈</Link></li>
            <li><Link href="#banners">인기링크</Link></li>
            <li><Link href="#categories">카테고리</Link></li>
            <li><Link href="#rank-section">바로가기</Link></li>
            <li><Link href="/articles">Docs</Link></li>
            <li><Link href="/about">소개</Link></li>
          </ul>
        </nav>
        <p>
          <small>
            본 사이트는 링크 정보만 제공하며, 각 사이트의 내용에 대한 책임은 지지 않습니다.<br />
            © 2026 오늘링크 · 주소모아와 주소월드를 잇는 포털형 링크 모음 서비스
          </small>
        </p>
      </div>
    </footer>
  );
}
