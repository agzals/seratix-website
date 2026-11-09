export const ROUTES = {
  home: '/',
  services: '/layanan',
  serviceDetail: (slug) => `/layanan/${slug}`,
  portfolio: '/portfolio',
  about: '/tentang',
  contact: '/kontak',
}

export const MAIN_NAV = [
  { to: ROUTES.services, label: 'Layanan' },
  { to: ROUTES.portfolio, label: 'Portfolio' },
  { to: ROUTES.about, label: 'Tentang Kami' },
  { to: ROUTES.contact, label: 'Kontak' },
]
