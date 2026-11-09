import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'motion/react'
import { useReduceMotion } from '@/hooks/useReduceMotion'

/** Angka yang menghitung naik saat terlihat. Format Indonesia (1.248). */
export default function Counter({ to, suffix = '', duration = 1.8 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const reduce = useReduceMotion()
  const [value, setValue] = useState(reduce ? to : 0)

  useEffect(() => {
    if (!inView || reduce) return
    const controls = animate(0, to, { duration, ease: 'easeOut', onUpdate: (v) => setValue(Math.round(v)) })
    return () => controls.stop()
  }, [inView, reduce, to, duration])

  return <span ref={ref}>{value.toLocaleString('id-ID')}{suffix}</span>
}
