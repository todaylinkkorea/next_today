'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { LINK_CATEGORIES } from '../../data/link-data'
import { TELEGRAM_URL } from '../../data/site-config'
import { useSiteUi } from './SiteUiProvider'
import { useLayer } from './useLayer'
import { CategoryIcon } from './CategoryIcon'

export function SidebarDrawer() {
  const { drawerOpen, closeDrawer } = useSiteUi()
  const panelRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  useLayer(drawerOpen, panelRef, {
    onClose: closeDrawer,
    layerEls: [overlayRef],
  })

  return (
    <>
      <div
        ref={overlayRef}
        className={`sidebar-drawer-overlay${drawerOpen ? ' active' : ''}`}
        id="sidebar-drawer-overlay"
        onClick={closeDrawer}
        aria-hidden="true"
      />
      <div
        ref={panelRef}
        className={`sidebar-drawer-panel${drawerOpen ? ' active' : ''}`}
        id="sidebar-drawer-panel"
        role="dialog"
        aria-modal="true"
        aria-label="전체 카테고리 메뉴"
        inert={!drawerOpen}
      >
        <div className="sidebar-drawer-head">
          <span style={{ fontSize: '16.5px', fontWeight: 900, color: 'var(--text-main)' }}>
            ✨ 전체 카테고리 메뉴
          </span>
          <button
            type="button"
            className="toss-modal-close-btn"
            style={{ position: 'static' }}
            aria-label="닫기"
            onClick={closeDrawer}
          >
            ✕
          </button>
        </div>
        <div className="sidebar-drawer-body">
          <div className="drawer-cat-grid-2" id="drawer-cat-grid">
            {LINK_CATEGORIES.map(({ slug, icon, name }) => (
              <Link
                key={slug}
                href={`/category/${slug}`}
                className="drawer-cat-card"
                onClick={closeDrawer}
              >
                <CategoryIcon icon={icon} />
                <span style={{ fontSize: '13px', fontWeight: 850, color: 'var(--text-site)' }}>{name}</span>
              </Link>
            ))}
          </div>

          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="drawer-official-btn"
            onClick={closeDrawer}
          >
            <span aria-hidden="true">✈️</span>
            <span>오늘링크 공식 채널 바로가기</span>
          </a>

          <div className="drawer-chips-row">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="drawer-chip-btn"
              onClick={closeDrawer}
            >
              <span aria-hidden="true">📢</span>
              <span>배너문의</span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
