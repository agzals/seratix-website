import { Badge, Section } from '@/components/ui'
import { Reveal, Stagger, StaggerItem } from '@/components/motion'
import { VALUES } from '@/content/process'

export default function AboutSection() {
  return (
    <Section id="tentang" variant="dark" className="about">
      <div className="about-grid">
        <Reveal x={-30} y={0}>
          <Badge light>Tentang Seratix</Badge>
          <h2>Teknologi yang Berangkat dari Kebutuhan Anda</h2>
        </Reveal>
        <div>
          <Reveal x={30} y={0} delay={0.1}>
            <p>
              Seratix hadir untuk membantu individu dan bisnis memanfaatkan teknologi dengan cara yang
              lebih sederhana. Kami menggabungkan desain, pengembangan website, dan otomatisasi untuk
              menciptakan pengalaman digital serta proses kerja yang lebih praktis.
            </p>
          </Reveal>
          <Stagger as="ul" className="values" gap={0.12} delay={0.2}>
            {VALUES.map((v) => (
              <StaggerItem as="li" key={v}><span className="value-check">✓</span>{v}</StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </Section>
  )
}
