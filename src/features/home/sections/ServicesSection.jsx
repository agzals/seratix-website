import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Button, FeatureCard, Section, SectionHeader } from '@/components/ui'
import { SERVICE_CATEGORIES } from '@/content/services'
import { ROUTES } from '@/config/navigation'
import { EASE } from '@/config/motion'

export default function ServicesSection() {
  const [active, setActive] = useState(SERVICE_CATEGORIES[0].slug)
  const current = SERVICE_CATEGORIES.find((c) => c.slug === active)

  return (
    <Section id="layanan">
      <SectionHeader
        eyebrow="Layanan"
        title="Dua Solusi, Satu Tujuan"
        description="Membuat setiap momen lebih berkesan dan setiap proses bisnis lebih efisien."
      />
      <div className="tabs" role="tablist">
        {SERVICE_CATEGORIES.map((c) => (
          <button
            key={c.slug}
            type="button"
            role="tab"
            aria-selected={active === c.slug}
            className={`tab ${active === c.slug ? 'active' : ''}`}
            onClick={() => setActive(c.slug)}
          >
            {active === c.slug && (
              <motion.span layoutId="tab-pill" className="tab-pill" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />
            )}
            <span className="tab-label">{c.label}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current.slug}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: EASE }}
        >
          <div className="service-intro">
            <h3>{current.title}</h3>
            <p>{current.summary}</p>
          </div>
          <motion.div
            className="card-grid"
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          >
            {current.items.map((it) => (
              <motion.div
                key={it.name}
                variants={{ hidden: { opacity: 0, y: 30, scale: 0.96 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: EASE } } }}
              >
                <FeatureCard icon={it.icon} title={it.name} text={it.text} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <div className="center-action">
        <Button to={ROUTES.serviceDetail(current.slug)} variant="ghost">Detail {current.label}</Button>
      </div>
    </Section>
  )
}
