import Seo from '@/components/common/Seo'
import {
  AboutSection, CtaSection, HeroSection, HoundSection, MarqueeSection, PortfolioSection,
  ProcessSection, ServicesSection, StatsSection,
} from '@/features/home'

// Urutan section beranda: tukar / hapus / tambah baris di sini.
export default function HomePage() {
  return (
    <>
      <Seo />
      <HeroSection />
      <MarqueeSection />
      <ServicesSection />
      <HoundSection />
      <StatsSection />
      <PortfolioSection />
      <ProcessSection />
      <AboutSection />
      <CtaSection />
    </>
  )
}
