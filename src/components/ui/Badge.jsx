export default function Badge({ light = false, children }) {
  return (
    <span className={`eyebrow ${light ? 'eyebrow-light' : ''}`}>
      <span className="eyebrow-dot" aria-hidden="true" />
      {children}
    </span>
  )
}
