import useLazyIframe from '../../hooks/useLazyIframe.js'

export default function YouTubeEmbed({ id, title }) {
  const { containerRef, shouldLoad } = useLazyIframe()

  return (
    <div
      ref={containerRef}
      className="aspect-video overflow-hidden rounded-2xl bg-paper shadow-sm shadow-brown/10"
    >
      {shouldLoad ? (
        <iframe
          title={`Video de YouTube: ${title}`}
          src={`https://www.youtube.com/embed/${id}`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div className="flex h-full items-center justify-center px-6 text-sm text-ink-soft">
          {title}
        </div>
      )}
    </div>
  )
}
