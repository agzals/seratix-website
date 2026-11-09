/** Teks berjalan tanpa henti (CSS, ringan). Berhenti saat di-hover. */
export default function Marquee({ items }) {
  const row = [...items, ...items]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {row.map((t, i) => (
          <span key={i} className="marquee-item">
            {t}<span className="marquee-dot">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
