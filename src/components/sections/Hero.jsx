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

function Divider() {
  return (
    <div className="mx-auto flex max-w-xs items-center gap-3">
      <span className="h-px flex-1 bg-ink/20" />
      <span className="h-2 w-2 rotate-45 border border-ink/30" />
      <span className="h-px flex-1 bg-ink/20" />
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-brown-dark">
      {/* Escritorio (lg+): foto de fondo con texto superpuesto */}
      <div className="hidden lg:block">
        <div className="relative mb-8 mt-8 overflow-hidden bg-brown-dark lg:mb-0 lg:mt-0 lg:flex lg:min-h-[92vh] lg:items-start">
          <img
            src={albumCover}
            alt={hero.coverAlt}
            className="aspect-[4/5] w-full object-cover lg:hidden"
            loading="eager"
          />
          <img
            src={heroPhoto}
            alt="Los integrantes de BI en el bosque"
            className="absolute inset-0 hidden h-full w-full object-cover lg:block"
            loading="eager"
          />

          <motion.div
            initial="hidden"
            animate="visible"
            variants={container}
            className="relative w-full max-w-6xl bg-cream px-6 py-8 lg:bg-transparent lg:px-10 lg:py-0 lg:pt-24"
          >
            <div className="max-w-[18rem] sm:max-w-[23rem]">
              <motion.p
                variants={item}
                className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-terracotta-dark lg:text-ochre-light lg:[text-shadow:0_2px_8px_rgb(0_0_0_/_70%)]"
              >
                {hero.eyebrow}
              </motion.p>
              <motion.h1
                variants={item}
                className="mt-1 font-serif text-2xl font-medium leading-[1.1] text-ink lg:text-cream lg:[text-shadow:0_2px_12px_rgb(0_0_0_/_70%)]"
              >
                {hero.headline}
              </motion.h1>
              <motion.p
                variants={item}
                className="mt-2 max-w-[15rem] text-sm text-ink-soft lg:text-cream/90 lg:[text-shadow:0_2px_8px_rgb(0_0_0_/_70%)]"
              >
                {hero.subhead}
              </motion.p>
              <motion.img
                variants={item}
                src={albumCover}
                alt={hero.coverAlt}
                loading="eager"
                className="mt-3 hidden h-36 w-36 rounded-xl object-cover shadow-xl shadow-brown-dark/50 ring-1 ring-cream/20 lg:block"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* <lg (hasta 1023px): foto contenida + divisor + tarjeta con tapa de álbum */}
      <div className="bg-cream px-6 pb-8 pt-8 md:px-10 md:pb-16 lg:hidden">
        <img
          src={heroPhoto}
          alt="Los integrantes de BI en el bosque"
          className="aspect-[4/3] w-full rounded-3xl object-cover md:mt-8"
          loading="eager"
        />

        <div className="my-10">
          <Divider />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="grid grid-cols-1 items-start gap-8 sm:grid-cols-2"
        >
          <div>
            <motion.span
              variants={item}
              className="inline-flex rounded-full bg-brown px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-ochre-light"
            >
              {hero.eyebrow}
            </motion.span>
            <motion.h1
              variants={item}
              className="mt-4 font-serif text-2xl font-medium leading-[1.1] text-ink md:text-3xl"
            >
              {hero.headline}
            </motion.h1>
            <motion.p variants={item} className="mt-4 text-sm leading-relaxed text-ink-soft">
              {hero.subhead}
            </motion.p>
          </div>
          <motion.img
            variants={item}
            src={albumCover}
            alt={hero.coverAlt}
            loading="lazy"
            className="w-full object-contain"
          />
        </motion.div>
      </div>
    </section>
  )
}
