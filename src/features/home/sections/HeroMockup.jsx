import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import { useReduceMotion } from '@/hooks/useReduceMotion'
import { Counter } from '@/components/motion'
import { EASE } from '@/config/motion'

const BARS = [40, 65, 50, 80, 70, 95]

export default function HeroMockup() {
  const reduce = useReduceMotion()
  const mx = useSpring(useMotionValue(0), { stiffness: 80, damping: 20 })
  const my = useSpring(useMotionValue(0), { stiffness: 80, damping: 20 })
  // efek parallax: dua kartu bergerak berlawanan arah mengikuti kursor
  const phoneX = useTransform(mx, (v) => v * -18)
  const phoneY = useTransform(my, (v) => v * -18)
  const dashX = useTransform(mx, (v) => v * 24)
  const dashY = useTransform(my, (v) => v * 24)

  const onMove = (e) => {
    if (reduce || e.pointerType !== 'mouse') return
    const r = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }
  const reset = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <div className="hero-visual" aria-hidden="true" onPointerMove={onMove} onPointerLeave={reset}>
      <motion.div
        className="mock-wrap mock-wrap-phone"
        style={{ x: phoneX, y: phoneY }}
        initial={{ opacity: 0, y: 60, rotate: -6 }}
        animate={{ opacity: 1, y: 0, rotate: -3 }}
        transition={{ duration: 1, delay: 0.4, ease: EASE }}
      >
        <div className="mock mock-phone float-a">
          <div className="phone-top" />
          <p className="mock-small">The Wedding of</p>
          <p className="mock-names">Raka &amp; Nadia</p>
          <p className="mock-small">Sabtu, 12 Desember</p>
          <div className="countdown">
            <span><b>24</b>Hari</span><span><b>08</b>Jam</span><span><b>45</b>Menit</span>
          </div>
          <div className="mock-btn">Konfirmasi Kehadiran</div>
          <span className="heart heart-1">♥</span>
          <span className="heart heart-2">♥</span>
        </div>
      </motion.div>

      <motion.div
        className="mock-wrap mock-wrap-dash"
        style={{ x: dashX, y: dashY }}
        initial={{ opacity: 0, x: 60, rotate: 6 }}
        animate={{ opacity: 1, x: 0, rotate: 2 }}
        transition={{ duration: 1, delay: 0.6, ease: EASE }}
      >
        <div className="mock mock-dash float-b">
          <div className="dash-head"><span /><span /><span /></div>
          <p className="dash-title">Automation Dashboard <span className="live-dot">LIVE</span></p>
          <div className="dash-stats">
            <div><b><Counter to={1248} /></b><small>Dokumen diproses</small></div>
            <div><b><Counter to={98} suffix="%" /></b><small>Tepat waktu</small></div>
          </div>
          <div className="bars">
            {BARS.map((h, i) => (
              <motion.span
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.8, delay: 1 + i * 0.08, ease: EASE }}
              />
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        className="mock-chip"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.4, type: 'spring', stiffness: 260, damping: 16 }}
      >
        <span className="chip-check">✓</span> RSVP diterima
      </motion.div>
    </div>
  )
}
