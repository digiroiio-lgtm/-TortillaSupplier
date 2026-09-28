import { test, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { GET } from './route';

const KEY = 'a1b2c3d4e5f6a7b8c9d0';
const original = process.env.INDEXNOW_KEY;
afterEach(() => {
  if (original === undefined) delete process.env.INDEXNOW_KEY;
  else process.env.INDEXNOW_KEY = original;
});

const call = (key: string) => GET(new Request(`https://x.test/${key}.txt`), { params: Promise.resolve({ key }) });

test('matching key returns 200 with only the key as text/plain', async () => {
  process.env.INDEXNOW_KEY = KEY;
  const res = await call(KEY);
  assert.equal(res.status, 200);
  assert.match(res.headers.get('content-type') ?? '', /^text\/plain/);
  assert.equal(await res.text(), KEY);
});

test('wrong key returns 404 without revealing the configured key', async () => {
  process.env.INDEXNOW_KEY = KEY;
  const res = await call('zzzzzzzzzzzzzzzz');
  assert.equal(res.status, 404);
  assert.doesNotMatch(await res.text(), new RegExp(KEY));
});

test('unset key returns 404', async () => {
  delete process.env.INDEXNOW_KEY;
  assert.equal((await call(KEY)).status, 404);
});
