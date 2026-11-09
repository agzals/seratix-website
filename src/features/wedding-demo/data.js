// ================================================================
// DATA DEMO UNDANGAN — semua nama, tanggal, dan rekening di sini FIKTIF.
// Untuk klien, cukup ganti isi file ini.
// ================================================================
export const WEDDING = {
  groom: {
    nick: 'Fitri',
    full: 'Agzal Sufi, S.Kom.',
    parents: 'Putra pertama dari Bapak Hendra Pratama & Ibu Sari Wulandari',
    ig: 'agzalls',
  },
  bride: {
    nick: 'Agzal',
    full: 'Fitri Andita, S.E.',
    parents: 'Putri kedua dari Bapak Agus Santoso & Ibu Rina Kusuma',
    ig: 'fitriandita',
  },

  // Format ISO dengan zona waktu WIB (+07:00)
  date: '2027-06-12T08:00:00+07:00',
  dateLabel: 'Sabtu, 12 Juni 2027',

  quote: {
    text: 'Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan dari jenismu sendiri, supaya kamu merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang.',
    source: 'QS. Ar-Rum: 21',
  },

  events: [
    {
      title: 'Akad Nikah',
      date: 'Sabtu, 12 Juni 2027',
      time: '08.00 – 10.00 WIB',
      place: 'Masjid Al-Ikhlas',
      address: 'Jl. Melati No. 10, Jakarta Selatan',
      maps: 'https://maps.google.com/?q=Monas+Jakarta',
    },
    {
      title: 'Resepsi',
      date: 'Sabtu, 12 Juni 2027',
      time: '11.00 – 14.00 WIB',
      place: 'Gedung Serbaguna Anggrek',
      address: 'Jl. Anggrek Raya No. 25, Jakarta Selatan',
      maps: 'https://maps.google.com/?q=Monas+Jakarta',
    },
  ],

  story: [
    {
      year: '2021',
      title: 'Pertama Bertemu',
      text: 'Kami bertemu di sebuah acara kampus dan mulai berteman.',
    },
    {
      year: '2023',
      title: 'Menjalin Hubungan',
      text: 'Pertemanan tumbuh menjadi komitmen untuk saling menjaga.',
    },
    {
      year: '2026',
      title: 'Lamaran',
      text: 'Dengan restu kedua keluarga, kami melangsungkan lamaran.',
    },
    {
      year: '2027',
      title: 'Hari Bahagia',
      text: 'Kami memutuskan melangkah bersama dalam ikatan pernikahan.',
    },
  ],

  // Galeri memakai gradient sebagai placeholder. Ganti dengan foto: { src: '/images/foto1.jpg' }
  gallery: [
    { tone: 'g1' },
    { tone: 'g2' },
    { tone: 'g3' },
    { tone: 'g4' },
    { tone: 'g5' },
    { tone: 'g6' },
  ],

  gifts: [
    { bank: 'Bank BCA', number: '1234567890', name: 'Agzal Sufi' },
    { bank: 'Bank Mandiri', number: '0987654321', name: 'Fitri Andita' },
  ],

  // Nomor WA untuk konfirmasi RSVP (format 62xxx). Demo: kosongkan agar RSVP hanya tampil di halaman.
  rsvpWhatsapp: '',

  hashtag: '#AgzalFitriForever',
}
