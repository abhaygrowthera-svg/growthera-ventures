import { motion, useReducedMotion } from 'framer-motion'
import {
  Award,
  FileCheck2,
  Landmark,
  Rocket,
  Scale,
  ShieldCheck,
  Star,
  Zap,
} from 'lucide-react'
import { ICON_STROKE } from '@/lib/icons'

const badges = [
  { icon: Landmark, label: 'Government Scheme Assistance' },
  { icon: ShieldCheck, label: 'Compliance Ready' },
  { icon: FileCheck2, label: 'Documentation Support' },
  { icon: Rocket, label: 'Startup Launchpad' },
  { icon: Scale, label: 'Legal Advisory' },
  { icon: Award, label: 'MSME Focused' },
  { icon: Star, label: 'ISO Support' },
  { icon: Zap, label: 'Digital Transformation' },
]

export function MarqueeBand() {
  const reduce = useReducedMotion()

  const items = [...badges, ...badges] // Duplicate for seamless loop

  return (
    <section className="relative overflow-hidden border-y border-border/40 bg-white py-5">
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent" />

      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={reduce ? {} : { x: ['0%', '-50%'] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 35,
            ease: 'linear',
          },
        }}
      >
        {items.map((badge, i) => {
          const Icon = badge.icon
          return (
            <div
              key={`${badge.label}-${i}`}
              className="flex shrink-0 items-center gap-2.5 rounded-full border border-border/50 bg-surface-page px-5 py-2.5 transition-all duration-300 hover:border-purple/30 hover:bg-purple-soft/40 hover:shadow-soft"
            >
              <Icon
                strokeWidth={ICON_STROKE}
                className="h-4 w-4 text-purple"
              />
              <span className="font-heading text-xs font-semibold uppercase tracking-wider text-navy/70">
                {badge.label}
              </span>
            </div>
          )
        })}
      </motion.div>
    </section>
  )
}

