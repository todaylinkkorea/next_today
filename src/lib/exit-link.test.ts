import assert from 'node:assert/strict';
import test from 'node:test';
import { EXIT_LINK_REL, exitHref } from './exit-link.ts';

test('exitHref encodes url', () => {
  assert.equal(
    exitHref('https://a.test/x?y=1&z=2'),
    '/exit' + '?url=https%3A%2F%2Fa.test%2Fx%3Fy%3D1%26z%3D2',
  );
  assert.equal(EXIT_LINK_REL, 'nofollow noopener');
});
