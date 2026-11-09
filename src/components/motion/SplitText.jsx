import { Fragment } from 'react'
import { motion } from 'motion/react'
import { EASE } from '@/config/motion'

/** Judul yang muncul per kata. */
export default function SplitText({ text, className, delay = 0, gap = 0.06 }) {
  const words = text.split(' ')
  return (
    <span className={className} aria-label={text}>
      {words.map((w, i) => (
        <Fragment key={i}>
          <span className="split-word" aria-hidden="true">
            <motion.span
              className="split-inner"
              initial={{ y: '110%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: delay + i * gap, ease: EASE }}
            >
              {w}
            </motion.span>
          </span>
          {i < words.length - 1 && ' '}
        </Fragment>
      ))}
    </span>
  )
}
