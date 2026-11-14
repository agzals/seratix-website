import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '@/components/layout/MainLayout'
import HomePage from '@/pages/HomePage'
import ServicesPage from '@/pages/ServicesPage'
import ServiceDetailPage from '@/pages/ServiceDetailPage'
import HoundPage from '@/pages/HoundPage'
import PortfolioPage from '@/pages/PortfolioPage'
import AboutPage from '@/pages/AboutPage'
import ContactPage from '@/pages/ContactPage'
import NotFoundPage from '@/pages/NotFoundPage'
import WeddingDemoPage from '@/pages/WeddingDemoPage'

// Tambah halaman: buat file di /pages lalu daftarkan di sini (dan menu di config/navigation.js).
export const router = createBrowserRouter([
  // Halaman demo berdiri sendiri (tanpa navbar & footer Seratix)
  { path: '/demo/wedding', element: <WeddingDemoPage /> },
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/layanan', element: <ServicesPage /> },
      { path: '/layanan/:slug', element: <ServiceDetailPage /> },
      { path: '/hound', element: <HoundPage /> },
      { path: '/portfolio', element: <PortfolioPage /> },
      { path: '/tentang', element: <AboutPage /> },
      { path: '/kontak', element: <ContactPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
