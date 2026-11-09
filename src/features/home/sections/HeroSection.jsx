import { motion } from 'motion/react'
import { Badge, Button, Container } from '@/components/ui'
import { Magnetic, SplitText } from '@/components/motion'
import { SITE } from '@/config/site'
import { ROUTES } from '@/config/navigation'
import { EASE } from '@/config/motion'
import HeroMockup from './HeroMockup'

const fade = (delay) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: EASE },
})

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="blob blob-1" aria-hidden="true" />
      <div className="blob blob-2" aria-hidden="true" />
      <Container className="hero-grid">
        <div>
          <motion.div {...fade(0.1)}><Badge>Digital Solutions & Automation</Badge></motion.div>
          <h1>
            <SplitText text="Wujudkan Ide Digital Anda Bersama" delay={0.2} />{' '}
            <motion.span
              className="accent"
              initial={{ opacity: 0, scale: 0.8, filter: 'blur(8px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
            >
              {SITE.name}
            </motion.span>
          </h1>
          <motion.p className="lead" {...fade(0.75)}>
            Dari undangan dan website event hingga otomatisasi proses bisnis, Seratix membantu
            menghadirkan solusi digital yang praktis dan sesuai kebutuhan Anda.
          </motion.p>
          <motion.div className="hero-actions" {...fade(0.9)}>
            <Magnetic><Button to={ROUTES.services}>Jelajahi Layanan</Button></Magnetic>
            <Magnetic><Button to={ROUTES.portfolio} variant="ghost">Lihat Demo</Button></Magnetic>
          </motion.div>
          <motion.p className="hero-tagline" {...fade(1.05)}>{SITE.tagline}</motion.p>
        </div>
        <HeroMockup />
      </Container>
    </section>
  )
}
