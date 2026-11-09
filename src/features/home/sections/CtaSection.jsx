import { Button, Container } from '@/components/ui'
import { Magnetic, Reveal } from '@/components/motion'
import { ROUTES } from '@/config/navigation'
import { waLink } from '@/lib/whatsapp'

export default function CtaSection() {
  return (
    <section className="cta">
      <Container>
        <Reveal className="cta-box">
          <div className="cta-glow" aria-hidden="true" />
          <div className="cta-text">
            <h2>Punya Ide atau Proses yang Ingin Dipermudah?</h2>
            <p>Ceritakan kebutuhan Anda. Mari temukan solusi digital yang tepat bersama Seratix.</p>
          </div>
          <div className="cta-actions">
            <Magnetic><Button href={waLink()}>Diskusi via WhatsApp</Button></Magnetic>
            <Magnetic><Button to={ROUTES.contact} variant="ghost-light">Isi Formulir</Button></Magnetic>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
