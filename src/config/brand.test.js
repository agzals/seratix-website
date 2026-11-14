import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { BRAND } from './brand.js'

// Ukuran PNG dibaca dari header (byte 16-23), bukan dari library.
function pngSize(url) {
  const buf = readFileSync(url)
  assert.equal(buf.subarray(1, 4).toString(), 'PNG', `${url} bukan PNG`)
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) }
}
const pub = (p) => new URL('../../public' + p, import.meta.url)

test('ukuran logo di brand.js sama dengan file sebenarnya (mencegah layout melompat)', () => {
  for (const [name, l] of Object.entries(BRAND.logo)) {
    assert.deepEqual(pngSize(pub(l.src)), { width: l.width, height: l.height }, `logo ${name}`)
  }
})
test('varian terang dan gelap memiliki ukuran sama (bisa ditukar tanpa pergeseran)', () => {
  assert.deepEqual([BRAND.logo.light.width, BRAND.logo.light.height], [BRAND.logo.dark.width, BRAND.logo.dark.height])
})
test('gambar OG berukuran 1200x630 dan ikon favicon/apple-touch ada', () => {
  assert.deepEqual(pngSize(pub(BRAND.ogImage)), { width: 1200, height: 630 })
  assert.deepEqual(pngSize(pub('/apple-touch-icon.png')), { width: 180, height: 180 })
  assert.deepEqual(pngSize(pub('/favicon-32.png')), { width: 32, height: 32 })
  const ico = readFileSync(pub('/favicon.ico'))
  assert.deepEqual([ico.readUInt16LE(0), ico.readUInt16LE(2)], [0, 1]) // header ICO valid
})
