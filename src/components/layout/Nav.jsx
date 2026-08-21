import { useEffect, useState } from 'react'
import Badge from '../ui/Badge.jsx'
import Button from '../ui/Button.jsx'
import { nav, hero } from '../../content.js'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled ? 'bg-paper/95 shadow-sm backdrop-blur' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 md:px-10">
        <a
          href="#top"
          className="flex items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
        >
          <Badge size="sm" />
        </a>

        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-8 md:flex"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`font-sans text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-cream rounded ${
                scrolled
                  ? 'text-ink-soft hover:text-terracotta-dark'
                  : 'text-cream/85 hover:text-cream'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button href={hero.ctaHref} variant="primary" className="md:hidden">
          {hero.ctaLabel}
        </Button>
        <Button
          href={hero.ctaHref}
          variant={scrolled ? 'ghost' : 'outlineLight'}
          className="hidden md:inline-flex"
        >
          {hero.ctaLabel}
        </Button>
      </div>
    </header>
  )
}
