import { motion } from 'motion/react'
import { Badge, Container } from '@/components/ui'
import { HOUND } from '@/config/products'
import { EASE } from '@/config/motion'
import { HOUND_TEASER } from '@/content/hound'
import HoundActions from './HoundActions'
import HoundMock from './HoundMock'

const fade = (delay) => ({ initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay, ease: EASE } })

export default function HoundHero() {
  return (
    <section className="hero hhero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="blob blob-1" aria-hidden="true" />
      <Container className="hero-grid">
        <div>
          <motion.div {...fade(0.05)}><Badge>Produk Seratix · {HOUND.status}</Badge></motion.div>
          <motion.h1 {...fade(0.15)}>
            {HOUND.name}: semua chat pelanggan, <span className="accent">satu inbox.</span>
          </motion.h1>
          <motion.p className="lead" {...fade(0.3)}>{HOUND_TEASER.lead}</motion.p>
          <motion.div className="hero-actions" {...fade(0.45)}><HoundActions /></motion.div>
          <motion.p className="hero-note" {...fade(0.55)}>
            Uji coba {HOUND.trialDays} hari · tanpa kartu kredit · aktivasi saluran dibantu tim Seratix
          </motion.p>
        </div>
        <motion.div className="hhero-visual" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.3, ease: EASE }}>
          <HoundMock />
        </motion.div>
      </Container>
    </section>
  )
}
