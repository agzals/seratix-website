import { Stagger, StaggerItem } from '@/components/motion'
import { SITE } from '@/config/site'
import { waLink } from '@/lib/whatsapp'

export default function ContactInfo() {
  return (
    <Stagger as="ul" className="contact-list" gap={0.08}>
      <StaggerItem as="li"><b>WhatsApp</b><a href={waLink()} target="_blank" rel="noreferrer">+{SITE.whatsapp}</a></StaggerItem>
      <StaggerItem as="li"><b>Email</b><a href={`mailto:${SITE.email}`}>{SITE.email}</a></StaggerItem>
      <StaggerItem as="li"><b>Instagram</b><a href={`https://instagram.com/${SITE.instagram}`} target="_blank" rel="noreferrer">@{SITE.instagram}</a></StaggerItem>
      <StaggerItem as="li"><b>Lokasi</b><span>{SITE.city}</span></StaggerItem>
    </Stagger>
  )
}
