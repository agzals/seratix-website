import Seo from '@/components/common/Seo'
import { HoundCta, HoundFaq, HoundFeatures, HoundHero, HoundPricing, HoundProblems, HoundSteps } from '@/features/hound'

// Urutan section halaman Hound: tukar / hapus / tambah baris di sini.
export default function HoundPage() {
  return (
    <>
      <Seo
        title="Seratix Hound"
        description="Seratix Hound menyatukan chat WhatsApp dan Instagram di satu inbox untuk tim kecil, dengan pengingat chat yang belum dibalas dan estimasi biaya pesan. Saat ini dalam versi beta."
      />
      <HoundHero />
      <HoundProblems />
      <HoundFeatures />
      <HoundSteps />
      <HoundPricing />
      <HoundFaq />
      <HoundCta />
    </>
  )
}
