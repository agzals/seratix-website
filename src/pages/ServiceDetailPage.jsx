import { useParams } from 'react-router-dom'
import Seo from '@/components/common/Seo'
import PageHeader from '@/components/common/PageHeader'
import PortfolioCard from '@/components/common/PortfolioCard'
import { Button, FeatureCard, Section, SectionHeader } from '@/components/ui'
import { Stagger, StaggerItem } from '@/components/motion'
import { CtaSection } from '@/features/home'
import { getServiceBySlug } from '@/content/services'
import { PORTFOLIO } from '@/content/portfolio'
import { waLink } from '@/lib/whatsapp'
import NotFoundPage from './NotFoundPage'

export default function ServiceDetailPage() {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)
  if (!service) return <NotFoundPage />

  const related = PORTFOLIO.filter((p) => p.category === service.slug)

  return (
    <>
      <Seo title={service.label} description={service.description} />
      <PageHeader eyebrow={service.label} title={service.title} description={service.description} />

      <Section>
        <SectionHeader title="Yang Bisa Kami Bantu" />
        <Stagger className="card-grid" gap={0.08}>
          {service.items.map((it) => (
            <StaggerItem key={it.name}><FeatureCard icon={it.icon} title={it.name} text={it.text} /></StaggerItem>
          ))}
        </Stagger>
      </Section>

      {service.benefits?.length > 0 && (
        <Section variant="alt">
          <SectionHeader title="Manfaat" />
          <Stagger as="ul" className="benefit-list" gap={0.1}>
            {service.benefits.map((b) => (
              <StaggerItem as="li" key={b}><span className="value-check">✓</span>{b}</StaggerItem>
            ))}
          </Stagger>
          <div className="center-action">
            <Button href={waLink(`Halo Seratix, saya tertarik dengan ${service.label}.`)}>Konsultasi {service.label}</Button>
          </div>
        </Section>
      )}

      {related.length > 0 && (
        <Section>
          <SectionHeader eyebrow="Demo" title={`Contoh ${service.label}`} />
          <Stagger className="demo-grid" gap={0.12}>
            {related.map((item) => <StaggerItem key={item.id}><PortfolioCard item={item} /></StaggerItem>)}
          </Stagger>
        </Section>
      )}
      <CtaSection />
    </>
  )
}
