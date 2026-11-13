import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { Section, SectionHeading } from '@/components/shared/Section'
import { Reveal } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'
import { engagementProcess } from '@/data/approach'
import { ArrowRight } from 'lucide-react'
import { ICON_STROKE } from '@/lib/icons'

export function EngagementProcess() {
  const reduce = useReducedMotion()

  return (
    <Section id="engagement" tone="page">
      <Reveal>
        <SectionHeading
          label={engagementProcess.label}
          title={engagementProcess.heading}
          tagline={engagementProcess.tagline}
          align="center"
        />
      </Reveal>

      {/* Desktop horizontal timeline */}
      <div className="mt-14 hidden lg:grid lg:grid-cols-5 lg:gap-4">
        {engagementProcess.steps.map((step, index) => (
          <motion.div
            key={step.number}
            className="relative"
            initial={reduce ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Animated connector line */}
            {index < engagementProcess.steps.length - 1 && (
              <motion.div
                className="absolute left-[calc(50%+28px)] top-6 h-px w-[calc(100%-56px)] origin-left bg-gradient-to-r from-purple to-purple-light"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.15 }}
                aria-hidden="true"
              />
            )}
            <div className="group flex flex-col items-center text-center">
              <motion.div
                whileHover={reduce ? {} : { scale: 1.15 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-navy to-navy-soft font-heading text-sm font-bold text-white shadow-md transition-shadow duration-300 group-hover:shadow-lg"
              >
                {step.number}
              </motion.div>
              <h3 className="mt-4 font-heading text-xs font-extrabold uppercase tracking-[0.14em] text-navy transition-colors group-hover:text-purple">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/65">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile / tablet stacked timeline */}
      <ol className="mt-10 space-y-4 lg:hidden">
        {engagementProcess.steps.map((step, index) => (
          <motion.li
            key={step.number}
            className="group flex gap-4 rounded-2xl bg-white p-4 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
            initial={reduce ? false : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-navy to-navy-soft font-heading text-xs font-bold text-white shadow-sm">
              {step.number}
            </div>
            <div>
              <h3 className="font-heading text-xs font-extrabold uppercase tracking-[0.14em] text-navy">
                {step.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-navy/65">{step.description}</p>
            </div>
          </motion.li>
        ))}
      </ol>

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
