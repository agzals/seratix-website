import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import Logo from './Logo'
import ThemeToggle from './ThemeToggle'
import { Button } from '@/components/ui'
import { MAIN_NAV } from '@/config/navigation'
import { useScrolled } from '@/hooks/useScrolled'
import { waLink } from '@/lib/whatsapp'
import { EASE } from '@/config/motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled()
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])

  return (
    <motion.header
      className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: EASE }}
    >
      <div className="container nav-inner">
        <Logo />

        {/* Desktop */}
        <nav className="nav-links" aria-label="Menu utama">
          {MAIN_NAV.map((item) => (
            <NavLink key={item.to} to={item.to} className="nav-link">
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && <motion.span layoutId="nav-underline" className="nav-underline" />}
                </>
              )}
            </NavLink>
          ))}
          <Button href={waLink()} className="nav-cta">Konsultasi</Button>
        </nav>

        <div className="nav-right">
          <ThemeToggle />
          <button type="button" className={`burger ${open ? 'is-open' : ''}`} aria-label="Buka menu" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile */}
      <AnimatePresence>
        {open && (
          <motion.nav
            className="mobile-menu"
            aria-label="Menu mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <motion.div
              className="container mobile-menu-inner"
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } }}
            >
              {MAIN_NAV.map((item) => (
                <motion.div key={item.to} variants={{ hidden: { opacity: 0, x: -16 }, show: { opacity: 1, x: 0 } }}>
                  <NavLink to={item.to} className="mobile-link">{item.label}</NavLink>
                </motion.div>
              ))}
              <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
                <Button href={waLink()} block>Konsultasi via WhatsApp</Button>
              </motion.div>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
