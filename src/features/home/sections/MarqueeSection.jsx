import { Marquee } from '@/components/motion'
import { MARQUEE } from '@/content/process'

export default function MarqueeSection() {
  return (
    <div className="marquee-section">
      <Marquee items={MARQUEE} />
    </div>
  )
}
