import { useEffect, useState } from 'react'
import Reveal from '../Reveal'
import { WEDDING } from '../data'

const target = new Date(WEDDING.date).getTime()

function diff() {
  const ms = Math.max(0, target - Date.now())
  return {
    Hari: Math.floor(ms / 86400000),
    Jam: Math.floor((ms / 3600000) % 24),
    Menit: Math.floor((ms / 60000) % 60),
    Detik: Math.floor((ms / 1000) % 60),
  }
}

function calendarLink() {
  const start = new Date(WEDDING.date)
  const end = new Date(start.getTime() + 6 * 3600000)
  const fmt = (d) => d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: `Pernikahan ${WEDDING.groom.nick} & ${WEDDING.bride.nick}`,
    dates: `${fmt(start)}/${fmt(end)}`,
    location: WEDDING.events[0]?.address || '',
  })
  return `https://calendar.google.com/calendar/render?${params}`
}

export default function Countdown() {
  const [t, setT] = useState(diff)
  useEffect(() => {
    const id = setInterval(() => setT(diff()), 1000)
    return () => clearInterval(id)
  }, [])
  const done = Object.values(t).every((v) => v === 0)

  return (
    <section className="wd-section wd-countdown">
      <Reveal>
        <p className="wd-eyebrow">Menuju Hari Bahagia</p>
        <h2 className="wd-title">Save The Date</h2>
        {done ? (
          <p className="wd-intro">Hari bahagia telah tiba. Terima kasih atas doa dan restunya.</p>
        ) : (
          <div className="wd-timer" aria-live="polite">
            {Object.entries(t).map(([k, v]) => (
              <div key={k} className="wd-timer-box">
                <b>{String(v).padStart(2, '0')}</b>
                <span>{k}</span>
              </div>
            ))}
          </div>
        )}
        <a className="wd-btn wd-btn-outline" href={calendarLink()} target="_blank" rel="noreferrer">
          📅 Simpan ke Kalender
        </a>
      </Reveal>
    </section>
  )
}
