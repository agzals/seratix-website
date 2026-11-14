import { Link } from 'react-router-dom'
import Logo from './Logo'
import { SITE } from '@/config/site'
import { MAIN_NAV, ROUTES } from '@/config/navigation'
import { SERVICE_CATEGORIES } from '@/content/services'
import { HOUND, HOUND_LINKS } from '@/config/products'
import { waLink } from '@/lib/whatsapp'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Logo onDark />
          <p className="footer-tagline">{SITE.tagline}</p>
        </div>
        <div>
          <h5>Menu</h5>
          <ul>{MAIN_NAV.map((n) => <li key={n.to}><Link to={n.to}>{n.label}</Link></li>)}</ul>
        </div>
        <div>
          <h5>Layanan &amp; Produk</h5>
          <ul>
            {SERVICE_CATEGORIES.map((c) => <li key={c.slug}><Link to={`/layanan/${c.slug}`}>{c.label}</Link></li>)}
            <li>
              <Link to={ROUTES.hound}>{HOUND.name} <span className="footer-badge">{HOUND.status}</span></Link>
            </li>
            {HOUND_LINKS.live && <li><a href={HOUND_LINKS.link()} target="_blank" rel="noreferrer">Buka aplikasi Hound ↗</a></li>}
          </ul>
        </div>
        <div>
          <h5>Kontak</h5>
          <ul>
            <li><a href={waLink()} target="_blank" rel="noreferrer">WhatsApp</a></li>
            <li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            <li><a href={`https://instagram.com/${SITE.instagram}`} target="_blank" rel="noreferrer">@{SITE.instagram}</a></li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</span>
        <span className="footer-big" aria-hidden="true">{SITE.name}</span>
      </div>
    </footer>
  )
}
