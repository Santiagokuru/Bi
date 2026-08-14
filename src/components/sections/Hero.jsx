import { motion } from 'framer-motion'
import Button from '../ui/Button.jsx'
import { hero } from '../../content.js'
import heroPhoto from '../../assets/bi2.png'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden bg-brown-dark"
    >
      <img
        src={heroPhoto}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-brown-dark/40 mix-blend-multiply"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-brown-dark via-brown-dark/55 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-brown-dark/95 via-brown-dark/35 to-transparent"
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="relative mx-auto max-w-6xl px-6 py-32 md:px-10"
      >
        <motion.p
          variants={item}
          className="font-sans text-sm font-semibold uppercase tracking-[0.2em] text-ochre-light"
        >
          {hero.eyebrow}
        </motion.p>
        <motion.h1
          variants={item}
          className="mt-6 max-w-3xl font-serif text-4xl font-medium leading-[1.1] text-cream sm:text-5xl md:text-6xl"
        >
          {hero.headline}
        </motion.h1>
        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-lg text-cream/80 md:text-xl"
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
