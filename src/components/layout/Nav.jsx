import { useEffect, useState } from 'react'
import Badge from '../ui/Badge.jsx'
import Button from '../ui/Button.jsx'
import { nav, hero } from '../../content.js'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 bg-paper/95 shadow-sm backdrop-blur transition-colors duration-300 ${
        scrolled ? '' : 'lg:bg-transparent lg:shadow-none lg:backdrop-blur-none'
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
              className={`font-sans text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-cream rounded text-ink-soft hover:text-terracotta-dark ${
                scrolled ? '' : 'lg:text-cream/85 lg:hover:text-cream'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button
          href={hero.ctaHref}
          variant="ghost"
          className={`hidden md:inline-flex ${
            scrolled
              ? ''
              : 'lg:border-cream/40 lg:text-cream lg:hover:border-cream lg:hover:bg-cream/10 lg:hover:text-cream'
          }`}
        >
          {hero.ctaLabel}
        </Button>

        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          className="ml-2 flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-ink-soft transition-colors hover:text-terracotta-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-cream md:hidden"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="h-6 w-6"
            aria-hidden="true"
          >
            {mobileOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Navegación principal (mobile)"
        className={`border-t border-ink/10 bg-paper/95 px-6 py-4 md:hidden ${
          mobileOpen ? 'block' : 'hidden'
        }`}
      >
        <ul className="flex flex-col gap-1">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded px-2 py-2.5 font-sans text-sm font-medium text-ink-soft transition-colors hover:text-terracotta-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <Button
              href={hero.ctaHref}
              variant="primary"
              className="mt-2 w-full"
              onClick={() => setMobileOpen(false)}
            >
              {hero.ctaLabel}
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
