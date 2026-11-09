import { Container } from '@/components/ui'
import { Counter, Stagger, StaggerItem } from '@/components/motion'
import { SERVICE_CATEGORIES } from '@/content/services'

// Hanya angka faktual (jumlah layanan & langkah). Tambahkan statistik klien setelah ada datanya.
const totalServices = SERVICE_CATEGORIES.reduce((n, c) => n + c.items.length, 0)
const STATS = [
  { value: SERVICE_CATEGORIES.length, label: 'Kategori solusi' },
  { value: totalServices, label: 'Layanan digital' },
  { value: 4, label: 'Langkah kerja yang jelas' },
  { value: 100, suffix: '%', label: 'Disesuaikan kebutuhan' },
]

export default function StatsSection() {
  return (
    <section className="stats">
      <Container>
        <Stagger className="stats-grid" gap={0.1}>
          {STATS.map((s) => (
            <StaggerItem key={s.label} className="stat">
              <b><Counter to={s.value} suffix={s.suffix} duration={1.4} /></b>
              <span>{s.label}</span>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  )
}
