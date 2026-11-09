import Reveal from '../Reveal'
import { WEDDING } from '../data'

export default function Events() {
  return (
    <section className="wd-section">
      <Reveal>
        <p className="wd-eyebrow">Rangkaian Acara</p>
        <h2 className="wd-title">Waktu &amp; Tempat</h2>
      </Reveal>
      <div className="wd-events">
        {WEDDING.events.map((e, i) => (
          <Reveal key={e.title} className="wd-event" delay={i * 0.15}>
            <h3 className="wd-script wd-event-title">{e.title}</h3>
            <p className="wd-event-date">{e.date}</p>
            <p className="wd-event-time">{e.time}</p>
            <div className="wd-divider" />
            <p className="wd-event-place">{e.place}</p>
            <p className="wd-event-addr">{e.address}</p>
            <a className="wd-btn wd-btn-small" href={e.maps} target="_blank" rel="noreferrer">📍 Lihat Lokasi</a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
