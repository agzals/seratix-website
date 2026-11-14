import { useSearchParams } from 'react-router-dom'
import Seo from '@/components/common/Seo'
import PageHeader from '@/components/common/PageHeader'
import { Section } from '@/components/ui'
import { Reveal } from '@/components/motion'
import ContactForm from '@/features/contact/ContactForm'
import ContactInfo from '@/features/contact/ContactInfo'
import { serviceForTopic } from '@/config/products'

export default function ContactPage() {
  // /kontak?topik=hound -> "Seratix Hound (akses beta)" terpilih otomatis
  const [params] = useSearchParams()
  const defaultService = serviceForTopic(params.get('topik'))
  const forHound = Boolean(defaultService)

  return (
    <>
      <Seo
        title={forHound ? 'Minta Akses Beta Seratix Hound' : 'Kontak'}
        description={forHound ? 'Minta akses beta Seratix Hound, inbox WhatsApp dan Instagram untuk tim kecil.' : 'Hubungi Seratix untuk konsultasi kebutuhan digital Anda.'}
      />
      <PageHeader
        eyebrow={forHound ? 'Seratix Hound' : 'Kontak'}
        title={forHound ? 'Minta Akses Beta' : 'Mari Diskusikan Kebutuhan Anda'}
        description={forHound
          ? 'Ceritakan usahamu dan saluran yang dipakai (WhatsApp, Instagram). Kami hubungi untuk aktivasi.'
          : 'Isi formulir atau hubungi kami langsung.'}
      />
      <Section>
        <div className="contact-grid">
          <Reveal x={-24} y={0}>
            <h2>Hubungi Seratix</h2>
            <p className="lead">Ceritakan kebutuhan Anda. Kami akan membantu menemukan solusi yang tepat.</p>
            <ContactInfo />
          </Reveal>
          <Reveal x={24} y={0} delay={0.1}>
            {/* key: form dibuat ulang bila topik berubah, supaya pilihan awal ikut berganti */}
            <ContactForm key={defaultService ?? 'umum'} defaultService={defaultService} />
          </Reveal>
        </div>
      </Section>
    </>
  )
}
