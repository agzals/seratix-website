import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Button } from '@/components/ui'
import { SERVICE_CATEGORIES } from '@/content/services'
import { buildConsultationMessage, waLink } from '@/lib/whatsapp'

const OPTIONS = [...SERVICE_CATEGORIES.flatMap((c) => c.items.map((i) => i.name)), 'Lainnya']
const INITIAL = { nama: '', kontak: '', layanan: OPTIONS[0], pesan: '' }

export default function ContactForm() {
  const [form, setForm] = useState(INITIAL)
  const [error, setError] = useState('')
  const [shake, setShake] = useState(0)

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    if (!form.nama.trim() || !form.kontak.trim()) {
      setError('Nama dan kontak wajib diisi.')
      setShake((n) => n + 1)
      return
    }
    setError('')
    // MVP: dikirim lewat WhatsApp. Ganti ke API/email di sini bila diperlukan.
    window.open(waLink(buildConsultationMessage(form)), '_blank', 'noopener')
  }

  return (
    <motion.form
      key={shake}
      className="form"
      onSubmit={submit}
      noValidate
      animate={shake ? { x: [0, -10, 10, -6, 6, 0] } : undefined}
      transition={{ duration: 0.4 }}
    >
      <label>Nama<input name="nama" value={form.nama} onChange={update} placeholder="Nama Anda" autoComplete="name" /></label>
      <label>No. WhatsApp / Email<input name="kontak" value={form.kontak} onChange={update} placeholder="08xx / email@domain.com" /></label>
      <label>
        Layanan
        <select name="layanan" value={form.layanan} onChange={update}>
          {OPTIONS.map((o) => <option key={o}>{o}</option>)}
        </select>
      </label>
      <label>Kebutuhan<textarea name="pesan" rows="4" value={form.pesan} onChange={update} placeholder="Ceritakan singkat kebutuhan Anda" /></label>
      <AnimatePresence>
        {error && (
          <motion.p className="form-error" role="alert" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
            {error}
          </motion.p>
        )}
      </AnimatePresence>
      <Button type="submit" block>Kirim via WhatsApp</Button>
    </motion.form>
  )
}
