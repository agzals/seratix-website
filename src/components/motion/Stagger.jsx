import { motion } from 'motion/react'
import { fadeUp, stagger } from '@/config/motion'

/** Container: anak-anaknya (StaggerItem) muncul bergantian. */
export function Stagger({ children, className, gap = 0.1, delay = 0, as = 'div' }) {
  const Tag = motion[as] || motion.div
  return (
    <Tag className={className} variants={stagger(gap, delay)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }}>
      {children}
    </Tag>
  )
}

export function StaggerItem({ children, className, as = 'div' }) {
  const Tag = motion[as] || motion.div
  return (
    <Tag className={className} variants={fadeUp}>
      {children}
    </Tag>
  )
}
