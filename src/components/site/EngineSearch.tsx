'use client'

import { useState } from 'react'
import { buildEngineSearchUrl, SEARCH_ENGINES, type SearchEngineId } from '../../data/site-config'

export function EngineSearch() {
  const [engine, setEngine] = useState<SearchEngineId>('google')
  const [query, setQuery] = useState('')

  const submitSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const url = buildEngineSearchUrl(engine, query)
    if (url !== null) window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <form role="search" className="search-engine-combo" onSubmit={submitSearch}>
      <select
        className="engine-select-dropdown"
        id="pc-engine-select"
        aria-label="검색 엔진 선택"
        value={engine}
        onChange={(event) => setEngine(event.target.value as SearchEngineId)}
      >
        {(Object.entries(SEARCH_ENGINES) as [SearchEngineId, { label: string; url: string }][]).map(([id, searchEngine]) => (
          <option key={id} value={id}>{searchEngine.label}</option>
        ))}
      </select>
      <input
        type="text"
        className="engine-input-box"
        id="pc-engine-query"
        aria-label="검색어"
        placeholder="검색어..."
        autoComplete="off"
        enterKeyHint="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === 'Enter' && (event.nativeEvent.isComposing || event.nativeEvent.keyCode === 229)) {
            event.preventDefault()
          }
        }}
      />
      <button type="submit" className="engine-search-btn" aria-label="검색">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-4-4" />
        </svg>
      </button>
    </form>
  )
}
