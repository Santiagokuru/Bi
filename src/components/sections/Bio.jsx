import Section from '../layout/Section.jsx'
import RevealOnScroll from '../ui/RevealOnScroll.jsx'
import { bio } from '../../content.js'

export default function Bio() {
  return (
    <Section id="nosotros" headingId="nosotros-heading" bg="cream">
      <div className="grid gap-10 md:grid-cols-[minmax(0,0.6fr)_minmax(0,1fr)] md:gap-16">
        <RevealOnScroll>
          <h2
            id="nosotros-heading"
            className="font-serif text-3xl font-medium text-ink md:text-4xl"
          >
            {bio.heading}
          </h2>
        </RevealOnScroll>

        <div className="flex flex-col gap-6">
          {bio.paragraphs.map((paragraph, index) => (
            <RevealOnScroll key={paragraph.slice(0, 24)} delay={index * 0.1}>
              <p
                className={`text-lg leading-relaxed text-ink-soft ${
                  index === 0
                    ? 'first-letter:font-serif first-letter:text-4xl first-letter:font-medium first-letter:text-terracotta-dark'
                    : ''
                }`}
              >
                {paragraph}
              </p>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </Section>
  )
}
