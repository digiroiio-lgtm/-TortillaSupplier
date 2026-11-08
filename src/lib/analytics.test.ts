import { test } from 'node:test';
import assert from 'node:assert/strict';
import { classifyContactHref } from './analytics';

test('classifies WhatsApp links', () => {
  assert.equal(classifyContactHref('https://wa.me/905531229372?text=hi'), 'whatsapp');
  assert.equal(classifyContactHref('https://api.whatsapp.com/send?phone=1'), 'whatsapp');
});

test('classifies email and phone links', () => {
  assert.equal(classifyContactHref('mailto:info@tortillasupplier.com'), 'email');
  assert.equal(classifyContactHref('MAILTO:info@tortillasupplier.com'), 'email');
  assert.equal(classifyContactHref('tel:+905531229372'), 'phone');
});

test('ignores ordinary links', () => {
  assert.equal(classifyContactHref('/contact'), null);
  assert.equal(classifyContactHref('https://example.com/wa.me/'), null);
});
