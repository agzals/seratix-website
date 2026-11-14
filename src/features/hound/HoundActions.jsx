import { Button } from '@/components/ui'
import { HOUND, HOUND_LINKS } from '@/config/products'
import { ROUTES } from '@/config/navigation'

/**
 * Tombol aksi Hound. Menyesuaikan diri dengan ada/tidaknya VITE_HOUND_URL:
 *  - live  : "Coba gratis 14 hari" + "Lihat harga" (membuka aplikasi Hound di tab baru)
 *  - belum : "Minta akses beta" + "Lihat fitur" (tidak ada link mati)
 * `onDark` memakai gaya tombol untuk latar gelap.
 */
export default function HoundActions({ onDark = false, secondaryHref = '#fitur-hound' }) {
  const ghost = onDark ? 'ghost-light' : 'ghost'
  if (HOUND_LINKS.live) {
    return (
      <>
        <Button href={HOUND_LINKS.link('/daftar')}>Coba gratis {HOUND.trialDays} hari</Button>
        <Button href={HOUND_LINKS.link('/harga')} variant={ghost}>Lihat harga</Button>
      </>
    )
  }
  return (
    <>
      <Button to={ROUTES.contactHound}>Minta akses beta</Button>
      <Button href={secondaryHref} variant={ghost}>Lihat fitur</Button>
    </>
  )
}
