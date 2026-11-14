// Aset brand. Ukuran (width/height) dipakai untuk atribut <img> agar halaman tidak "melompat" saat gambar dimuat.
// Mengganti logo: timpa file di public/brand/, lalu perbarui width/height di sini.
// Menjalankan `node --test` memeriksa bahwa ukuran di sini sama dengan ukuran file sebenarnya.
export const BRAND = {
  logo: {
    light: { src: '/brand/logo-light.png', width: 440, height: 128 }, // ikon + tulisan navy, untuk latar terang
    dark: { src: '/brand/logo-dark.png', width: 440, height: 128 }, // ikon + tulisan putih, untuk latar gelap
    icon: { src: '/brand/logo-icon.png', width: 193, height: 192 }, // ikon S saja
  },
  ogImage: '/og-image.png', // 1200x630, dipakai saat link dibagikan
}
