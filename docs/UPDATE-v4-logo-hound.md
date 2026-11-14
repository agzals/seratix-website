# Update v4: logo baru + Seratix Hound

Patch ini hanya berisi file yang berubah, jadi `.env`, `.git`, `node_modules`, musik, dan data kamu tidak tersentuh.

## Yang berubah
1. **Logo baru** (ikon S gradient + tulisan "Seratix") di navbar dan footer. Navbar memakai tulisan navy di mode terang dan tulisan putih di mode gelap, footer selalu putih. Ikon tab browser (favicon), ikon iOS, dan gambar pratinjau saat link dibagikan juga diganti.
2. **Seratix Hound masuk ke website:**
   - menu **Hound** (badge *Beta*) di navbar dan footer
   - chip pengumuman di hero, teaser di beranda, dan halaman baru **`/hound`**
   - form kontak: `/kontak?topik=hound` otomatis memilih "Seratix Hound (akses beta)"
   - tombol ke aplikasi Hound diatur lewat **satu variabel**: `VITE_HOUND_URL`

## Cara memasang
1. Commit dulu perubahan lokalmu (supaya mudah dibandingkan): `git add . && git commit -m "sebelum update v4"`
2. Ekstrak zip ini **di atas folder project** (pilih "timpa semua"). Struktur folder di zip sama dengan project.
3. Lihat apa yang berubah: `git status` dan `git diff`. File yang kamu edit sendiri sebelumnya dan ikut tertimpa bisa dikembalikan dengan `git restore <file>`, lalu gabungkan manual.
4. Tambahkan di `.env` (dan di Vercel, lihat bawah):
   ```env
   VITE_SITE_URL=https://seratix.com
   VITE_HOUND_URL=
   ```
5. Jalankan: `pnpm dev` (cek tampilan), `node --test` (15 tes baru), lalu `pnpm build`.
6. Hapus `public/favicon.svg` (tidak dipakai lagi; boleh dibiarkan).

### File BARU
`public/brand/` (logo-light, logo-dark, logo-icon) · `public/favicon.ico`, `favicon-32.png`, `apple-touch-icon.png`, `og-image.png` · `src/config/brand.js`, `products.js` · `src/content/hound.js` · `src/lib/url.js`, `money.js` · `src/features/hound/*` · `src/features/home/sections/HoundSection.jsx` · `src/pages/HoundPage.jsx` · `src/styles/brand.css` · 4 file `*.test.js`

### File DIGANTI (periksa dengan `git diff`)
`index.html` · `.env.example` · `src/app/router.jsx` · `src/config/navigation.js` · `src/content/process.js` · `src/components/layout/Logo.jsx`, `Navbar.jsx`, `Footer.jsx` · `src/features/home/index.js`, `sections/HeroSection.jsx` · `src/features/contact/ContactForm.jsx` · `src/pages/HomePage.jsx`, `ContactPage.jsx` · `src/styles/index.css` (hanya menambah satu baris `@import './brand.css'`)

## Mengatur link ke Hound
Alamat aplikasi diisi di `VITE_HOUND_URL` (tanpa slash di akhir pun boleh):

| Kondisi | Isi `VITE_HOUND_URL` | Yang tampil di website |
|---|---|---|
| Hound **belum online** | *(kosong)* | Tombol "**Minta akses beta**" → form kontak. **Tidak ada link mati.** |
| Hound **sudah online** | `https://hound.seratix.com` atau `https://seratix-hound.vercel.app` | "**Coba gratis 14 hari**" (`/daftar`), "**Lihat harga**" (`/harga`), dan "Buka aplikasi Hound" di footer. Semua membuka tab baru |

Hanya alamat `http://` atau `https://` yang diterima; isian lain (mis. `javascript:...`) diabaikan.

**Di Vercel:** Settings → Environment Variables → tambah `VITE_HOUND_URL` dan `VITE_SITE_URL` → **Redeploy** (nilai `VITE_*` ditanam saat build).

### Memberi Hound subdomain `hound.seratix.com`
Hound adalah project Vercel terpisah. Di project Hound: Settings → Domains → tambahkan `hound.seratix.com`, lalu buat record DNS sesuai yang ditampilkan Vercel (biasanya CNAME). Setelah itu isi `VITE_HOUND_URL=https://hound.seratix.com`. Di Supabase milik Hound, tambahkan domain itu ke Authentication → URL Configuration.

### Sisi sebaliknya (Hound → website Seratix)
Di repo **Hound**, `src/config/site.js` berisi `mainSite: 'https://seratix.com'`. Ubah ke alamat website Seratix yang sebenarnya (mis. alamat Vercel) bila domainnya belum aktif.

## Mengganti logo nanti
Timpa file di `public/brand/` (`logo-light.png`, `logo-dark.png`, `logo-icon.png`), lalu perbarui `width`/`height` di `src/config/brand.js`. Menjalankan `node --test` akan memberi tahu bila ukuran di `brand.js` tidak sama dengan ukuran file (supaya halaman tidak melompat saat memuat).

Logo saat ini dibuat dari gambar PNG hasil AI. Untuk cetak, banner, atau bila ingin tepi yang tajam di ukuran besar, buat ulang sebagai vektor (SVG) di Figma atau Canva.

## Pratinjau saat link dibagikan (WhatsApp, Facebook, dll.)
`index.html` memakai `%VITE_SITE_URL%/og-image.png`. Setelah deploy, buka **View Source** halaman utama dan pastikan tulisan `%VITE_SITE_URL%` **sudah berubah** menjadi alamat sebenarnya; bila masih tertulis apa adanya, variabelnya belum terisi. Platform sosial menyimpan pratinjau lama di cache, jadi gambar baru mungkin tidak langsung muncul.

## Mengubah isi halaman Hound
Semua teks ada di `src/content/hound.js`. Urutan section ada di `src/pages/HoundPage.jsx`. Harga "mulai dari" ada di `src/config/products.js` (`HOUND.startingPrice`); ini hanya teks pemasaran dan harus kamu samakan dengan harga di aplikasi Hound bila berubah.

## Catatan
- Harga **Rp149.000** adalah hipotesis beta, belum teruji ke calon pengguna.
- Halaman Hound menyebut keterbatasan yang jujur (template pesan, media, dan balasan dari HP belum ada). Ubah di `NOT_YET` bila fitur sudah ada.
- Lisensi/merek: halaman Hound memuat pernyataan bahwa WhatsApp dan Instagram adalah merek dagang pemiliknya dan Hound tidak berafiliasi dengan Meta.
