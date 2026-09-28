import assert from 'node:assert/strict';
import test from 'node:test';
import categoriesJson from './categories.json' with { type: 'json' };
import { ITEMS_PER_CATEGORY } from '../lib/link-data.ts';
import { categorySlugs, parseLinkData } from '../lib/link-data.ts';
import {
  FEATURED_SLUGS,
  RANK_LIMIT,
  SEARCH_ENGINES,
  buildEngineSearchUrl,
} from './site-config.ts';

test('featured slugs exist in categories.json', () => {
  const slugs = categorySlugs(parseLinkData(categoriesJson));
  for (const slug of FEATURED_SLUGS) assert.ok(slugs.includes(slug));
});

test('RANK_LIMIT equals ITEMS_PER_CATEGORY', () => {
  assert.equal(RANK_LIMIT, ITEMS_PER_CATEGORY);
});

test('buildEngineSearchUrl encodes query', () => {
  assert.equal(
    buildEngineSearchUrl('google', '오늘 링크 & 추천'),
    'https://www.google.com/search?q=%EC%98%A4%EB%8A%98%20%EB%A7%81%ED%81%AC%20%26%20%EC%B6%94%EC%B2%9C',
  );
});

test('unknown engine falls back to google', () => {
  assert.equal(
    buildEngineSearchUrl('unknown', 'today link'),
    'https://www.google.com/search?q=today%20link',
  );
});

test('empty or whitespace query returns null', () => {
  assert.equal(buildEngineSearchUrl('google', ''), null);
  assert.equal(buildEngineSearchUrl('google', '   '), null);
});

test('SEARCH_ENGINES has 7 engines in design order', () => {
  assert.deepEqual(Object.keys(SEARCH_ENGINES), [
    'google',
    'naver',
    'daum',
    'nate',
    'youtube',
    'zum',
    'bing',
  ]);
});
