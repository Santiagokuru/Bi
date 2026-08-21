import Section from '../layout/Section.jsx'
import RevealOnScroll from '../ui/RevealOnScroll.jsx'
import bandPhoto from '../../assets/foto nosotros.jpg'
import { bio } from '../../content.js'

export default function Bio() {
  const [lead, ...rest] = bio.paragraphs

  return (
    <Section id="nosotros" headingId="nosotros-heading" bg="cream">
      <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
        <div className="order-2 md:order-1">
          <RevealOnScroll>
            <span className="font-sans text-sm font-semibold uppercase tracking-[0.2em] text-terracotta-dark">
              Quiénes somos
            </span>
            <h2
              id="nosotros-heading"
              className="mt-3 font-serif text-3xl font-medium text-ink md:text-4xl"
            >
              {bio.heading}
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <p className="mt-6 font-serif text-2xl leading-snug text-ink first-letter:text-4xl first-letter:font-medium first-letter:text-terracotta-dark md:text-[1.65rem]">
              {lead}
            </p>
          </RevealOnScroll>

          <div className="mt-6 flex flex-col gap-5">
            {rest.map((paragraph, index) => (
              <RevealOnScroll key={paragraph.slice(0, 24)} delay={0.2 + index * 0.1}>
                <p className="text-lg leading-relaxed text-ink-soft">
                  {paragraph}
                </p>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        <RevealOnScroll className="order-1 md:order-2" delay={0.1}>
          <img
            src={bandPhoto}
            alt="BI en vivo, los hermanos Ravasi junto a André Maurel e Ismael Avecilla"
            loading="lazy"
            className="aspect-[4/5] w-full rounded-3xl object-cover shadow-lg shadow-brown/10"
          />
        </RevealOnScroll>
      </div>
    </Section>
  )
}
