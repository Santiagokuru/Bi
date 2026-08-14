import useLazyIframe from '../../hooks/useLazyIframe.js'

export default function SpotifyEmbed({ type, id, label }) {
  const { containerRef, shouldLoad } = useLazyIframe()
  const height = type === 'album' ? 352 : 152

  return (
    <div
      ref={containerRef}
      className="overflow-hidden rounded-2xl bg-paper shadow-sm shadow-brown/10"
      style={{ minHeight: height }}
    >
      {shouldLoad ? (
        <iframe
          title={`Reproductor de Spotify: ${label}`}
          src={`https://open.spotify.com/embed/${type}/${id}?theme=0`}
          width="100%"
          height={height}
          style={{ border: 0 }}
          loading="lazy"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        />
      ) : (
        <div
          className="flex items-center justify-center px-6 text-sm text-ink-soft"
          style={{ height }}
        >
          {label}
        </div>
      )}
    </div>
  )
}
