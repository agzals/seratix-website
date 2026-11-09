import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'
import { useReduceMotion } from '@/hooks/useReduceMotion'

/** Elemen yang "tertarik" ke arah kursor. */
export default function Magnetic({ children, strength = 0.3 }) {
  const ref = useRef(null)
  const reduce = useReduceMotion()
  const x = useSpring(useMotionValue(0), { stiffness: 250, damping: 15 })
  const y = useSpring(useMotionValue(0), { stiffness: 250, damping: 15 })

  const onMove = (e) => {
    if (reduce || e.pointerType !== 'mouse') return
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * strength)
    y.set((e.clientY - (r.top + r.height / 2)) * strength)
  }
  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.span ref={ref} className="magnetic" style={{ x, y }} onPointerMove={onMove} onPointerLeave={reset}>
      {children}
    </motion.span>
  )
}
