import { Section, SectionHeader } from '@/components/ui'
import { Reveal, Stagger, StaggerItem } from '@/components/motion'
import { HOUND_STEPS, NOT_YET } from '@/content/hound'

export default function HoundSteps() {
  return (
    <Section id="cara-hound">
      <SectionHeader eyebrow="Cara kerja" title="Tiga langkah sampai chat tertib" />
      <Stagger className="steps steps-3" gap={0.15}>
        {HOUND_STEPS.map((s) => (
          <StaggerItem key={s.no} className="step">
            <span className="step-no">{s.no}</span>
            <h4>{s.title}</h4>
            <p>{s.text}</p>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal className="hnote">
        <h3>Masih dalam pengembangan</h3>
        <p>Supaya tidak ada kejutan, ini yang belum tersedia di versi beta:</p>
        <ul>{NOT_YET.map((t) => <li key={t}>{t}</li>)}</ul>
      </Reveal>
    </Section>
  )
}
