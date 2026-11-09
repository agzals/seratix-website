/** Ornamen garis + daun sederhana (SVG). */
export default function Ornament({ className = '' }) {
  return (
    <svg className={`wd-ornament ${className}`} viewBox="0 0 200 24" aria-hidden="true">
      <path d="M0 12 H80" stroke="currentColor" strokeWidth="0.8" />
      <path d="M120 12 H200" stroke="currentColor" strokeWidth="0.8" />
      <path d="M100 4 C94 8 94 16 100 20 C106 16 106 8 100 4 Z" fill="currentColor" opacity="0.8" />
      <path d="M88 12 C84 8 80 9 78 12 C80 15 84 16 88 12 Z" fill="currentColor" opacity="0.5" />
      <path d="M112 12 C116 8 120 9 122 12 C120 15 116 16 112 12 Z" fill="currentColor" opacity="0.5" />
    </svg>
  )
}
