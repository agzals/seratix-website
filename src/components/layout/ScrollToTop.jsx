import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Scroll ke #anchor jika ada hash. (Scroll ke atas ditangani MainLayout setelah transisi.) */
export default function ScrollToTop() {
  const { hash } = useLocation()
  useEffect(() => {
    if (hash) document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
  }, [hash])
  return null
}
