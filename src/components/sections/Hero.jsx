import { motion } from 'framer-motion'
import { hero } from '../../content.js'
import heroPhoto from '../../assets/sesionbi-44.JPG'
import albumCover from '../../assets/artetapa.jpeg'

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
      className="relative flex min-h-[92vh] items-start overflow-hidden bg-brown-dark"
    >
      <img
        src={heroPhoto}
        alt="Los integrantes de BI en el bosque"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="relative mx-auto w-full max-w-6xl px-6 pt-20 md:px-10 md:pt-24"
      >
        <div className="max-w-[18rem] sm:max-w-[23rem]">
          <motion.p
            variants={item}
            className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-ochre-light [text-shadow:0_2px_8px_rgb(0_0_0_/_70%)]"
          >
            {hero.eyebrow}
          </motion.p>
          <motion.h1
            variants={item}
            className="mt-1 font-serif text-2xl font-medium leading-[1.1] text-cream [text-shadow:0_2px_12px_rgb(0_0_0_/_70%)] sm:text-3xl"
          >
            {hero.headline}
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-2 max-w-[15rem] text-sm text-cream/90 [text-shadow:0_2px_8px_rgb(0_0_0_/_70%)] sm:max-w-[18rem]"
          >
            {hero.subhead}
          </motion.p>
          <motion.img
            variants={item}
            src={albumCover}
            alt={hero.coverAlt}
            loading="eager"
            className="mt-3 h-36 w-36 rounded-xl object-cover shadow-xl shadow-brown-dark/50 ring-1 ring-cream/20"
          />
        </div>
      </motion.div>
    </section>
  )
}
