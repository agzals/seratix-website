// Isi halaman /hound dan teaser di beranda. Semua teks di sini; komponen hanya menampilkan.
// Pegangan jujur: hanya cantumkan fitur yang SUDAH ada di Seratix Hound. Yang belum ada ditulis di NOT_YET.

export const HOUND_TEASER = {
  lead: 'Semua chat WhatsApp dan Instagram pelangganmu di satu inbox, dibalas bareng tim, dan tidak ada yang terlewat.',
  points: [
    'Inbox bersama untuk tim 1–5 orang',
    'Pengingat chat yang belum dibalas',
    'Biaya pesan WhatsApp terlihat sebelum tagihan datang',
  ],
}

export const HOUND_PROBLEMS = [
  { icon: '📱', name: 'Chat tercecer di banyak HP', text: 'Satu nomor dipakai bergantian. Siapa yang sudah membalas siapa? Tidak ada yang tahu.' },
  { icon: '👯', name: 'Dua orang membalas hal yang sama', text: 'Pelanggan menerima dua jawaban berbeda, atau tidak dijawab sama sekali karena masing-masing mengira rekannya yang menangani.' },
  { icon: '⏳', name: 'Chat terlewat, penjualan hilang', text: 'Pelanggan yang menunggu terlalu lama biasanya pindah ke penjual lain, dan kamu tidak sadar.' },
]

export const HOUND_FEATURES = [
  { icon: '📥', name: 'Inbox bersama', text: 'Chat WhatsApp dan Instagram DM dalam satu daftar, satu thread per pelanggan.' },
  { icon: '👥', name: 'Penugasan & catatan internal', text: 'Tentukan siapa yang menangani. Tinggalkan catatan yang tidak terlihat pelanggan.' },
  { icon: '⏱️', name: 'Jendela 24 jam terlihat', text: 'Hitung mundur di setiap chat. Kolom balas terkunci otomatis saat jendela berakhir, supaya tidak salah kirim.' },
  { icon: '⚡', name: 'Balasan cepat', text: 'Ketik /ongkir lalu Enter. Variabel seperti {nama} terisi otomatis.' },
  { icon: '🐕', name: 'Hound mengejar', text: 'Chat yang belum dibalas lebih dari 1 jam ditandai dan dikumpulkan di satu daftar.' },
  { icon: '🧮', name: 'Meter biaya pesan', text: 'Lihat estimasi biaya pesan WhatsApp bulan ini, sebelum tagihan dari Meta datang.' },
]

export const HOUND_STEPS = [
  { no: '01', title: 'Hubungkan saluran', text: 'Tim Seratix membantu menyambungkan nomor WhatsApp bisnis dan akun Instagram profesionalmu lewat jalur resmi Meta.' },
  { no: '02', title: 'Balas bersama', text: 'Agen membagi chat, memakai balasan cepat, dan saling meninggalkan catatan, tanpa berebut satu HP.' },
  { no: '03', title: 'Biarkan Hound mengejar', text: 'Chat yang tertinggal diingatkan, dan laporan menunjukkan seberapa cepat tim membalas.' },
]

// Daftar "belum ada": sengaja ditampilkan agar pengguna beta tidak kecewa.
export const NOT_YET = [
  'Template pesan (menghubungi pelanggan di luar jendela 24 jam)',
  'Melihat dan mengirim gambar atau dokumen (saat ini tampil sebagai placeholder teks)',
  'Membaca balasan yang dikirim dari aplikasi WhatsApp di HP',
  'Chatbot AI dan broadcast belum ada dan belum menjadi prioritas',
]

export const HOUND_PRICE_FACTS = [
  { icon: '🎁', name: 'Uji coba 14 hari', text: 'Semua akun baru mulai dengan fitur paket Team, tanpa kartu kredit.' },
  { icon: '🏷️', name: 'Langganan per usaha', text: 'Dua paket, Starter dan Team. Harganya per usaha, bukan per pengguna.' },
  { icon: '💬', name: 'Biaya pesan terpisah', text: 'Biaya pesan WhatsApp dibayar langsung ke Meta, terpisah dari langganan. Hound menampilkan estimasinya.' },
]

export const HOUND_FAQ = [
  ['Apakah Hound memakai jalur resmi? Apakah akun saya aman?', 'Hound memakai API resmi Meta. Kami tidak pernah meminta kata sandi WhatsApp atau Instagram kamu. Akun yang dihubungkan lewat alat tidak resmi berisiko dibatasi.'],
  ['Apakah Hound menggantikan aplikasi WhatsApp Business di HP?', 'Tidak harus. Lewat mode koeksistensi Meta, satu nomor bisa dipakai di aplikasi HP dan API sekaligus. Kelayakan nomor dan syaratnya kami cek bersama saat onboarding, dan ada batasan dari Meta, misalnya koneksi bisa terputus jika aplikasi di HP lama tidak aktif.'],
  ['Kenapa ada jendela 24 jam?', 'Itu aturan Meta: balasan bebas hanya boleh dikirim sampai 24 jam setelah pesan terakhir pelanggan. Hound menampilkan hitung mundurnya dan mengunci kolom balas saat habis.'],
  ['Berapa biaya pesannya?', 'Biaya pesan WhatsApp dibayar langsung ke Meta. Ada kuota gratis per nomor per bulan, dan setelahnya dikenai tarif per pesan yang bisa berubah. Hound menampilkan estimasi supaya tidak kaget, tetapi tagihan resminya dari Meta.'],
  ['Bagaimana dengan Instagram?', 'Hanya akun profesional (Business/Creator), dan hanya bisa membalas pelanggan yang lebih dulu menghubungi atau berinteraksi denganmu. Hound tidak bisa mengirim DM ke orang yang belum pernah menghubungimu.'],
  ['Bagaimana data chat pelanggan diperlakukan?', 'Isi chat memuat data pribadi pelanggan. Data disimpan dengan pembatasan akses per usaha, dan hanya anggota timmu yang bisa membacanya. Kamu bisa menghapus percakapan kapan saja. Sebagai pemilik usaha, kamu tetap bertanggung jawab memberi tahu pelanggan bagaimana datanya dipakai.'],
  ['Fitur apa yang belum ada?', 'Template pesan, melihat dan mengirim media, serta membaca balasan yang dikirim dari aplikasi HP belum tersedia. Kami membangunnya berurutan sesuai kebutuhan pengguna beta.'],
  ['Bagaimana cara berlangganan?', 'Mulai dengan uji coba 14 hari. Setelah itu paket berbayar diaktifkan setelah konfirmasi pembayaran lewat WhatsApp; pembayaran otomatis menyusul. Harga belum termasuk PPN jika berlaku.'],
]

export const HOUND_DISCLAIMER = 'WhatsApp dan Instagram adalah merek dagang pemiliknya masing-masing. Seratix Hound tidak berafiliasi dengan Meta.'
