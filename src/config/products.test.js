import test from 'node:test'
import assert from 'node:assert/strict'
import { HOUND, HOUND_LINKS, HOUND_TOPIC_LABEL, createHoundLinks, serviceForTopic } from './products.js'
import { MAIN_NAV, ROUTES } from './navigation.js'
import * as hound from '../content/hound.js'
import { MARQUEE } from '../content/process.js'

test('tanpa VITE_HOUND_URL: tidak live dan tidak ada link (tidak ada link mati)', () => {
  const l = createHoundLinks('')
  assert.deepEqual([l.live, l.url, l.link('/daftar')], [false, '', ''])
  assert.equal(createHoundLinks(undefined).live, false)
})
test('URL tidak valid atau berbahaya dianggap tidak live', () => {
  assert.equal(createHoundLinks('javascript:alert(1)').live, false)
  assert.equal(createHoundLinks('hound.seratix.com').live, false)
})
test('dengan URL: link ke halaman Hound dibentuk benar', () => {
  const l = createHoundLinks('https://hound.seratix.com/')
  assert.equal(l.live, true)
  assert.deepEqual([l.link('/daftar'), l.link('/harga'), l.link()], ['https://hound.seratix.com/daftar', 'https://hound.seratix.com/harga', 'https://hound.seratix.com'])
})
test('di lingkungan uji env kosong sehingga HOUND_LINKS tidak live', () => assert.equal(HOUND_LINKS.live, false))
test('topik form kontak: hound memilih opsi Hound, topik lain tidak', () => {
  assert.equal(serviceForTopic('hound'), HOUND_TOPIC_LABEL)
  for (const t of [undefined, null, '', 'events', 'HOUND', 'hound ']) assert.equal(serviceForTopic(t), undefined)
})
test('rute dan menu: Hound ada, berlabel Beta, rute tidak ganda', () => {
  assert.equal(ROUTES.hound, '/hound'); assert.equal(ROUTES.contactHound, '/kontak?topik=hound')
  const item = MAIN_NAV.find((n) => n.to === ROUTES.hound)
  assert.deepEqual([item.label, item.badge], ['Hound', 'Beta'])
  const tos = MAIN_NAV.map((n) => n.to); assert.equal(new Set(tos).size, tos.length)
  assert.ok(MARQUEE.includes('Seratix Hound'))
})
test('isi halaman Hound lengkap dan tidak berisi klaim yang belum ada', () => {
  assert.equal(hound.HOUND_FEATURES.length, 6); assert.equal(hound.HOUND_STEPS.length, 3); assert.equal(hound.HOUND_PROBLEMS.length, 3)
  assert.ok(hound.HOUND_FAQ.length >= 6 && hound.HOUND_FAQ.every(([q, a]) => q && a))
  const all = JSON.stringify(hound)
  assert.match(all, /belum tersedia|belum ada/i)                        // keterbatasan disebut jujur
  assert.match(all, /tidak berafiliasi dengan Meta/)
  assert.doesNotMatch(all, /chatbot AI (yang|otomatis) /i)               // tidak menjanjikan chatbot
  assert.doesNotMatch(all, /Rp\s?\d/)                                     // tidak ada harga mentah yang bisa basi di teks
  assert.equal(HOUND.status, 'Beta'); assert.equal(HOUND.trialDays, 14)
})
