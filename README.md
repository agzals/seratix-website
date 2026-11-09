# Seratix Website — v3 (Animated)

React 18 + Vite + React Router + Motion, dengan light/dark mode dan animasi.

## Mulai cepat
```bash
npm install
copy .env.example .env     # Mac/Linux: cp .env.example .env  -> isi nomor WA & email
npm run dev                # http://localhost:5173
```

## Animasi yang ada
| Bagian | Efek |
|---|---|
| Seluruh halaman | Progress bar scroll, transisi antar halaman, navbar turun saat load |
| Hero | Judul muncul per kata, nama "Seratix" gradient bergerak, background blob & grid, tombol magnetic + kilau |
| Mockup hero | Melayang, parallax mengikuti kursor, counter angka, grafik tumbuh, hati beterbangan, chip "RSVP diterima" |
| Marquee | Teks layanan berjalan (berhenti saat di-hover) |
| Layanan | Tab dengan pill bergeser, kartu berganti dengan stagger, kartu 3D tilt + spotlight |
| Statistik | Angka menghitung naik saat terlihat |
| Portfolio | Kartu naik saat hover, orb bergerak, filter dengan animasi layout |
| Cara kerja | Garis progres terisi mengikuti scroll |
| Tentang & CTA | Slide dari kiri/kanan, glow bergerak |
| Form | Bergetar saat data wajib kosong |
| Lainnya | Toggle tema berputar, burger jadi X, menu mobile slide, tombol WA berdenyut |

Animasi selalu jalan. Untuk meredam animasi bagi pengunjung yang mengaktifkan *reduce motion*, ubah `RESPECT_REDUCED_MOTION = true` di `src/config/motion.js`.
Efek tilt, magnetic, dan parallax hanya aktif dengan mouse (tidak di HP).

## Atur kecepatan animasi
`src/config/motion.js` → `DURATION` dan `EASE`.

## Pakai animasi di bagian baru
```jsx
import { Reveal, Stagger, StaggerItem, Counter } from '@/components/motion'

<Reveal>Muncul saat di-scroll</Reveal>

<Stagger className="card-grid">
  <StaggerItem>Kartu 1</StaggerItem>
  <StaggerItem>Kartu 2</StaggerItem>
</Stagger>

<Counter to={250} suffix="+" />
```

Struktur & cara menambah fitur: **docs/STRUKTUR.md**

## Deploy ke Hostinger
1. Isi `.env`, lalu `npm run build`
2. hPanel → File Manager → `public_html` → hapus file bawaan
3. Zip **isi** folder `dist` → upload → Extract di `public_html`
4. Pastikan ada `index.html`, `favicon.svg`, `.htaccess`, `assets/` (aktifkan *Show hidden files*)
5. Aktifkan SSL, Purge cache, Ctrl+F5

| Masalah | Solusi |
|---|---|
| Halaman blank | Upload isi `dist`, bukan source code |
| 404 saat refresh `/layanan` | `.htaccess` belum ter-upload |
| CSS/JS 404 | Folder `assets` belum ikut |
| Nomor WA masih contoh | `.env` belum diisi sebelum build |

## Demo Wedding Invitation
- URL: `/demo/wedding` — nama tamu lewat link: `/demo/wedding?to=Budi+Santoso`
- Semua data (nama, tanggal, acara, rekening) di `src/features/wedding-demo/data.js` — data demo fiktif
- Warna tema di `src/features/wedding-demo/wedding.css` (variabel `--wd-*`)
- Foto galeri: taruh di `public/images/` lalu ganti `{ tone: 'g1' }` menjadi `{ src: '/images/foto1.jpg' }`
- Musik (opsional): taruh lagu berlisensi di `public/music/wedding.mp3` — tombol musik muncul otomatis
- RSVP: demo hanya tampil di halaman. Isi `rsvpWhatsapp` agar konfirmasi juga dikirim ke WhatsApp
