import { Badge, Container } from '@/components/ui'
import { Reveal, SplitText } from '@/components/motion'

export default function PageHeader({ eyebrow, title, description }) {
  return (
    <header className="page-header">
      <div className="hero-glow" aria-hidden="true" />
      <div className="blob blob-1" aria-hidden="true" />
      <Container>
        {eyebrow && <Reveal y={12}><Badge>{eyebrow}</Badge></Reveal>}
        <h1><SplitText text={title} delay={0.1} /></h1>
        {description && <Reveal delay={0.35}><p className="lead">{description}</p></Reveal>}
      </Container>
    </header>
  )
}
