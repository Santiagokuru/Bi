import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Section from '../layout/Section.jsx'
import RevealOnScroll from '../ui/RevealOnScroll.jsx'
import { press } from '../../content.js'

const GAP = 16
const INTERVAL_MS = 4500
const TRANSITION_MS = 700

function PressCard({ item, size, visible }) {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      style={{ width: size, height: Math.min(size, 370), flex: `0 0 ${size}px` }}
      className="flex flex-col overflow-hidden rounded-2xl bg-paper p-3 shadow-sm shadow-brown/10 transition-colors hover:bg-cream sm:p-6 md:p-8"
    >
      <span
        aria-hidden="true"
        className="font-serif text-xl leading-none text-ochre/40 sm:text-4xl md:text-6xl"
      >
        “
      </span>
      <p className="mt-1 line-clamp-2 font-serif text-xs italic leading-snug text-ink sm:mt-2 sm:line-clamp-4 sm:text-lg md:line-clamp-6 md:text-2xl">
        {item.quote}
      </p>
      <div className="mt-auto flex flex-col gap-1 pt-2 sm:pt-4">
        <span className="truncate text-xs font-medium uppercase tracking-wide text-terracotta-dark sm:text-sm">
          {item.source}
        </span>
        <span className="text-xs font-medium text-ochre-dark sm:text-sm">
          Leer nota completa →
        </span>
      </div>
    </a>
  )
}

export default function Press() {
  const n = press.items.length
  const slides = [...press.items, ...press.items]

  const wrapperRef = useRef(null)
  const [cardSize, setCardSize] = useState(0)
  const [index, setIndex] = useState(0)
  const [animated, setAnimated] = useState(true)
  const [paused, setPaused] = useState(false)

  useLayoutEffect(() => {
    const el = wrapperRef.current
    if (!el) return
    const update = () => setCardSize((el.clientWidth - GAP) / 2)
    update()
    const observer = new ResizeObserver(update)
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setIndex((i) => i + 1), INTERVAL_MS)
    return () => clearInterval(id)
  }, [paused])

  // once we've slid onto the cloned pair, snap back to the real one with no transition
  useEffect(() => {
    if (index !== n) return
    const id = setTimeout(() => {
      setAnimated(false)
      setIndex(0)
    }, TRANSITION_MS)
    return () => clearTimeout(id)
  }, [index, n])

  useEffect(() => {
    if (animated) return
    const id = requestAnimationFrame(() => setAnimated(true))
    return () => cancelAnimationFrame(id)
  }, [animated])

  const offset = index * (cardSize + GAP)

  return (
    <Section id="prensa" headingId="prensa-heading" bg="cream">
      <RevealOnScroll>
        <h2
          id="prensa-heading"
          className="font-serif text-3xl font-medium text-ink md:text-4xl"
        >
          {press.heading}
        </h2>
        <p className="mt-3 max-w-xl text-lg text-ink-soft">{press.intro}</p>
      </RevealOnScroll>

      <div
        ref={wrapperRef}
        className="mt-12 overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        {cardSize > 0 && (
          <div
            className={`flex motion-reduce:transition-none ${
              animated ? 'transition-transform duration-700 ease-in-out' : ''
            }`}
            style={{ gap: GAP, transform: `translateX(-${offset}px)` }}
          >
            {slides.map((item, i) => (
              <PressCard
                key={`${item.source}-${i}`}
                item={item}
                size={cardSize}
                visible={i === index || i === index + 1}
              />
            ))}
          </div>
        )}
      </div>
    </Section>
  )
}
