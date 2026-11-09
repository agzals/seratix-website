import Badge from './Badge'
import { Stagger, StaggerItem } from '@/components/motion'

export default function SectionHeader({ eyebrow, title, description, align = 'center', light = false }) {
  return (
    <Stagger className={`section-head section-head-${align}`} gap={0.12}>
      {eyebrow && <StaggerItem><Badge light={light}>{eyebrow}</Badge></StaggerItem>}
      {title && <StaggerItem as="h2">{title}</StaggerItem>}
      {description && <StaggerItem as="p">{description}</StaggerItem>}
    </Stagger>
  )
}
