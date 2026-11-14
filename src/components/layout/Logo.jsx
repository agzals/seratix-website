import { Link } from 'react-router-dom'
import { BRAND } from '@/config/brand'
import { SITE } from '@/config/site'

/**
 * Logo Seratix (gambar).
 * - Default: mengikuti tema. Dua gambar dirender, CSS (styles/brand.css) menyembunyikan salah satunya sesuai [data-theme].
 * - `onDark` (atau `light` dari versi lama): selalu varian putih, untuk latar yang selalu gelap seperti footer.
 * `height` dalam px; lebar dihitung dari rasio gambar sehingga tidak ada layout shift.
 */
export default function Logo({ onDark = false, light = false, height = 34 }) {
  const forceDark = onDark || light
  const size = (img) => ({ width: Math.round((img.width / img.height) * height), height })
  const { light: lightImg, dark: darkImg } = BRAND.logo

  return (
    <Link to="/" className="logo" aria-label={`${SITE.name} beranda`}>
      {/* alt kosong: nama sudah ada di aria-label link */}
      {!forceDark && <img className="logo-img logo-img-light" src={lightImg.src} alt="" decoding="async" {...size(lightImg)} />}
      <img className={`logo-img ${forceDark ? '' : 'logo-img-dark'}`.trim()} src={darkImg.src} alt="" decoding="async" {...size(darkImg)} />
    </Link>
  )
}
