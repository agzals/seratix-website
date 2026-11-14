import { FeatureCard, Section, SectionHeader } from '@/components/ui'
import { Stagger, StaggerItem } from '@/components/motion'
import { HOUND, HOUND_LINKS } from '@/config/products'
import { HOUND_PRICE_FACTS } from '@/content/hound'
import { rupiah } from '@/lib/money'

export default function HoundPricing() {
  return (
    <Section id="harga-hound" variant="alt">
      <SectionHeader
        eyebrow="Harga"
        title={`Mulai dari ${rupiah(HOUND.startingPrice)} per bulan`}
        description="Harga awal beta. Cukup untuk tim kecil, dengan uji coba dulu sebelum membayar."
      />
      <Stagger className="card-grid card-grid-3" gap={0.1}>
        {HOUND_PRICE_FACTS.map((f) => <StaggerItem key={f.name}><FeatureCard icon={f.icon} title={f.name} text={f.text} /></StaggerItem>)}
      </Stagger>
      <p className="hprice-note">
        Harga belum termasuk PPN jika berlaku dan dapat berubah selama beta.{' '}
        {HOUND_LINKS.live && <a className="link" href={HOUND_LINKS.link('/harga')} target="_blank" rel="noreferrer">Lihat paket lengkap <span className="link-arrow">→</span></a>}
      </p>
    </Section>
  )
}
