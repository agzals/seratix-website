import { SITE } from '@/config/site'

export const DEFAULT_WA_MESSAGE = 'Halo Seratix, saya ingin konsultasi.'

export function waLink(text = DEFAULT_WA_MESSAGE) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`
}

export function buildConsultationMessage({ nama, kontak, layanan, pesan }) {
  return [DEFAULT_WA_MESSAGE, '', `Nama: ${nama}`, `Kontak: ${kontak}`, `Layanan: ${layanan}`, `Kebutuhan: ${pesan || '-'}`].join('\n')
}
