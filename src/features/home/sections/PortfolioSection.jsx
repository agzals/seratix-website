import { Button, Section, SectionHeader } from '@/components/ui'
import { Stagger, StaggerItem } from '@/components/motion'
import PortfolioCard from '@/components/common/PortfolioCard'
import { PORTFOLIO } from '@/content/portfolio'
import { ROUTES } from '@/config/navigation'

export default function PortfolioSection({ limit = 3 }) {
  return (
    <Section id="demo" variant="alt">
      <SectionHeader
        eyebrow="Portfolio & Demo"
        title="Lihat Contoh Solusi Kami"
        description="Contoh proyek untuk menggambarkan hasil yang bisa Anda dapatkan."
      />
      <Stagger className="demo-grid" gap={0.15}>
        {PORTFOLIO.slice(0, limit).map((item) => (
          <StaggerItem key={item.id}><PortfolioCard item={item} /></StaggerItem>
        ))}
      </Stagger>
      {PORTFOLIO.length > limit && (
        <div className="center-action"><Button to={ROUTES.portfolio} variant="ghost">Lihat semua</Button></div>
      )}
    </Section>
  )
}
