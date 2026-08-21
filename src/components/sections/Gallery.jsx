import { useEffect, useState } from 'react'
import Section from '../layout/Section.jsx'
import RevealOnScroll from '../ui/RevealOnScroll.jsx'
import { gallery } from '../../content.js'

import img609 from '../../assets/galeria/20250529_AthensJazz_ThodorisMarkou_THM00609_3000px.jpg'
import img191 from '../../assets/galeria/20250529_AthensJazz_ThodorisMarkou_THM00191_3000px.jpg'
import img212 from '../../assets/galeria/20250529_AthensJazz_ThodorisMarkou_THM00212_3000px.jpg'
import img221 from '../../assets/galeria/20250529_AthensJazz_ThodorisMarkou_THM00221_3000px.jpg'
import img247 from '../../assets/galeria/20250529_AthensJazz_ThodorisMarkou_THM00247_3000px.jpg'
import img259 from '../../assets/galeria/20250529_AthensJazz_ThodorisMarkou_THM00259_3000px.jpg'
import img304 from '../../assets/galeria/20250529_AthensJazz_ThodorisMarkou_THM00304_3000px.jpg'
import img315 from '../../assets/galeria/20250529_AthensJazz_ThodorisMarkou_THM00315_3000px.jpg'
import bi1 from '../../assets/galeria/BI 1.jpg'
import img00002 from '../../assets/galeria/image00002 - copia.jpeg'
import img00031 from '../../assets/galeria/image00031.jpeg'

import athenas1Video from '../../assets/galeria/Athenas 1.MP4'
import athenas1Poster from '../../assets/galeria/Athenas 1-poster.jpg'
import athenas2Video from '../../assets/galeria/Athenas 2.MP4'
import athenas2Poster from '../../assets/galeria/Athenas 2-poster.jpg'
import athenas4Video from '../../assets/galeria/Athenas 4.MP4'
import athenas4Poster from '../../assets/galeria/Athenas 4-poster.jpg'
import athens3Video from '../../assets/galeria/Athens 3.MP4'
import athens3Poster from '../../assets/galeria/Athens 3-poster.jpg'
import videoMain from '../../assets/galeria/Video.MP4'
import videoMainPoster from '../../assets/galeria/Video-poster.jpg'

const ATHENS_ALT = 'BI en vivo en el Athens Jazz Festival'

const items = [
  { type: 'image', src: img609, alt: ATHENS_ALT },
  { type: 'video', src: athenas1Video, poster: athenas1Poster, alt: 'Video de BI en vivo en Atenas' },
  { type: 'image', src: img191, alt: ATHENS_ALT },
  { type: 'video', src: athenas2Video, poster: athenas2Poster, alt: 'Video de BI en vivo en Atenas' },
  { type: 'image', src: img212, alt: ATHENS_ALT },
  { type: 'video', src: athenas4Video, poster: athenas4Poster, alt: 'Video de BI en vivo en Atenas' },
  { type: 'image', src: img221, alt: ATHENS_ALT },
  { type: 'video', src: athens3Video, poster: athens3Poster, alt: 'Video de BI en vivo en Atenas' },
  { type: 'image', src: img247, alt: ATHENS_ALT },
  { type: 'video', src: videoMain, poster: videoMainPoster, alt: 'Video de BI en vivo' },
  { type: 'image', src: img259, alt: ATHENS_ALT },
  { type: 'image', src: img304, alt: ATHENS_ALT },
  { type: 'image', src: img315, alt: ATHENS_ALT },
  { type: 'image', src: bi1, alt: 'BI en la calle' },
  { type: 'image', src: img00002, alt: 'BI en vivo' },
  { type: 'image', src: img00031, alt: 'BI en vivo' },
]

const INTERVAL_MS = 5000

function PlayIcon() {
  return (
    <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brown-dark/60 backdrop-blur-sm">
        <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-cream">
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
    </span>
  )
}

function GalleryModal({ item, onClose, onPrev, onNext }) {
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') onPrev()
      if (event.key === 'ArrowRight') onNext()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose, onPrev, onNext])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Imagen ampliada de la galería"
      className="fixed inset-0 z-50 flex items-center justify-center bg-brown-dark/90 p-4 md:p-10"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Cerrar"
        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ochre"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-cream">
          <path d="M6.4 5 5 6.4 10.6 12 5 17.6 6.4 19l5.6-5.6 5.6 5.6 1.4-1.4-5.6-5.6L19 6.4 17.6 5 12 10.6z" />
        </svg>
      </button>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation()
          onPrev()
        }}
        aria-label="Anterior"
        className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ochre md:left-6"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-cream">
          <path d="M15 5 8 12l7 7 1.4-1.4L10.8 12l5.6-5.6z" />
        </svg>
      </button>
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation()
          onNext()
        }}
        aria-label="Siguiente"
        className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ochre md:right-6"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-cream">
          <path d="M9 5 16 12l-7 7-1.4-1.4L13.2 12 7.6 6.4z" />
        </svg>
      </button>

      <div
        className="max-h-full max-w-full"
        onClick={(event) => event.stopPropagation()}
      >
        {item.type === 'video' ? (
          <video
            key={item.src}
            src={item.src}
            poster={item.poster}
            controls
            autoPlay
            className="max-h-[85vh] max-w-full rounded-lg"
          />
        ) : (
          <img
            src={item.src}
            alt={item.alt}
            className="max-h-[85vh] max-w-full rounded-lg object-contain"
          />
        )}
      </div>
    </div>
  )
}

export default function Gallery() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [openIndex, setOpenIndex] = useState(null)

  useEffect(() => {
    if (paused || openIndex !== null) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % items.length)
    }, INTERVAL_MS)
    return () => clearInterval(id)
  }, [paused, openIndex])

  const goPrev = () => setIndex((i) => (i - 1 + items.length) % items.length)
  const goNext = () => setIndex((i) => (i + 1) % items.length)

  const current = items[index]

  return (
    <Section id="galeria" headingId="galeria-heading" bg="cream">
      <RevealOnScroll>
        <h2
          id="galeria-heading"
          className="font-serif text-3xl font-medium text-ink md:text-4xl"
        >
          {gallery.heading}
        </h2>
        <p className="mt-3 max-w-xl text-lg text-ink-soft">{gallery.intro}</p>
      </RevealOnScroll>

      <div
        className="relative mt-12 overflow-hidden rounded-3xl bg-brown-dark shadow-lg shadow-brown/10"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <button
          type="button"
          onClick={() => setOpenIndex(index)}
          className="group relative block h-[min(80vh)] min-h-[220px] w-full"
          aria-label="Ampliar imagen"
        >
          <img
            key={index}
            src={current.type === 'video' ? current.poster : current.src}
            alt={current.alt}
            className="h-full w-full object-cover motion-safe:animate-fadeIn"
          />
          {current.type === 'video' && <PlayIcon />}
          <span className="absolute inset-0 bg-brown-dark/0 transition-colors group-hover:bg-brown-dark/10" />
        </button>

        <button
          type="button"
          onClick={goPrev}
          aria-label="Anterior"
          className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ochre"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-cream">
            <path d="M15 5 8 12l7 7 1.4-1.4L10.8 12l5.6-5.6z" />
          </svg>
        </button>
        <button
          type="button"
          onClick={goNext}
          aria-label="Siguiente"
          className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ochre"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-cream">
            <path d="M9 5 16 12l-7 7-1.4-1.4L13.2 12 7.6 6.4z" />
          </svg>
        </button>

        <div className="absolute bottom-3 right-4 rounded-full bg-brown-dark/60 px-3 py-1 text-xs font-medium text-cream/90 backdrop-blur-sm">
          {index + 1} / {items.length}
        </div>
      </div>

      {openIndex !== null && (
        <GalleryModal
          item={items[openIndex]}
          onClose={() => setOpenIndex(null)}
          onPrev={() => setOpenIndex((i) => (i - 1 + items.length) % items.length)}
          onNext={() => setOpenIndex((i) => (i + 1) % items.length)}
        />
      )}
    </Section>
  )
}
