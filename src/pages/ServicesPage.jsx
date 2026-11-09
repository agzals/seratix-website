import { Link } from 'react-router-dom'
import Seo from '@/components/common/Seo'
import PageHeader from '@/components/common/PageHeader'
import { FeatureCard, Section, SectionHeader } from '@/components/ui'
import { Stagger, StaggerItem } from '@/components/motion'
import { CtaSection } from '@/features/home'
import { SERVICE_CATEGORIES } from '@/content/services'
import { ROUTES } from '@/config/navigation'

export default function ServicesPage() {
  return (
    <>
      <Seo title="Layanan" description="Layanan Seratix: Digital Event Solutions dan Business Technology Solutions." />
      <PageHeader eyebrow="Layanan" title="Solusi Digital untuk Acara dan Bisnis" description="Pilih kategori layanan sesuai kebutuhan Anda." />
      {SERVICE_CATEGORIES.map((c, idx) => (
        <Section key={c.slug} variant={idx % 2 ? 'alt' : 'default'}>
          <SectionHeader eyebrow={c.label} title={c.title} description={c.summary} />
          <Stagger className="card-grid" gap={0.08}>
            {c.items.map((it) => (
              <StaggerItem key={it.name}><FeatureCard icon={it.icon} title={it.name} text={it.text} /></StaggerItem>
            ))}
          </Stagger>
          <div className="center-action">
            <Link to={ROUTES.serviceDetail(c.slug)} className="link">Lihat detail {c.label} <span className="link-arrow">→</span></Link>
          </div>
        </Section>
      ))}
      <CtaSection />
    </>
  )
}
