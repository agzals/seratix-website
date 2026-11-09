import Reveal from '../Reveal'
import { WEDDING } from '../data'

function Person({ p, initial, delay }) {
  return (
    <Reveal className="wd-person" delay={delay}>
      <div className="wd-photo"><span className="wd-script">{initial}</span></div>
      <h3 className="wd-script wd-person-nick">{p.nick}</h3>
      <p className="wd-person-full">{p.full}</p>
      <p className="wd-person-parents">{p.parents}</p>
      <a className="wd-ig" href={`https://instagram.com/${p.ig}`} target="_blank" rel="noreferrer">@{p.ig}</a>
    </Reveal>
  )
}

export default function Couple() {
  return (
    <section className="wd-section">
      <Reveal>
        <p className="wd-eyebrow">Assalamu’alaikum Wr. Wb.</p>
        <p className="wd-intro">
          Dengan memohon rahmat dan ridha Allah SWT, kami bermaksud menyelenggarakan pernikahan putra-putri kami:
        </p>
      </Reveal>
      <div className="wd-couple">
        <Person p={WEDDING.groom} initial={WEDDING.groom.nick[0]} delay={0.1} />
        <Reveal className="wd-amp" delay={0.2}><span className="wd-script">&amp;</span></Reveal>
        <Person p={WEDDING.bride} initial={WEDDING.bride.nick[0]} delay={0.3} />
      </div>
    </section>
  )
}
