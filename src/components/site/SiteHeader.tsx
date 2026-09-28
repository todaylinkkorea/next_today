'use client'

import Link from 'next/link'
import { EngineSearch } from './EngineSearch'
import { useSiteUi } from './SiteUiProvider'

function LinkMark({ mobile = false }: { mobile?: boolean }) {
  return (
    <div className="brand-logo-badge" style={mobile ? { width: 34, height: 34 } : undefined}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={mobile ? { width: 16, height: 16 } : undefined}
        aria-hidden="true"
      >
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    </div>
  )
}

function HamburgerButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      className="hamburger-menu-btn"
      title="전체 카테고리 메뉴"
      aria-label="전체 카테고리 메뉴"
      onClick={onClick}
    >
      ☰
    </button>
  )
}

export function SiteHeader() {
  const { openDrawer } = useSiteUi()

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <div className="header-left-col">
            <HamburgerButton onClick={openDrawer} />
          </div>
          <div className="header-center-col">
            <Link href="/" className="brand-logo-main" aria-label="홈으로">
              <LinkMark />
              <div style={{ display: 'flex', alignItems: 'baseline' }}>
                <span className="logo-text-today">오늘</span><span className="logo-text-link">링크</span>
              </div>
            </Link>
          </div>
          <div className="header-right-col">
            <EngineSearch />
          </div>
        </div>
      </header>

      <div className="mobile-slim-header">
        <HamburgerButton onClick={openDrawer} />
        <Link href="/" className="mobile-slim-logo" aria-label="홈으로">
          <LinkMark mobile />
          <div>
            <span style={{ color: 'var(--text-main)' }}>오늘</span><span style={{ color: 'var(--mint-bright)' }}>링크</span>
          </div>
        </Link>
      </div>
    </>
  )
}
