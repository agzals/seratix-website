import { useEffect, useRef, useState } from 'react'

/**
 * Tombol musik. Letakkan file lagu (berlisensi) di public/music/wedding.mp3
 * Jika file tidak ada, tombol otomatis disembunyikan.
 */
export default function MusicButton({ start }) {
  const audio = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [available, setAvailable] = useState(true)

  useEffect(() => {
    if (!start || !audio.current) return
    audio.current
      .play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false))
  }, [start])

  const toggle = () => {
    const a = audio.current
    if (!a) return
    if (a.paused)
      a.play()
        .then(() => setPlaying(true))
        .catch(() => {})
    else {
      a.pause()
      setPlaying(false)
    }
  }

  return (
    <>
      <audio
        ref={audio}
        src="/music/Christina Perri - A Thousand Years Official Music Video.mp3"
        loop
        preload="none"
        onError={() => setAvailable(false)}
      />
      {start && available && (
        <button
          type="button"
          className={`wd-music ${playing ? 'is-playing' : ''}`}
          onClick={toggle}
          aria-label={playing ? 'Matikan musik' : 'Putar musik'}
        >
          {playing ? '♫' : '♪'}
        </button>
      )}
    </>
  )
}
