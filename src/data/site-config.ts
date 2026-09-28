export const LIFETIME_DOMAIN = '오늘링크.com';
export const LIFETIME_URL = 'https://오늘링크.com';
export const TELEGRAM_URL = 'https://t.me/tdlnow';
export const PRETENDARD_CSS_URL = 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css';
export const PRETENDARD_CSS_INTEGRITY = 'sha384-ei/b2Mz3F5J8nqTvpKS89CkzDCuD7Cc+/F+OsaPUKItzHgLNKnGq3rjtYq/B7RnO';
export const FEATURED_SLUGS = ['movie', 'adult', 'toto', 'webtoon'] as const;
export const RANK_LIMIT = 7;

export type SearchEngineId =
  | 'google'
  | 'naver'
  | 'daum'
  | 'nate'
  | 'youtube'
  | 'zum'
  | 'bing';

export const SEARCH_ENGINES: Record<SearchEngineId, { label: string; url: string }> = {
  google: { label: 'Google', url: 'https://www.google.com/search?q=' },
  naver: { label: 'NAVER', url: 'https://search.naver.com/search.naver?query=' },
  daum: { label: '다음', url: 'https://search.daum.net/search?q=' },
  nate: { label: 'Nate', url: 'https://search.nate.com/search/all.html?q=' },
  youtube: { label: 'YouTube', url: 'https://www.youtube.com/results?search_query=' },
  zum: { label: 'ZUM', url: 'https://search.zum.com/search.zum?query=' },
  bing: { label: 'BING', url: 'https://www.bing.com/search?q=' },
};

export function buildEngineSearchUrl(engine: string, query: string): string | null {
  const trimmedQuery = query.trim();
  if (!trimmedQuery) return null;

  const selectedEngine = Object.prototype.hasOwnProperty.call(SEARCH_ENGINES, engine)
    ? SEARCH_ENGINES[engine as SearchEngineId]
    : SEARCH_ENGINES.google;
  return selectedEngine.url + encodeURIComponent(trimmedQuery);
}
