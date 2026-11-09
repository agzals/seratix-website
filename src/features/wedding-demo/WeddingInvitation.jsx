import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Petals from './Petals'
import MusicButton from './MusicButton'
import Cover from './sections/Cover'
import Hero from './sections/Hero'
import Quote from './sections/Quote'
import Couple from './sections/Couple'
import Countdown from './sections/Countdown'
import Events from './sections/Events'
import Story from './sections/Story'
import Gallery from './sections/Gallery'
import Rsvp from './sections/Rsvp'
import Gift from './sections/Gift'
import Closing from './sections/Closing'
import './wedding.css'

export default function WeddingInvitation() {
  const [params] = useSearchParams()
  // Nama tamu dari link, mis. /demo/wedding?to=Budi+Santoso
  const guest = (params.get('to') || 'Tamu Undangan').slice(0, 60)
  const [open, setOpen] = useState(false)

  // Kunci scroll sebelum undangan dibuka
  useEffect(() => {
    document.body.style.overflow = open ? '' : 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <div className="wd">
      <Cover open={open} guest={guest} onOpen={() => setOpen(true)} />
      {/* Konten dirender setelah undangan dibuka agar animasi hero diputar saat terlihat */}
      {open && <Petals />}
      {open && (
      <main className="wd-main">
        <Hero />
        <Quote />
        <Couple />
        <Countdown />
        <Events />
        <Story />
        <Gallery />
        <Rsvp guest={guest} />
        <Gift />
        <Closing />
        <footer className="wd-footer">
          Demo undangan oleh <a href="/">Seratix</a> · Data pada halaman ini fiktif
        </footer>
      </main>
      )}
      <MusicButton start={open} />
    </div>
  )
}
