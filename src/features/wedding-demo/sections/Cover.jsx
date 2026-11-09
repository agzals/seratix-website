import { AnimatePresence, motion } from 'motion/react'
import Ornament from '../Ornament'
import { WEDDING } from '../data'

const ease = [0.22, 1, 0.36, 1]

export default function Cover({ open, guest, onOpen }) {
  return (
    <AnimatePresence>
      {!open && (
        <motion.section
          className="wd-cover"
          exit={{ y: '-100%', transition: { duration: 1.1, ease } }}
        >
          <div className="wd-cover-inner">
            <motion.p className="wd-eyebrow" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}>
              The Wedding of
            </motion.p>
            <motion.h1 className="wd-script wd-cover-names" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 1.2, ease }}>
              {WEDDING.groom.nick} <span>&amp;</span> {WEDDING.bride.nick}
            </motion.h1>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.8 }}>
              <Ornament />
              <p className="wd-cover-date">{WEDDING.dateLabel}</p>
            </motion.div>

            <motion.div className="wd-guest" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.8 }}>
              <p>Kepada Yth. Bapak/Ibu/Saudara/i</p>
              <p className="wd-guest-name">{guest}</p>
              <p className="wd-guest-note">Mohon maaf apabila ada kesalahan penulisan nama/gelar</p>
            </motion.div>

            <motion.button
              type="button"
              className="wd-btn"
              onClick={onOpen}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              ✉ Buka Undangan
            </motion.button>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}
