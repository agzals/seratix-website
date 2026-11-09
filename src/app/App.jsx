import { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { MotionConfig } from 'motion/react'
import { ThemeProvider } from './providers/ThemeProvider'
import { router } from './router'
import { RESPECT_REDUCED_MOTION } from '@/config/motion'

export default function App() {
  useEffect(() => {
    // Class ini mengaktifkan aturan CSS reduce-motion di styles/responsive.css
    document.documentElement.classList.toggle('respect-reduced-motion', RESPECT_REDUCED_MOTION)
  }, [])

  return (
    // 'never' = animasi selalu jalan; 'user' = ikut setting perangkat pengunjung
    <MotionConfig reducedMotion={RESPECT_REDUCED_MOTION ? 'user' : 'never'}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </MotionConfig>
  )
}
