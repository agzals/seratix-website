import { useReducedMotion } from 'motion/react'
import { RESPECT_REDUCED_MOTION } from '@/config/motion'

/** true jika animasi harus diredam (mengikuti flag di config/motion.js). */
export function useReduceMotion() {
  const osPrefersReduce = useReducedMotion()
  return RESPECT_REDUCED_MOTION && !!osPrefersReduce
}
