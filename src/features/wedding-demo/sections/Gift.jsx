import { useState } from 'react'
import Reveal from '../Reveal'
import { WEDDING } from '../data'

export default function Gift() {
  const [copied, setCopied] = useState('')

  const copy = async (num) => {
    try {
      await navigator.clipboard.writeText(num)
    } catch {
      /* clipboard tidak tersedia */
    }
    setCopied(num)
    setTimeout(() => setCopied(''), 2000)
  }

  return (
    <section className="wd-section">
      <Reveal>
        <p className="wd-eyebrow">Wedding Gift</p>
        <h2 className="wd-title">Tanda Kasih</h2>
        <p className="wd-intro">Doa restu Anda adalah karunia yang sangat berarti. Namun jika ingin memberikan tanda kasih, dapat melalui:</p>
      </Reveal>
      <div className="wd-gifts">
        {WEDDING.gifts.map((g, i) => (
          <Reveal key={g.number} className="wd-card" delay={i * 0.12}>
            <p className="wd-card-bank">{g.bank}</p>
            <p className="wd-card-num">{g.number}</p>
            <p className="wd-card-name">a.n. {g.name}</p>
            <button type="button" className="wd-btn wd-btn-small" onClick={() => copy(g.number)}>
              {copied === g.number ? '✓ Tersalin' : 'Salin Nomor'}
            </button>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
