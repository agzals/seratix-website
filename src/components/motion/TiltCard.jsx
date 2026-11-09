import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import { useReduceMotion } from '@/hooks/useReduceMotion'

/** Kartu miring 3D mengikuti kursor + efek spotlight (hanya desktop). */
export default function TiltCard({ children, className = '', max = 8 }) {
  const ref = useRef(null)
  const reduce = useReduceMotion()
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const sx = useSpring(mx, { stiffness: 200, damping: 20 })
  const sy = useSpring(my, { stiffness: 200, damping: 20 })
  const rotateY = useTransform(sx, [0, 1], [-max, max])
  const rotateX = useTransform(sy, [0, 1], [max, -max])

  const onMove = (e) => {
    if (reduce || e.pointerType !== 'mouse') return
    const r = ref.current.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    mx.set(px)
    my.set(py)
    ref.current.style.setProperty('--spot-x', `${px * 100}%`)
    ref.current.style.setProperty('--spot-y', `${py * 100}%`)
  }
  const onLeave = () => {
    mx.set(0.5)
    my.set(0.5)
  }

  return (
    <motion.div
      ref={ref}
      className={`tilt ${className}`}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={reduce ? undefined : { rotateX, rotateY, transformPerspective: 900 }}
    >
      {children}
    </motion.div>
  )
}
