export const ROUTES = {
  home: '/',
  services: '/layanan',
  serviceDetail: (slug) => `/layanan/${slug}`,
  hound: '/hound',
  portfolio: '/portfolio',
  about: '/tentang',
  contact: '/kontak',
  contactHound: '/kontak?topik=hound', // form kontak dengan "Seratix Hound" terpilih
}

// badge: label kecil di samping menu (mis. "Beta")
export const MAIN_NAV = [
  { to: ROUTES.services, label: 'Layanan' },
  { to: ROUTES.hound, label: 'Hound', badge: 'Beta' },
  { to: ROUTES.portfolio, label: 'Portfolio' },
  { to: ROUTES.about, label: 'Tentang Kami' },
  { to: ROUTES.contact, label: 'Kontak' },
]
