import Section from '../layout/Section.jsx'
import RevealOnScroll from '../ui/RevealOnScroll.jsx'
import YouTubeEmbed from './YouTubeEmbed.jsx'
import { audiovisual } from '../../content.js'

const epCovers = import.meta.glob('../../assets/tapas ep/*.webp', {
  eager: true,
  import: 'default',
})

function getEpCover(file) {
  const entry = Object.entries(epCovers).find(([path]) => path.endsWith(`/${file}`))
  return entry?.[1]
}

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

      <div className="mt-12">
        <RevealOnScroll>
          <h3 className="font-serif text-2xl font-medium text-ink">
            {audiovisual.music.heading}
          </h3>
        </RevealOnScroll>

        <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {audiovisual.music.eps.map((ep, index) => (
            <RevealOnScroll key={ep.title} delay={0.08 * index}>
              <a
                href={ep.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-2xl bg-paper shadow-sm shadow-brown/10 transition-transform hover:scale-[1.02]"
              >
                <img
                  src={getEpCover(ep.file)}
                  alt={`Tapa del EP "${ep.title}" de BI`}
                  className="aspect-square w-full object-cover"
                />
                <span className="block px-3 py-2 text-center text-sm font-medium text-ink-soft transition-colors group-hover:text-ink">
                  {ep.title}
                </span>
              </a>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <RevealOnScroll>
          <h3 className="font-serif text-2xl font-medium text-ink">
            {audiovisual.videos.heading}
          </h3>
        </RevealOnScroll>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {audiovisual.videos.items.map((video, index) => (
            <RevealOnScroll key={video.id} delay={0.08 * index}>
              <YouTubeEmbed {...video} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </Section>
  )
}
