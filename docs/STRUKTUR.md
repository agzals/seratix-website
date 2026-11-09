# Struktur Project Seratix

```
src/
├── app/                 # App.jsx (MotionConfig + Theme + Router), router.jsx, providers/
├── config/              # site.js (brand/kontak), navigation.js (menu), motion.js (preset animasi)
├── content/             # ISI website: services.js, portfolio.js, process.js (+ teks marquee)
├── components/
│   ├── ui/              # Button, Section, SectionHeader, FeatureCard, Badge, Container
│   ├── motion/          # Reveal, Stagger, Counter, SplitText, TiltCard, Magnetic, Marquee, ScrollProgress
│   ├── layout/          # Navbar, Footer, MainLayout (transisi halaman), ThemeToggle, WhatsAppButton
│   └── common/          # Seo, PageHeader, PortfolioCard
├── features/
│   ├── home/sections/   # Hero, Marquee, Services, Stats, Portfolio, Process, About, CTA
│   └── contact/         # ContactForm, ContactInfo
├── pages/               # 1 file = 1 halaman
├── hooks/  lib/         # useScrolled, whatsapp.js
└── styles/              # tokens → base → layout → sections → responsive
```

## Cara menambah
| Mau apa | Edit |
|---|---|
| Layanan | `content/services.js` → `items` |
| Kategori baru | `content/services.js` → `SERVICE_CATEGORIES` (halaman detail otomatis) |
| Demo | `content/portfolio.js` |
| Teks marquee | `content/process.js` → `MARQUEE` |
| Halaman baru | `pages/` + `app/router.jsx` + `config/navigation.js` |
| Urutan section beranda | `pages/HomePage.jsx` |
| Warna | `styles/tokens.css` |
| Kecepatan animasi | `config/motion.js` |
| Form ke email/API | `features/contact/ContactForm.jsx` → fungsi `submit` |

## Catatan statistik
`StatsSection` hanya menampilkan angka faktual (jumlah kategori, layanan, langkah).
Tambahkan angka seperti "jumlah klien" hanya setelah datanya benar-benar ada.
