import { motion } from 'motion/react'
import { waLink } from '@/lib/whatsapp'
import { getServiceBySlug } from '@/content/services'

export default function PortfolioCard({ item }) {
  const category = getServiceBySlug(item.category)
  const href = item.url || waLink(`Halo Seratix, saya ingin melihat demo ${item.title}.`)

  return (
    <motion.article className="demo-card" whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
      <div className={`demo-thumb thumb-${item.color}`}>
        <span className="thumb-orb thumb-orb-1" aria-hidden="true" />
        <span className="thumb-orb thumb-orb-2" aria-hidden="true" />
        <span className="demo-badge">{item.status === 'client' ? 'Client Project' : 'Demo Project'}</span>
        <span className="demo-thumb-title">{item.title}</span>
      </div>
      <div className="demo-body">
        {category && <small>{category.label}</small>}
        <h4>{item.title}</h4>
        <p>{item.text}</p>
        <a href={href} target="_blank" rel="noreferrer" className="link">
          {item.url ? 'Lihat demo' : 'Minta demo'} <span className="link-arrow">→</span>
        </a>
      </div>
    </motion.article>
  )
}
