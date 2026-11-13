import { motion, useReducedMotion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { Section, SectionHeading } from '@/components/shared/Section'
import { StrengthMatrixPanel } from '@/components/shared/VisualPanels'
import { Reveal, Stagger, StaggerItem } from '@/components/shared/Reveal'
import { Callout } from '@/components/shared/Callout'
import { company, whyChoose } from '@/data/company'
import { ICON_STROKE } from '@/lib/icons'

export function WhyChoose() {
  const reduce = useReducedMotion()

  return (
    <Section id="why-choose" tone="white">
      <div className="grid items-center gap-12 lg:grid-cols-12">
        <div className="order-2 lg:order-1 lg:col-span-5">
          <Reveal>
            <StrengthMatrixPanel />
          </Reveal>
        </div>

        <div className="order-1 lg:order-2 lg:col-span-7">
          <Reveal>
            <SectionHeading
              label="Why Choose Growthera"
              title={whyChoose.heading}
              tagline="Clear deliverables. Responsible coordination. No unverified claims."
            />
          </Reveal>

          <Stagger className="mt-8 grid gap-3 sm:grid-cols-2">
            {whyChoose.strengths.map((item) => (
              <StaggerItem key={item}>
                <motion.div
                  whileHover={reduce ? {} : { y: -3, scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="group flex items-start gap-3 rounded-xl bg-surface-page px-4 py-3.5 shadow-soft transition-all duration-300 hover:bg-white hover:shadow-card"
                >
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple text-white transition-all duration-300 group-hover:bg-gold group-hover:shadow-sm">
                    <CheckCircle2
                      strokeWidth={ICON_STROKE}
                      className="h-3.5 w-3.5"
                    />
                  </div>
                  <p className="text-sm font-medium leading-relaxed text-navy/85">{item}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.15} className="mt-8">
            <Callout title="Our commitment">{company.commitment}</Callout>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
