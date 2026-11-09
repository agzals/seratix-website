import Reveal from '../Reveal'
import { WEDDING } from '../data'

export default function Story() {
  return (
    <section className="wd-section">
      <Reveal>
        <p className="wd-eyebrow">Our Journey</p>
        <h2 className="wd-title">Kisah Kami</h2>
      </Reveal>
      <ol className="wd-timeline">
        {WEDDING.story.map((s, i) => (
          <Reveal as="li" key={s.year} delay={i * 0.1}>
            <span className="wd-tl-dot" aria-hidden="true" />
            <p className="wd-tl-year">{s.year}</p>
            <h3 className="wd-tl-title">{s.title}</h3>
            <p className="wd-tl-text">{s.text}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}
