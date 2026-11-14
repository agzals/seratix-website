import { Reveal } from '@/components/motion'
import { Section, SectionHeader } from '@/components/ui'
import { HOUND_DISCLAIMER, HOUND_FAQ } from '@/content/hound'

export default function HoundFaq() {
  return (
    <Section id="faq-hound">
      <SectionHeader eyebrow="FAQ" title="Pertanyaan umum" />
      <Reveal className="faq">
        {HOUND_FAQ.map(([q, a]) => (
          <details key={q}>
            <summary>{q}</summary>
            <p>{a}</p>
          </details>
        ))}
      </Reveal>
      <p className="hdisclaimer">{HOUND_DISCLAIMER}</p>
    </Section>
  )
}
