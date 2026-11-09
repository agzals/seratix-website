// Tambah layanan: tambah objek di `items`.
// Tambah kategori: tambah objek di SERVICE_CATEGORIES (halaman /layanan/<slug> otomatis dibuat).
export const SERVICE_CATEGORIES = [
  {
    slug: 'events',
    label: 'Seratix Events',
    title: 'Digital Event Solutions',
    summary: 'Hadirkan pengalaman acara yang lebih praktis, personal, dan mudah dikelola.',
    description:
      'Solusi digital untuk acara personal maupun perusahaan, mulai dari undangan pernikahan hingga registrasi peserta dan check-in berbasis QR.',
    icon: '🎉',
    items: [
      { icon: '💌', name: 'Undangan Digital', text: 'Undangan pernikahan, lamaran, ulang tahun, dan acara keluarga dengan nama tamu personal.' },
      { icon: '🌐', name: 'Website Event', text: 'Halaman acara lengkap dengan jadwal, lokasi, galeri, dan informasi penting lainnya.' },
      { icon: '📝', name: 'Registrasi & RSVP', text: 'Kumpulkan konfirmasi kehadiran dan data peserta secara rapi.' },
      { icon: '📱', name: 'QR Check-in', text: 'Buku tamu digital dan check-in cepat menggunakan QR code.' },
    ],
    benefits: ['Tamu cukup membuka link', 'Data kehadiran tersusun rapi', 'Desain bisa disesuaikan tema acara'],
  },
  {
    slug: 'business',
    label: 'Seratix Business',
    title: 'Business Technology Solutions',
    summary: 'Sederhanakan pekerjaan manual melalui otomatisasi dan integrasi teknologi.',
    description:
      'Membantu bisnis mengurangi pekerjaan berulang, merapikan data, dan menghubungkan sistem yang sudah digunakan.',
    icon: '⚙️',
    items: [
      { icon: '⚙️', name: 'Workflow Automation', text: 'Otomatisasi laporan, dokumen, email, dan approval agar pekerjaan berulang lebih cepat.' },
      { icon: '📊', name: 'Dashboard & Data', text: 'Ringkasan data operasional yang mudah dipantau untuk pengambilan keputusan.' },
      { icon: '💬', name: 'Omnichannel', text: 'Satukan percakapan pelanggan dari WhatsApp, email, dan channel lainnya.' },
      { icon: '🔗', name: 'Integrasi Sistem', text: 'Hubungkan Excel, SharePoint, aplikasi, dan sistem internal agar data mengalir otomatis.' },
    ],
    benefits: ['Mengurangi pekerjaan manual', 'Data lebih konsisten', 'Proses lebih mudah dipantau'],
  },
]

export const getServiceBySlug = (slug) => SERVICE_CATEGORIES.find((c) => c.slug === slug)
