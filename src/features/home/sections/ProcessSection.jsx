import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'motion/react'
import { Section, SectionHeader } from '@/components/ui'
import { Stagger, StaggerItem } from '@/components/motion'
import { PROCESS_STEPS } from '@/content/process'

export default function ProcessSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 60%'] })
  const line = useSpring(scrollYProgress, { stiffness: 100, damping: 25 })

  return (
    <Section id="proses">
      <SectionHeader eyebrow="Cara Kerja" title="Proses yang Jelas dari Awal" />
      <div ref={ref} className="steps-wrap">
        <div className="steps-line" aria-hidden="true">
          <motion.span style={{ scaleX: line }} />
        </div>
        <Stagger className="steps" gap={0.15}>
          {PROCESS_STEPS.map((s) => (
            <StaggerItem key={s.no} className="step">
              <span className="step-no">{s.no}</span>
              <h4>{s.title}</h4>
              <p>{s.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  )
}
