import Section from '../layout/Section.jsx'
import RevealOnScroll from '../ui/RevealOnScroll.jsx'
import SpotifyEmbed from './SpotifyEmbed.jsx'
import YouTubeEmbed from './YouTubeEmbed.jsx'
import { audiovisual } from '../../content.js'

export default function Audiovisual() {
  return (
    <Section id="audiovisual" headingId="audiovisual-heading" bg="paper">
      <RevealOnScroll>
        <h2
          id="audiovisual-heading"
          className="font-serif text-3xl font-medium text-ink md:text-4xl"
        >
          {audiovisual.heading}
        </h2>
        <p className="mt-3 max-w-xl text-lg text-ink-soft">
          {audiovisual.intro}
        </p>
      </RevealOnScroll>

      <RevealOnScroll className="mx-auto mt-12 max-w-lg">
        <SpotifyEmbed {...audiovisual.spotifyAlbum} />
      </RevealOnScroll>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {audiovisual.videos.map((video, index) => (
          <RevealOnScroll key={video.id} delay={0.08 * index}>
            <YouTubeEmbed {...video} />
          </RevealOnScroll>
        ))}
      </div>
    </Section>
  )
}
