import assert from 'node:assert/strict';
import test from 'node:test';
import { EXIT_LINK_REL, exitHref, isSafeHttpUrl, parseExitTarget } from './exit-link.ts';

test('exitHref encodes url', () => {
  assert.equal(
    exitHref('https://a.test/x?y=1&z=2'),
    '/exit' + '?url=https%3A%2F%2Fa.test%2Fx%3Fy%3D1%26z%3D2',
  );
  assert.equal(EXIT_LINK_REL, 'nofollow noopener');
});

test('isSafeHttpUrl rejects javascript/data/vbscript', () => {
  for (const url of [
    'javascript:alert(1)',
    'JavaScript:alert(1)',
    ' javascript:alert(1)',
    'data:text/html,x',
    'vbscript:x',
  ]) {
    assert.equal(isSafeHttpUrl(url), false);
  }
});

test('isSafeHttpUrl rejects schemes split by tab/newline', () => {
  assert.equal(isSafeHttpUrl('java\tscript:alert(1)'), false);
  assert.equal(isSafeHttpUrl('java\nscript:alert(1)'), false);
});

test('isSafeHttpUrl rejects relative, protocol-relative and empty', () => {
  for (const url of ['', '   ', '/path', '//evil.com', 'example.com', 'ftp://x.com']) {
    assert.equal(isSafeHttpUrl(url), false);
  }
});

test('isSafeHttpUrl accepts http and https', () => {
  assert.equal(isSafeHttpUrl('http://a.com'), true);
  assert.equal(isSafeHttpUrl('https://a.com/x?y=1'), true);
});

test('parseExitTarget roundtrips exitHref for urls containing %', () => {
  const url = 'https://a.com/?q=100%25&x=%zz';
  const param = new URL('http://h' + exitHref(url)).searchParams.get('url');

  assert.equal(parseExitTarget(param), url);
});

test('parseExitTarget trims surrounding whitespace', () => {
  assert.equal(parseExitTarget('  https://a.com  '), 'https://a.com');
});

test('parseExitTarget returns null for null/empty/javascript', () => {
  assert.equal(parseExitTarget(null), null);
  assert.equal(parseExitTarget(''), null);
  assert.equal(parseExitTarget('javascript:alert(1)'), null);
});
