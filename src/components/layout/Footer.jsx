import Badge from '../ui/Badge.jsx'
import Button from '../ui/Button.jsx'
import InstagramIcon from '../ui/icons/InstagramIcon.jsx'
import SpotifyIcon from '../ui/icons/SpotifyIcon.jsx'
import WhatsAppIcon from '../ui/icons/WhatsAppIcon.jsx'
import { site, social, contact } from '../../content.js'

export default function Footer() {
  return (
    <footer
      id="contacto"
      aria-labelledby="contacto-heading"
      className="bg-brown text-cream"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="flex items-start gap-4">
            <Badge />
            <div>
              <h2
                id="contacto-heading"
                className="font-serif text-2xl font-medium"
              >
                {contact.heading}
              </h2>
              <p className="mt-1 max-w-xs text-sm text-cream/70">
                {contact.intro}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button
              href={social.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              aria-label="Abrir WhatsApp para contactar a BI"
            >
              <WhatsAppIcon className="h-5 w-5" />
              {social.whatsapp.label}
            </Button>

            <div className="flex items-center gap-3">
              <a
                href={social.instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir Instagram de BI"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 text-cream transition-colors hover:border-ochre hover:text-ochre focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ochre focus-visible:ring-offset-2 focus-visible:ring-offset-brown"
              >
                <InstagramIcon />
              </a>
              <a
                href={social.spotify.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir Spotify de BI"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 text-cream transition-colors hover:border-ochre hover:text-ochre focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ochre focus-visible:ring-offset-2 focus-visible:ring-offset-brown"
              >
                <SpotifyIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-cream/15 pt-6 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {site.name}. Todos los derechos
            reservados.
          </span>
          <span>{social.instagram.handle}</span>
        </div>
      </div>
    </footer>
  )
}
