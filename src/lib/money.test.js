import test from 'node:test'
import assert from 'node:assert/strict'
import { rupiah } from './money.js'

test('format rupiah Indonesia', () => {
  assert.equal(rupiah(149000), 'Rp149.000')
  assert.equal(rupiah(1490000), 'Rp1.490.000')
  assert.equal(rupiah(0), 'Rp0')
  assert.equal(rupiah(356.65), 'Rp357')
  assert.equal(rupiah('abc'), 'Rp0')
  assert.equal(rupiah(undefined), 'Rp0')
})
