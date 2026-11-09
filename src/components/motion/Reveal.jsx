import { motion } from 'motion/react'
import { DURATION, EASE } from '@/config/motion'

/** Muncul (fade + slide) saat elemen masuk layar. */
export default function Reveal({ children, delay = 0, y = 28, x = 0, as = 'div', className, once = true }) {
  const Tag = motion[as] || motion.div
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: DURATION.base, delay, ease: EASE }}
    >
      {children}
    </Tag>
  )
}
