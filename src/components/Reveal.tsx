import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

const ease = [0.23, 1, 0.32, 1] as const

type Direction = 'up' | 'left' | 'right' | 'scale' | 'none'

interface RevealProps {
  children: ReactNode
  direction?: Direction
  delay?: number
  duration?: number
  amount?: number
  className?: string
  as?: 'div' | 'section'
}

const variantsByDirection: Record<Direction, Variants> = {
  up: { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -24 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 24 }, visible: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.94 }, visible: { opacity: 1, scale: 1 } },
  none: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
}

// Reusable scroll-reveal wrapper — keeps entrance motion consistent in *character*
// (same easing curve, same family of movement) while letting each section vary
// direction/duration so nothing feels like a copy-pasted animation.
export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  amount = 0.3,
  className,
  as = 'div',
}: RevealProps) {
  const MotionTag = as === 'section' ? motion.section : motion.div
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={variantsByDirection[direction]}
      transition={{ duration, delay, ease }}
    >
      {children}
    </MotionTag>
  )
}
