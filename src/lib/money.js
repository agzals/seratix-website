/** Format rupiah: 149000 -> "Rp149.000". Nilai tidak valid -> "Rp0". */
export function rupiah(n) {
  const v = Number(n)
  return 'Rp' + (Number.isFinite(v) ? Math.round(v) : 0).toLocaleString('id-ID')
}
