import { TiltCard } from '@/components/motion'

export default function FeatureCard({ icon, title, text }) {
  return (
    <TiltCard className="card">
      <span className="card-spot" aria-hidden="true" />
      {icon && <div className="card-icon" aria-hidden="true">{icon}</div>}
      <h4>{title}</h4>
      <p>{text}</p>
    </TiltCard>
  )
}
