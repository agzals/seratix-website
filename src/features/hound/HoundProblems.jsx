import { FeatureCard, Section, SectionHeader } from '@/components/ui'
import { Stagger, StaggerItem } from '@/components/motion'
import { HOUND_PROBLEMS } from '@/content/hound'

export default function HoundProblems() {
  return (
    <Section>
      <SectionHeader eyebrow="Masalahnya" title="DM ramai itu bagus, kalau bisa terkejar" description="Masalahnya bukan kurang pelanggan, tetapi chat yang tidak terkelola." />
      <Stagger className="card-grid card-grid-3" gap={0.1}>
        {HOUND_PROBLEMS.map((p) => <StaggerItem key={p.name}><FeatureCard icon={p.icon} title={p.name} text={p.text} /></StaggerItem>)}
      </Stagger>
    </Section>
  )
}
