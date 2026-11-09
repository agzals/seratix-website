import { motion } from 'motion/react'
import Seo from '@/components/common/Seo'
import { Button, Container } from '@/components/ui'

export default function NotFoundPage() {
  return (
    <section className="not-found">
      <Seo title="Halaman Tidak Ditemukan" />
      <Container>
        <motion.p className="nf-code" animate={{ y: [0, -12, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
          404
        </motion.p>
        <h1>Halaman tidak ditemukan</h1>
        <p className="lead">Halaman yang Anda cari tidak tersedia atau sudah dipindahkan.</p>
        <Button to="/">Kembali ke Beranda</Button>
      </Container>
    </section>
  )
}
