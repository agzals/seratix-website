import { motion } from 'motion/react'
import Ornament from '../Ornament'
import { WEDDING } from '../data'

export default function Hero() {
  return (
    <section className="wd-hero">
      <div className="wd-arch">
        <motion.p className="wd-eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 1 }}>
          We Are Getting Married
        </motion.p>
        <motion.h2 className="wd-script wd-hero-names" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 1.2 }}>
          {WEDDING.groom.nick}<br /><span>&amp;</span><br />{WEDDING.bride.nick}
        </motion.h2>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 1 }}>
          <Ornament />
          <p className="wd-hero-date">{WEDDING.dateLabel}</p>
        </motion.div>
      </div>
      <a href="#wd-quote" className="wd-scroll" aria-label="Gulir ke bawah">
        <span />
      </a>
    </section>
  )
}
