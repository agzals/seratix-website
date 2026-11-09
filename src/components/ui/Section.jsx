import Container from './Container'

/** variant: 'default' | 'alt' | 'dark' */
export default function Section({ id, variant = 'default', className = '', children }) {
  const cls = ['section', variant !== 'default' && `section-${variant}`, className].filter(Boolean).join(' ')
  return (
    <section id={id} className={cls}>
      <Container>{children}</Container>
    </section>
  )
}
