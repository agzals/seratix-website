import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import Reveal from '../Reveal'
import { WEDDING } from '../data'

function Tile({ item, label }) {
  return item.src ? (
    <img src={item.src} alt={label} loading="lazy" />
  ) : (
    <div className={`wd-ph ${item.tone}`}><span>Foto Prewedding</span></div>
  )
}

export default function Gallery() {
  const [active, setActive] = useState(null)

  useEffect(() => {
    if (active === null) return
    const onKey = (e) => e.key === 'Escape' && setActive(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active])

  return (
    <section className="wd-section">
      <Reveal>
        <p className="wd-eyebrow">Moments</p>
        <h2 className="wd-title">Galeri</h2>
      </Reveal>
      <div className="wd-gallery">
        {WEDDING.gallery.map((g, i) => (
          <Reveal key={i} delay={(i % 3) * 0.1}>
            <button type="button" className={`wd-tile wd-tile-${i}`} onClick={() => setActive(i)} aria-label={`Buka foto ${i + 1}`}>
              <Tile item={g} label={`Foto ${i + 1}`} />
            </button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div className="wd-lightbox" onClick={() => setActive(null)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="wd-lightbox-img" initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} onClick={(e) => e.stopPropagation()}>
              <Tile item={WEDDING.gallery[active]} label={`Foto ${active + 1}`} />
            </motion.div>
            <button type="button" className="wd-lightbox-close" onClick={() => setActive(null)} aria-label="Tutup">×</button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
