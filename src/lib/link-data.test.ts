import assert from 'node:assert/strict';
import test from 'node:test';
import raw from '../data/categories.json' with { type: 'json' };
import {
  categorySlugs,
  featuredSites,
  flattenSites,
  parseLinkData,
  searchSites,
} from './link-data.ts';

test('rejects duplicate slug', () => {
  assert.throws(() => parseLinkData({ categories: [{ slug: 'a', name: 'A', icon: 'A', items: [{ name: 'one', url: 'https://one.test' }] }, { slug: 'a', name: 'B', icon: 'B', items: [{ name: 'two', url: 'https://two.test' }] }] }), /categories\[1\]\.slug/);
});

test('rejects javascript: url', () => {
  assert.throws(() => parseLinkData({ categories: [{ slug: 'a', name: 'A', icon: 'A', items: [{ name: 'one', url: 'javascript:alert(1)' }] }] }), /categories\[0\]\.items\[0\]\.url/);
});

test('rejects 11 items', () => {
  const items = Array.from({ length: 11 }, (_, index) => ({ name: `site ${index}`, url: `https://site-${index}.test` }));
  assert.throws(() => parseLinkData({ categories: [{ slug: 'a', name: 'A', icon: 'A', items }] }), /categories\[0\]\.items/);
});

test('rejects empty name', () => {
  assert.throws(() => parseLinkData({ categories: [{ slug: 'a', name: '   ', icon: 'A', items: [{ name: 'one', url: 'https://one.test' }] }] }), /categories\[0\]\.name/);
});

test('rejects unknown status', () => {
  assert.throws(() => parseLinkData({ categories: [{ slug: 'a', name: 'A', icon: 'A', items: [{ name: 'one', url: 'https://one.test', status: 'offline' }] }] }), /categories\[0\]\.items\[0\]\.status/);
});

test('accepts real categories.json (10 categories, 70 items)', () => {
  const categories = parseLinkData(raw);
  assert.equal(categories.length, 10);
  assert.equal(categories.reduce((total, category) => total + category.items.length, 0), 70);
});

test('categorySlugs matches json', () => {
  const categories = parseLinkData(raw);
  assert.deepEqual(categorySlugs(categories), categories.map(({ slug }) => slug));
});

test('searchSites filters by name and category, caps at 20', () => {
  const categories = parseLinkData({ categories: ['a', 'b', 'c'].map((slug, categoryIndex) => ({ slug: `movies-${slug}`, name: 'Movie Sites', icon: 'M', items: Array.from({ length: categoryIndex === 2 ? 5 : 10 }, (_, index) => ({ name: `Site ${categoryIndex * 10 + index}`, url: `https://site-${categoryIndex * 10 + index}.test` })) })) });
  const sites = flattenSites(categories);
  assert.equal(searchSites(sites, 'movie').length, 20);
  assert.equal(searchSites(sites, 'SITE 2')[0]?.name, 'Site 2');
  assert.equal(searchSites(sites, '   ').length, 20);
});

test('featuredSites returns rank-1 of each slug and skips unknown', () => {
  const categories = parseLinkData(raw);
  const featured = featuredSites(categories, ['photo', 'missing', 'movie']);
  assert.deepEqual(featured.map(({ categorySlug, rank }) => [categorySlug, rank]), [['photo', 1], ['movie', 1]]);
});
