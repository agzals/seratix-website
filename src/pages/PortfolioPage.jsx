import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import Seo from '@/components/common/Seo'
import PageHeader from '@/components/common/PageHeader'
import PortfolioCard from '@/components/common/PortfolioCard'
import { Section } from '@/components/ui'
import { PORTFOLIO } from '@/content/portfolio'
import { SERVICE_CATEGORIES } from '@/content/services'

const FILTERS = [{ slug: 'all', label: 'Semua' }, ...SERVICE_CATEGORIES.map(({ slug, label }) => ({ slug, label }))]

export default function PortfolioPage() {
  const [filter, setFilter] = useState('all')
  const items = filter === 'all' ? PORTFOLIO : PORTFOLIO.filter((p) => p.category === filter)

  return (
    <>
      <Seo title="Portfolio & Demo" description="Contoh solusi digital dari Seratix." />
      <PageHeader eyebrow="Portfolio & Demo" title="Contoh Solusi Kami" description="Demo dan proyek yang menggambarkan hasil kerja Seratix." />
      <Section>
        <div className="tabs" role="tablist">
          {FILTERS.map((f) => (
            <button key={f.slug} type="button" role="tab" aria-selected={filter === f.slug} className={`tab ${filter === f.slug ? 'active' : ''}`} onClick={() => setFilter(f.slug)}>
              {filter === f.slug && <motion.span layoutId="filter-pill" className="tab-pill" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />}
              <span className="tab-label">{f.label}</span>
            </button>
          ))}
        </div>
        {items.length ? (
          <motion.div layout className="demo-grid">
            <AnimatePresence mode="popLayout">
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35 }}
                >
                  <PortfolioCard item={item} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <p className="empty-state">Belum ada demo untuk kategori ini.</p>
        )}
      </Section>
    </>
  )
}
