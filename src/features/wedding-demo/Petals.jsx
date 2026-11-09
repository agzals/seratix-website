/** Kelopak bunga berjatuhan — CSS murni, ringan. */
const PETALS = Array.from({ length: 14 }, (_, i) => ({
  left: (i * 7.3 + 3) % 100,
  delay: (i * 1.7) % 12,
  duration: 11 + (i % 5) * 2,
  size: 10 + (i % 4) * 4,
}))

export default function Petals() {
  return (
    <div className="wd-petals" aria-hidden="true">
      {PETALS.map((p, i) => (
        <span
          key={i}
          className="wd-petal"
          style={{ left: `${p.left}%`, width: p.size, height: p.size, animationDelay: `${p.delay}s`, animationDuration: `${p.duration}s` }}
        />
      ))}
    </div>
  )
}
