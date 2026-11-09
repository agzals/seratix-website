import Seo from '@/components/common/Seo'
import PageHeader from '@/components/common/PageHeader'
import { AboutSection, CtaSection, ProcessSection } from '@/features/home'

export default function AboutPage() {
  return (
    <>
      <Seo title="Tentang Kami" />
      <PageHeader eyebrow="Tentang Kami" title="Mengenal Seratix" description="Studio solusi digital untuk momen berkesan dan bisnis yang lebih efisien." />
      <AboutSection />
      <ProcessSection />
      <CtaSection />
    </>
  )
}
