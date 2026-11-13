import { motion, useReducedMotion } from 'framer-motion'
import { Section, SectionHeading } from '@/components/shared/Section'
import { Reveal } from '@/components/shared/Reveal'
import {
  HeartHandshake,
  Target,
  Clock,
  FileText,
  ArrowRight,
} from 'lucide-react'
import { ICON_STROKE } from '@/lib/icons'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const principles = [
  {
    icon: HeartHandshake,
    title: 'Relationship-First Approach',
    description:
      'Every engagement begins with understanding your unique situation — not a one-size-fits-all pitch.',
    gradient: 'from-purple to-purple-deep',
  },
  {
    icon: Target,
    title: 'Scoped, Not Open-Ended',
    description:
      'Clear deliverables, defined timelines, and transparent responsibilities before any work begins.',
    gradient: 'from-navy to-navy-soft',
  },
  {
    icon: Clock,
    title: 'Progress You Can Track',
    description:
      'Structured milestones and regular communication so you always know where things stand.',
    gradient: 'from-purple-deep to-navy',
  },
  {
    icon: FileText,
    title: 'Document-Backed Delivery',
    description:
      'Every process we support comes with proper documentation — ready for audits, filings, or investors.',
    gradient: 'from-navy-soft to-purple',
  },
]

export function TrustPrinciples() {
  const reduce = useReducedMotion()

  return (
    <Section tone="white" id="trust-principles">
      <Reveal>
        <SectionHeading
          label="How We Work"
          title="Principles That Guide Every Engagement"
          tagline="Transparent practices. Structured delivery. No shortcuts."
          align="center"
        />
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {principles.map((principle, index) => {
          const Icon = principle.icon
          return (
            <motion.div
              key={principle.title}
              initial={reduce ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="spotlight-card group rounded-2xl border border-border/60 bg-white p-7 shadow-soft transition-all duration-400 hover:-translate-y-1.5 hover:border-purple/25 hover:shadow-lift"
            >
              <div className="flex items-start gap-5">
                <div
                  className={`flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${principle.gradient} text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg`}
                >
                  <Icon strokeWidth={ICON_STROKE} className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold uppercase tracking-wide text-navy transition-colors group-hover:text-purple">
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/65">
                    {principle.description}
                  </p>
                </div>
              </div>

              {/* Animated accent bar */}
              <div className="mt-5 h-0.5 w-full overflow-hidden rounded-full bg-border/40">
                <motion.div
                  className={`h-full rounded-full bg-gradient-to-r ${principle.gradient}`}
                  initial={{ width: '0%' }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.3 + index * 0.1, ease: 'easeOut' }}
                />
              </div>
            </motion.div>
          )
        })}
      </div>

      <Reveal className="mt-12 text-center">
        <Button asChild>
          <Link to="/process">
            See Full Process
            <ArrowRight strokeWidth={ICON_STROKE} className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </Reveal>
    </Section>
  )
}

