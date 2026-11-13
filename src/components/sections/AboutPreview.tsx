import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import { Section, SectionHeading } from '@/components/shared/Section'
import { FocusRingPanel } from '@/components/shared/VisualPanels'
import { IllustrationCard } from '@/components/shared/IllustrationCard'
import { Reveal } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'
import { company } from '@/data/company'
import { ICON_STROKE } from '@/lib/icons'

export function AboutPreview() {
  return (
    <Section id="about-preview" tone="white">
      <div className="grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <Reveal>
            <SectionHeading
              label="About Growthera"
              title="Your Trusted Partner in Business Growth"
              tagline="Practical guidance for establishment, funding readiness and sustainable growth"
            />
            <p className="mt-6 text-base leading-relaxed text-navy/70">{company.about}</p>

            <div className="mt-8">
              <p className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-purple">
                What We Focus On
              </p>
              <ul className="mt-4 space-y-3">
                {company.focus.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-navy/80">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple text-white">
                      <Check strokeWidth={ICON_STROKE} className="h-3 w-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 rounded-2xl bg-surface-page p-5 shadow-soft md:p-6">
              <p className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-navy">
                Our Objective
              </p>
              <p className="mt-3 text-sm leading-relaxed text-navy/75">{company.objective}</p>
            </div>

            <Button asChild className="mt-8">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </Reveal>
        </div>

        <div className="relative lg:col-span-6">
          <Reveal delay={0.15}>
            <div className="relative space-y-6">
              <FocusRingPanel />
              <div className="md:pl-8">
                <IllustrationCard />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
