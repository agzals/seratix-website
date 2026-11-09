import Seo from '@/components/common/Seo'
import PageHeader from '@/components/common/PageHeader'
import { Section } from '@/components/ui'
import { Reveal } from '@/components/motion'
import ContactForm from '@/features/contact/ContactForm'
import ContactInfo from '@/features/contact/ContactInfo'

export default function ContactPage() {
  return (
    <>
      <Seo title="Kontak" description="Hubungi Seratix untuk konsultasi kebutuhan digital Anda." />
      <PageHeader eyebrow="Kontak" title="Mari Diskusikan Kebutuhan Anda" description="Isi formulir atau hubungi kami langsung." />
      <Section>
        <div className="contact-grid">
          <Reveal x={-24} y={0}>
            <h2>Hubungi Seratix</h2>
            <p className="lead">Ceritakan kebutuhan Anda. Kami akan membantu menemukan solusi yang tepat.</p>
            <ContactInfo />
          </Reveal>
          <Reveal x={24} y={0} delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </Section>
    </>
  )
}
