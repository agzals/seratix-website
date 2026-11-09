// Pengaturan animasi terpusat. Ubah di sini untuk mempercepat/memperlambat semua animasi.
export const EASE = [0.22, 1, 0.36, 1]

export const DURATION = { fast: 0.3, base: 0.6, slow: 0.9 }

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: DURATION.base, ease: EASE } },
}

export const stagger = (gap = 0.1, delay = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: gap, delayChildren: delay } },
})

export const pageTransition = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.25, ease: EASE } },
}

// ================================================================
// RESPECT_REDUCED_MOTION
// false = animasi SELALU jalan, walaupun "Animation effects" di Windows /
//         "Reduce motion" di HP pengunjung dimatikan.
// true  = animasi dimatikan untuk pengunjung yang mengaktifkan reduce motion
//         (lebih ramah aksesibilitas).
// ================================================================
export const RESPECT_REDUCED_MOTION = false
