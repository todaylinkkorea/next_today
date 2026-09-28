import test from 'node:test';
import assert from 'node:assert/strict';
import { formatKst } from './kst.ts';

test('formats Asia/Seoul time', () => {
  assert.equal(formatKst(new Date('2026-09-28T15:04:05Z')), 'KST 09. 29. 00:04:05');
});

test('pads single digits', () => {
  assert.equal(formatKst(new Date('2026-01-02T00:00:09Z')), 'KST 01. 02. 09:00:09');
});
