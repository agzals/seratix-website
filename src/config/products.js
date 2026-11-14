// Produk Seratix selain layanan. Saat ini: Seratix Hound (shared inbox WhatsApp + Instagram), masih BETA.
//
// Alamat aplikasi Hound diatur lewat variabel lingkungan VITE_HOUND_URL (mis. https://hound.seratix.com).
// Jika KOSONG, website tidak menampilkan link ke aplikasi (tidak ada link mati); sebagai gantinya tombolnya
// menjadi "Minta akses beta" yang mengarah ke form kontak.
import { joinUrl, normalizeExternalUrl } from '../lib/url.js'

const env = import.meta.env ?? {}

export const HOUND = {
  name: 'Seratix Hound',
  short: 'Hound',
  tagline: 'Stop chasing. Let Hound do it.',
  status: 'Beta',
  trialDays: 14,
  // Hanya untuk teks pemasaran "mulai dari". Harga lengkap ada di aplikasi Hound (satu sumber kebenaran).
  // Ini HIPOTESIS harga beta, belum terbukti; ubah di sini jika harga di Hound berubah.
  startingPrice: 149000,
}

/** Membuat helper link dari alamat mentah. Dipisah dari env agar bisa dites. */
export function createHoundLinks(rawUrl) {
  const url = normalizeExternalUrl(rawUrl)
  return { url, live: Boolean(url), link: (path = '') => joinUrl(url, path) }
}
export const HOUND_LINKS = createHoundLinks(env.VITE_HOUND_URL)

// Topik form kontak: /kontak?topik=hound memilih opsi ini secara otomatis.
export const HOUND_TOPIC = 'hound'
export const HOUND_TOPIC_LABEL = 'Seratix Hound (akses beta)'
export const serviceForTopic = (topic) => (topic === HOUND_TOPIC ? HOUND_TOPIC_LABEL : undefined)
