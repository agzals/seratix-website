import test from 'node:test'
import assert from 'node:assert/strict'
import { joinUrl, normalizeExternalUrl } from './url.js'

test('URL valid dirapikan: slash akhir, query, dan hash dibuang', () => {
  assert.equal(normalizeExternalUrl('https://hound.seratix.com'), 'https://hound.seratix.com')
  assert.equal(normalizeExternalUrl('  https://hound.seratix.com/  '), 'https://hound.seratix.com')
  assert.equal(normalizeExternalUrl('https://hound.seratix.com/?a=1#x'), 'https://hound.seratix.com')
  assert.equal(normalizeExternalUrl('http://localhost:5173/'), 'http://localhost:5173')
  assert.equal(normalizeExternalUrl('https://seratix-hound.vercel.app/app/'), 'https://seratix-hound.vercel.app/app')
})
test('kredensial di URL dibuang', () => {
  assert.equal(normalizeExternalUrl('https://user:pass@hound.seratix.com/'), 'https://hound.seratix.com')
})
test('kosong, tidak valid, atau skema berbahaya -> string kosong', () => {
  for (const v of [undefined, null, '', '   ', 'hound.seratix.com', 'ftp://x.com', 'javascript:alert(1)', 'data:text/html,<b>', 'https://', 42, {}]) {
    assert.equal(normalizeExternalUrl(v), '', `harus ditolak: ${String(v)}`)
  }
})
test('joinUrl', () => {
  assert.equal(joinUrl('https://h.id', '/harga'), 'https://h.id/harga')
  assert.equal(joinUrl('https://h.id', 'daftar'), 'https://h.id/daftar')
  assert.equal(joinUrl('https://h.id', '/'), 'https://h.id')
  assert.equal(joinUrl('https://h.id'), 'https://h.id')
  assert.equal(joinUrl('', '/harga'), '')
  assert.equal(joinUrl('https://h.id/app', '/harga'), 'https://h.id/app/harga')
})
