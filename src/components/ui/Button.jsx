import { Link } from 'react-router-dom'

/** `to` = link internal, `href` = link eksternal, tanpa keduanya = <button>. */
export default function Button({ to, href, variant = 'primary', block = false, className = '', children, ...rest }) {
  const cls = ['btn', `btn-${variant}`, block && 'btn-block', className].filter(Boolean).join(' ')
  const inner = (
    <>
      <span className="btn-label">{children}</span>
      <span className="btn-shine" aria-hidden="true" />
    </>
  )
  if (to) return <Link to={to} className={cls} {...rest}>{inner}</Link>
  if (href) {
    const external = /^https?:/.test(href)
    return (
      <a href={href} className={cls} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})} {...rest}>
        {inner}
      </a>
    )
  }
  return <button type="button" className={cls} {...rest}>{inner}</button>
}
