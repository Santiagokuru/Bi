const BG_VARIANTS = {
  cream: 'bg-cream',
  paper: 'bg-paper',
  brown: 'bg-brown text-cream',
}

export default function Section({
  id,
  headingId,
  bg = 'cream',
  className = '',
  children,
}) {
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`${BG_VARIANTS[bg]} py-16 md:py-24 lg:py-32 ${className}`}
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">{children}</div>
    </section>
  )
}
