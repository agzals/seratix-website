const env = import.meta.env

export const SITE = {
  name: 'Seratix',
  tagline: 'Momen Berkesan. Bisnis Lebih Efisien.',
  description:
    'Seratix menyediakan undangan digital, website event, otomatisasi proses bisnis, dashboard, dan integrasi omnichannel.',
  url: env.VITE_SITE_URL || 'https://seratix.com',
  whatsapp: env.VITE_WHATSAPP_NUMBER || '6281234567890',
  email: env.VITE_CONTACT_EMAIL || 'hello@seratix.com',
  instagram: 'seratix.id',
  city: 'Jakarta, Indonesia',
}
