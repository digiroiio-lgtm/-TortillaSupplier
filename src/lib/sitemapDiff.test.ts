import { test } from 'node:test';
import assert from 'node:assert/strict';
import { diffSitemaps, toSitemapMap } from './sitemapDiff';

test('detects created, updated and removed pages; ignores unchanged', () => {
  const prev = { 'https://x.test/a': '2026-01-01', 'https://x.test/b': '2026-01-01', 'https://x.test/gone': '2026-01-01' };
  const next = { 'https://x.test/a': '2026-01-01', 'https://x.test/b': '2026-02-01', 'https://x.test/new': '2026-02-01' };
  assert.deepEqual(diffSitemaps(prev, next), {
    added: ['https://x.test/new'],
    updated: ['https://x.test/b'],
    removed: ['https://x.test/gone'],
  });
});

test('identical sitemaps produce no changes', () => {
  const map = { 'https://x.test/a': '2026-01-01' };
  assert.deepEqual(diffSitemaps(map, { ...map }), { added: [], updated: [], removed: [] });
});

test('normalizes Date and string lastModified to YYYY-MM-DD', () => {
  assert.deepEqual(
    toSitemapMap([
      { url: 'https://x.test/a', lastModified: new Date('2026-03-31') },
      { url: 'https://x.test/b', lastModified: '2026-04-02T10:00:00Z' },
    ]),
    { 'https://x.test/a': '2026-03-31', 'https://x.test/b': '2026-04-02' },
  );
});
