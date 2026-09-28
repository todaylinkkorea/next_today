'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSiteUi } from './SiteUiProvider'

export function MobileBottomNav() {
  const pathname = usePathname()
  const { openSearch } = useSiteUi()
  const homeActive = pathname === '/'

  return (
    <nav aria-label="모바일 하단 메뉴" className="mobile-sticky-bottom-bar">
      <Link
        href="/"
        className={`mobile-nav-item${homeActive ? ' active' : ''}`}
        aria-current={homeActive ? 'page' : undefined}
      >
        <span className="mobile-nav-icon" aria-hidden="true">🏠</span>
        <span>홈</span>
      </Link>
      <button
        type="button"
        className="mobile-nav-item"
        onClick={openSearch}
        style={{ background: 'none', border: 0, font: 'inherit', color: 'inherit' }}
      >
        <span className="mobile-nav-icon" aria-hidden="true">🔍</span>
        <span>검색</span>
      </button>
    </nav>
  )
}
