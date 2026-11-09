import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import Reveal from '../Reveal'
import { WEDDING } from '../data'

const SEED = [
  { name: 'Dimas & Keluarga', status: 'Hadir', msg: 'Selamat menempuh hidup baru! Semoga menjadi keluarga sakinah, mawaddah, warahmah.' },
  { name: 'Ayu', status: 'Hadir', msg: 'Bahagia selalu untuk kalian berdua 🤍' },
]

export default function Rsvp({ guest }) {
  const [form, setForm] = useState({ name: guest === 'Tamu Undangan' ? '' : guest, status: 'Hadir', count: '1', msg: '' })
  const [wishes, setWishes] = useState(SEED)
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    if (!form.name.trim()) return setError('Nama wajib diisi.')
    if (form.msg.length > 300) return setError('Ucapan maksimal 300 karakter.')
    setError('')
    // Demo: ucapan hanya tersimpan di halaman. Versi klien bisa disambungkan ke database/Google Sheets.
    setWishes((w) => [{ name: form.name.trim(), status: form.status, msg: form.msg.trim() || 'Selamat berbahagia!' }, ...w])
    if (WEDDING.rsvpWhatsapp) {
      const text = `Konfirmasi kehadiran\nNama: ${form.name}\nStatus: ${form.status}\nJumlah: ${form.count}\nUcapan: ${form.msg || '-'}`
      window.open(`https://wa.me/${WEDDING.rsvpWhatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener')
    }
    setSent(true)
    setForm((f) => ({ ...f, msg: '' }))
  }

  return (
    <section className="wd-section">
      <Reveal>
        <p className="wd-eyebrow">RSVP &amp; Wishes</p>
        <h2 className="wd-title">Konfirmasi Kehadiran</h2>
        <p className="wd-intro">Merupakan suatu kehormatan apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.</p>
      </Reveal>

      <Reveal>
        <form className="wd-form" onSubmit={submit} noValidate>
          <label>Nama<input name="name" value={form.name} onChange={update} placeholder="Nama Anda" maxLength={60} /></label>
          <div className="wd-form-row">
            <label>Kehadiran
              <select name="status" value={form.status} onChange={update}>
                <option>Hadir</option><option>Tidak Hadir</option><option>Masih Ragu</option>
              </select>
            </label>
            <label>Jumlah
              <select name="count" value={form.count} onChange={update} disabled={form.status === 'Tidak Hadir'}>
                <option>1</option><option>2</option><option>3</option><option>4</option>
              </select>
            </label>
          </div>
          <label>Ucapan &amp; Doa<textarea name="msg" rows="3" value={form.msg} onChange={update} placeholder="Tulis ucapan untuk kedua mempelai" maxLength={300} /></label>
          {error && <p className="wd-error" role="alert">{error}</p>}
          <button type="submit" className="wd-btn">Kirim</button>
          <AnimatePresence>
            {sent && (
              <motion.p className="wd-success" role="status" initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                Terima kasih! Konfirmasi Anda telah kami terima 🤍
              </motion.p>
            )}
          </AnimatePresence>
        </form>
      </Reveal>

      <div className="wd-wishes" aria-live="polite">
        <AnimatePresence initial={false}>
          {wishes.map((w, i) => (
            <motion.div key={`${w.name}-${wishes.length - i}`} className="wd-wish" layout initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}>
              <p className="wd-wish-head"><b>{w.name}</b><span className={`wd-tag ${w.status === 'Hadir' ? 'yes' : ''}`}>{w.status}</span></p>
              <p>{w.msg}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  )
}
