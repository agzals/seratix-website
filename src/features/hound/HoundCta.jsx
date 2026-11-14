import { Container } from '@/components/ui'
import { Reveal } from '@/components/motion'
import { HOUND } from '@/config/products'
import HoundActions from './HoundActions'

// Memakai kelas .cta* yang sama dengan CtaSection agar tampilannya konsisten.
export default function HoundCta() {
  return (
    <section className="cta">
      <Container>
        <Reveal className="cta-box">
          <div className="cta-glow" aria-hidden="true" />
          <div className="cta-text">
            <h2>Berhenti kejar-kejaran chat.</h2>
            <p>{HOUND.tagline}</p>
          </div>
          <div className="cta-actions"><HoundActions onDark secondaryHref="#fitur-hound" /></div>
        </Reveal>
      </Container>
    </section>
  )
}
