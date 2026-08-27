import Section from '../layout/Section.jsx'
import RevealOnScroll from '../ui/RevealOnScroll.jsx'
import integrantes from '../../assets/image00002.jpeg'
import { band } from '../../content.js'

export default function Band() {
  return (
    <Section id="shows" headingId="shows-heading" bg="paper">
      <RevealOnScroll>
        <h2
          id="shows-heading"
          className="font-serif text-3xl font-medium text-ink md:text-4xl"
        >
          {band.heading}
        </h2>
        <p className="mt-3 max-w-xl text-lg text-ink-soft">{band.intro}</p>
      </RevealOnScroll>

      <div className="mt-12 grid gap-12 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:items-start md:gap-16">
        <RevealOnScroll className="md:sticky md:top-28">
          <img
            src={integrantes}
            alt={band.photoAlt}
            loading="lazy"
            className="w-full rounded-3xl object-cover shadow-lg shadow-brown/10"
          />
        </RevealOnScroll>

        <ol className="relative flex flex-col gap-8 border-l-2 border-ochre/40 pl-8">
          {band.shows.map((show, index) => (
            <RevealOnScroll
              key={`${show.date}-${show.place}`}
              as="li"
              delay={(index % 5) * 0.05}
              className={`relative ${
                show.ticketUrl
                  ? 'rounded-2xl bg-terracotta/5 p-4 -m-4 ring-1 ring-terracotta/15'
                  : ''
              }`}
            >
              <span
                aria-hidden="true"
                className={`absolute -left-[2.55rem] top-1 h-3 w-3 rounded-full ring-4 ring-paper ${
                  show.ticketUrl ? 'bg-terracotta ring-offset-0 animate-pulse' : 'bg-terracotta'
                }`}
              />
              <span className="font-sans text-sm font-semibold uppercase tracking-wide text-terracotta-dark">
                {show.date}
              </span>
              <p className="mt-1 font-serif text-xl text-ink">{show.place}</p>
              {show.ticketUrl && (
                <a
                  href={show.ticketUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-terracotta px-4 py-1.5 font-sans text-sm font-semibold uppercase tracking-wide text-paper transition hover:bg-terracotta-dark"
                >
                  Comprar entradas
                  <span aria-hidden="true">→</span>
                </a>
              )}
            </RevealOnScroll>
          ))}
        </ol>
      </div>
    </Section>
  )
}
