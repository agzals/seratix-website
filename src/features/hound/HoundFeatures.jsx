import { FeatureCard, Section, SectionHeader } from '@/components/ui'
import { Stagger, StaggerItem } from '@/components/motion'
import { HOUND_FEATURES } from '@/content/hound'

export default function HoundFeatures() {
  return (
    <Section id="fitur-hound" variant="alt">
      <SectionHeader eyebrow="Fitur" title="Sederhana dulu, cukup untuk tim kecil" description="Kami sengaja tidak membangun semuanya sekaligus. Ini yang sudah ada di versi beta." />
      <Stagger className="card-grid card-grid-3" gap={0.08}>
        {HOUND_FEATURES.map((f) => <StaggerItem key={f.name}><FeatureCard icon={f.icon} title={f.name} text={f.text} /></StaggerItem>)}
      </Stagger>
    </Section>
  )
}
