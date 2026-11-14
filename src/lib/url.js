// Helper URL murni (tanpa dependensi) supaya mudah dites dengan `node --test`.

/**
 * Mengembalikan URL http(s) tanpa slash di akhir (query/hash dibuang), atau '' bila kosong/tidak valid.
 * Skema selain http/https (mis. "javascript:") ditolak.
 */
export function normalizeExternalUrl(value) {
  const raw = String(value ?? '').trim()
  if (!raw) return ''
  let u
  try {
    u = new URL(raw)
  } catch {
    return ''
  }
  if (u.protocol !== 'https:' && u.protocol !== 'http:') return ''
  return (u.origin + u.pathname).replace(/\/+$/, '')
}

/** Menggabungkan base dan path dengan satu slash. Base kosong -> ''. */
export function joinUrl(base, path = '') {
  if (!base) return ''
  const p = String(path ?? '').trim()
  if (!p || p === '/') return base
  return base + (p.startsWith('/') ? p : `/${p}`)
}
