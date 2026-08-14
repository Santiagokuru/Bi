import Section from '../layout/Section.jsx'
import RevealOnScroll from '../ui/RevealOnScroll.jsx'
import integrantes from '../../assets/integrantes.png'
import { band } from '../../content.js'

export default function Band() {
  return (
    <Section id="banda" headingId="banda-heading" bg="paper">
      <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
        <RevealOnScroll>
          <img
            src={integrantes}
            alt={band.photoAlt}
            loading="lazy"
            className="w-full rounded-3xl object-cover shadow-lg shadow-brown/10"
          />
        </RevealOnScroll>

        <div>
          <RevealOnScroll>
            <h2
              id="banda-heading"
              className="font-serif text-3xl font-medium text-ink md:text-4xl"
            >
              {band.heading}
            </h2>
            <p className="mt-3 text-lg text-ink-soft">{band.intro}</p>
          </RevealOnScroll>

          <ul className="mt-8 flex flex-col gap-4">
            {band.members.map((member, index) => (
              <RevealOnScroll
                key={member.name}
                delay={0.06 * index}
                as="li"
                className="flex items-center justify-between border-b border-ink/10 pb-4"
              >
                <span className="font-serif text-xl text-ink">
                  {member.name}
                </span>
                <span className="text-sm font-medium uppercase tracking-wide text-ochre-dark">
                  {member.role}
                </span>
              </RevealOnScroll>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
