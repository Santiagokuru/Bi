import Section from '../layout/Section.jsx'
import RevealOnScroll from '../ui/RevealOnScroll.jsx'
import SpotifyEmbed from './SpotifyEmbed.jsx'
import { spotify } from '../../content.js'

export default function SpotifyPlayer() {
  return (
    <Section id="musica" headingId="musica-heading" bg="paper">
      <RevealOnScroll>
        <h2
          id="musica-heading"
          className="font-serif text-3xl font-medium text-ink md:text-4xl"
        >
          {spotify.heading}
        </h2>
        <p className="mt-3 max-w-xl text-lg text-ink-soft">{spotify.intro}</p>
      </RevealOnScroll>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {spotify.tracks.map((track, index) => (
          <RevealOnScroll
            key={track.id}
            delay={0.08 * index}
            className={track.type === 'album' ? 'md:col-span-1' : ''}
          >
            <SpotifyEmbed {...track} />
          </RevealOnScroll>
        ))}
      </div>
    </Section>
  )
}
