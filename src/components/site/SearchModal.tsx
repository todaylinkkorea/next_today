'use client'

import { useRef, useState } from 'react'
import { ALL_SITES } from '../../data/link-data'
import { searchSites } from '../../lib/link-data'
import { useSiteUi } from './SiteUiProvider'
import { useLayer } from './useLayer'
import { CategoryIcon } from './CategoryIcon'
import { exitHref, EXIT_LINK_REL } from '../../lib/exit-link'

function SearchResults() {
  const [term, setTerm] = useState('')
  const { closeSearch } = useSiteUi()
  const results = searchSites(ALL_SITES, term)

  return (
    <>
      <div style={{ position: 'relative', marginBottom: '16px' }}>
        <input
          type="text"
          id="site-search-input"
          style={{ width: '100%', height: '52px', background: 'var(--bg-subtle)', border: '1.5px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '0 16px', fontSize: '16px', fontWeight: 900, color: 'var(--text-main)', outline: 'none' }}
          placeholder={ALL_SITES.length >= 2 ? `예: ${ALL_SITES[0].name}, ${ALL_SITES[1].name} 등...` : '예: 항목 1, 항목 2 등...'}
          aria-label="사이트 검색어"
          autoComplete="off"
          enterKeyHint="search"
          value={term}
          onChange={(event) => setTerm(event.target.value)}
        />
      </div>

      <div
        id="site-search-results"
        style={{ maxHeight: '320px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '10px' }}
      >
        {results.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '30px', color: 'var(--text-desc)', fontSize: '13.5px' }}>
            검색 결과가 없습니다.
          </div>
        ) : results.map((site) => (
          <a
            key={`${site.categorySlug}${site.url}`}
            className="search-result-row"
            href={exitHref(site.url)}
            target="_blank"
            rel={EXIT_LINK_REL}
            onClick={closeSearch}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0 }}>
              <span style={{ fontSize: '16px', flexShrink: 0 }}><CategoryIcon icon={site.icon} /></span>
              <div className="min-w-0">
                <div className="ellipsis-box" style={{ fontSize: '14px', fontWeight: 850, color: 'var(--text-main)' }}>{site.name}</div>
                <div className="ellipsis-box" style={{ fontSize: '11px', color: '#0284C7', fontWeight: 700 }}>{site.categoryName}</div>
              </div>
            </div>
            <span className="search-result-go">바로가기 ↗</span>
          </a>
        ))}
      </div>
    </>
  )
}

export function SearchModal() {
  const { searchOpen, closeSearch } = useSiteUi()
  const overlayRef = useRef<HTMLDivElement>(null)

  useLayer(searchOpen, overlayRef, {
    initialFocus: '#site-search-input',
    onClose: closeSearch,
  })

  return (
    <div
      ref={overlayRef}
      className={`toss-modal-overlay${searchOpen ? ' active' : ''}`}
      id="site-search-modal"
      onClick={(event) => {
        if (event.target === event.currentTarget) closeSearch()
      }}
    >
      <div className="toss-modal-sheet" role="dialog" aria-modal="true" aria-label="사이트 검색">
        <button type="button" className="toss-modal-close-btn" onClick={closeSearch} aria-label="닫기">✕</button>
        <div className="toss-badge-chip gold">🔍 사이트 내 실시간 검색</div>
        <h2 className="toss-modal-title">찾으시는 사이트나 키워드를 입력하세요</h2>
        <p className="toss-modal-subtitle">오늘링크에 등록된 모든 제휴 및 인기 랭킹 사이트를 실시간으로 검색합니다.</p>
        <SearchResults key={String(searchOpen)} />
      </div>
    </div>
  )
}
