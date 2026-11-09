import Reveal from '../Reveal'
import Ornament from '../Ornament'
import { WEDDING } from '../data'

export default function Quote() {
  return (
    <section id="wd-quote" className="wd-section wd-quote">
      <Reveal>
        <Ornament />
        <p className="wd-quote-text">“{WEDDING.quote.text}”</p>
        <p className="wd-quote-src">{WEDDING.quote.source}</p>
      </Reveal>
    </section>
  )
}
