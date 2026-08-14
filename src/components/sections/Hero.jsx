import { motion, useReducedMotion } from 'framer-motion'
import Button from '../ui/Button.jsx'
import { hero } from '../../content.js'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden bg-cream"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(120%_100%_at_15%_10%,theme(colors.ochre.light)_0%,theme(colors.cream)_45%),linear-gradient(160deg,theme(colors.terracotta.light)_0%,theme(colors.cream)_55%)] opacity-80"
      />
      <motion.div
        aria-hidden="true"
        className="absolute -right-24 top-1/3 h-[28rem] w-[28rem] rounded-full bg-terracotta/25 blur-3xl"
        animate={
          shouldReduceMotion
            ? undefined
            : { y: [0, -24, 0], scale: [1, 1.05, 1] }
        }
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div
        aria-hidden="true"
        className="absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-ochre/30 blur-3xl"
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="relative mx-auto max-w-6xl px-6 py-32 md:px-10"
      >
        <motion.p
          variants={item}
          className="font-sans text-sm font-semibold uppercase tracking-[0.2em] text-terracotta-dark"
        >
          {hero.eyebrow}
        </motion.p>
        <motion.h1
          variants={item}
          className="mt-6 max-w-3xl font-serif text-4xl font-medium leading-[1.1] text-ink sm:text-5xl md:text-6xl"
        >
          {hero.headline}
        </motion.h1>
        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-lg text-ink-soft md:text-xl"
        >
          {hero.subhead}
        </motion.p>
        <motion.div variants={item} className="mt-10">
          <Button href={hero.ctaHref} variant="primary" className="text-base">
            {hero.ctaLabel}
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
