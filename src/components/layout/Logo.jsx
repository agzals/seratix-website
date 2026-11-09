import { Link } from 'react-router-dom'
import { SITE } from '@/config/site'

export default function Logo({ light = false }) {
  return (
    <Link to="/" className={`logo ${light ? 'logo-light' : ''}`} aria-label={`${SITE.name} beranda`}>
      <span className="logo-mark">S</span>
      <span>{SITE.name}</span>
    </Link>
  )
}
