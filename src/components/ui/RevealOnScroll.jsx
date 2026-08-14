import { motion, useReducedMotion } from 'framer-motion'

export default function RevealOnScroll({
  children,
  className = '',
  delay = 0,
  as = 'div',
}) {
  const shouldReduceMotion = useReducedMotion()
  const MotionTag = motion[as] ?? motion.div

  const variants = shouldReduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.3, delay } },
      }
    : {
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
        },
      }

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={variants}
    >
      {children}
    </MotionTag>
  )
}
