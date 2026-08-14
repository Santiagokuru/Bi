import { motion, useReducedMotion } from 'framer-motion'

const VARIANTS = {
  primary:
    'bg-terracotta text-cream hover:bg-terracotta-dark shadow-md shadow-terracotta/20',
  ghost:
    'bg-transparent text-ink border border-ink/15 hover:border-terracotta hover:text-terracotta-dark',
  outlineLight:
    'bg-transparent text-cream border border-cream/40 hover:border-cream hover:bg-cream/10',
}

export default function Button({
  as: Tag = 'a',
  variant = 'primary',
  className = '',
  children,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion()
  const MotionTag = motion[Tag] ?? motion.a

  return (
    <MotionTag
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-sans font-semibold text-sm tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-cream ${VARIANTS[variant]} ${className}`}
      whileHover={shouldReduceMotion ? undefined : { scale: 1.03 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
      {...props}
    >
      {children}
    </MotionTag>
  )
}
