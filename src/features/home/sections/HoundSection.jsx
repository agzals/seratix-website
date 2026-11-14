import { Link } from 'react-router-dom'
import { Badge, Button, Section } from '@/components/ui'
import { Magnetic, Reveal } from '@/components/motion'
import { HOUND, HOUND_LINKS } from '@/config/products'
import { ROUTES } from '@/config/navigation'
import { HOUND_TEASER } from '@/content/hound'
import HoundMock from '@/features/hound/HoundMock'

/** Teaser Seratix Hound di beranda. Selalu berlatar gelap (seperti CTA) agar kontrasnya konsisten di kedua tema. */
export default function HoundSection() {
  return (
    <Section id="hound">
      <Reveal className="hteaser">
        <div className="hteaser-glow" aria-hidden="true" />
        <div className="hteaser-text">
          <Badge light>Produk baru · {HOUND.status}</Badge>
          <h2>{HOUND.name}</h2>
          <p className="hteaser-lead">{HOUND_TEASER.lead}</p>
          <ul className="hticks">{HOUND_TEASER.points.map((p) => <li key={p}><span className="value-check">✓</span>{p}</li>)}</ul>
          <div className="hteaser-actions">
            <Magnetic><Button to={ROUTES.hound}>Lihat Seratix Hound</Button></Magnetic>
            {HOUND_LINKS.live
              ? <Magnetic><Button href={HOUND_LINKS.link('/daftar')} variant="ghost-light">Coba gratis {HOUND.trialDays} hari</Button></Magnetic>
              : <Magnetic><Button to={ROUTES.contactHound} variant="ghost-light">Minta akses beta</Button></Magnetic>}
          </div>
          <p className="hteaser-foot">Untuk usaha yang berjualan lewat chat. Butuh solusi khusus? <Link to={ROUTES.services}>Lihat layanan kami</Link></p>
        </div>
        <div className="hteaser-visual"><HoundMock caption={false} /></div>
      </Reveal>
    </Section>
  )
}
