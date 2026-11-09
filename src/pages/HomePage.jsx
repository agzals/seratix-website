import Seo from '@/components/common/Seo'
import {
  AboutSection, CtaSection, HeroSection, MarqueeSection, PortfolioSection,
  ProcessSection, ServicesSection, StatsSection,
} from '@/features/home'

// Urutan section beranda — tukar/hapus/tambah baris di sini.
export default function HomePage() {
  return (
    <>
      <Seo />
      <HeroSection />
      <MarqueeSection />
      <ServicesSection />
      <StatsSection />
      <PortfolioSection />
      <ProcessSection />
      <AboutSection />
      <CtaSection />
    </>
  )
}
