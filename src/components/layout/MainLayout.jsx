import { useLocation, useOutlet } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import Navbar from './Navbar'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'
import ScrollToTop from './ScrollToTop'
import { ScrollProgress } from '@/components/motion'
import { pageTransition } from '@/config/motion'

export default function MainLayout() {
  const location = useLocation()
  const outlet = useOutlet()

  return (
    <>
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
        <motion.main key={location.pathname} {...pageTransition}>
          {outlet}
        </motion.main>
      </AnimatePresence>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
