import Section from '../layout/Section.jsx'
import RevealOnScroll from '../ui/RevealOnScroll.jsx'
import { timeline } from '../../content.js'

export default function Timeline() {
  return (
    <Section id="trayectoria" headingId="trayectoria-heading" bg="cream">
      <RevealOnScroll>
        <h2
          id="trayectoria-heading"
          className="font-serif text-3xl font-medium text-ink md:text-4xl"
        >
          {timeline.heading}
        </h2>
        <p className="mt-3 max-w-xl text-lg text-ink-soft">
          {timeline.intro}
        </p>
      </RevealOnScroll>

      <ol className="relative mt-14 flex flex-col gap-10 border-l-2 border-ochre/40 pl-8 md:border-l md:pl-0">
        {timeline.items.map((entry, index) => (
          <RevealOnScroll
            key={entry.title}
            as="li"
            delay={0.08 * index}
            className="relative md:grid md:grid-cols-[10rem_1fr] md:items-start md:gap-8 md:border-l-2 md:border-ochre/40 md:pl-8"
          >
            <span
              aria-hidden="true"
              className="absolute -left-[2.55rem] top-1 h-3 w-3 rounded-full bg-terracotta ring-4 ring-cream md:-left-[0.55rem]"
            />
            <span className="font-sans text-sm font-semibold uppercase tracking-wide text-terracotta-dark">
              {entry.date}
            </span>
            <div className="mt-1 md:mt-0">
              <h3 className="font-serif text-xl text-ink">{entry.title}</h3>
              <p className="mt-1 text-ink-soft">{entry.description}</p>
            </div>
          </RevealOnScroll>
        ))}
      </ol>
    </Section>
  )
}
