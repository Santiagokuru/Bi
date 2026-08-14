export default function SpotifyIcon({ className = 'h-5 w-5' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9.2" />
      <path d="M7 10.2c3.2-1 7-0.7 9.6 0.9" />
      <path d="M7.6 13.2c2.6-0.8 5.6-0.5 7.7 0.8" />
      <path d="M8.3 16c2-0.6 4.2-0.4 5.8 0.6" />
    </svg>
  )
}
