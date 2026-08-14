import logo from '../../assets/logo.jpg'

export default function Badge({ size = 'md', className = '' }) {
  const dimensions = size === 'sm' ? 'h-9 w-9' : 'h-11 w-11'

  return (
    <span
      className={`inline-flex ${dimensions} shrink-0 items-center justify-center overflow-hidden rounded-full bg-brown-dark shadow-sm ${className}`}
    >
      <img
        src={logo}
        alt="Logo de BI"
        className="h-full w-full object-cover"
      />
    </span>
  )
}
