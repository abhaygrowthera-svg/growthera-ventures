import { SEO } from '@/components/shared/SEO'
import { PageHero } from '@/components/shared/PageHero'
import { Section, SectionHeading } from '@/components/shared/Section'
import { Reveal, Stagger, StaggerItem } from '@/components/shared/Reveal'
import { Callout } from '@/components/shared/Callout'
import { LogicFlowPanel, FunnelPanel } from '@/components/shared/VisualPanels'
import { CTABanner } from '@/components/sections/CTABanner'
import { businessApproach, engagementProcess } from '@/data/approach'

export default function Process() {
  return (
    <>
      <SEO
        title="Our Process"
        description="From consultation and assessment to proposal, execution and follow-up — a clear engagement process for business consulting and growth support."
        path="/process"
      />
      <PageHero
        title="How Engagements Work"
        tagline={engagementProcess.tagline}
        description="We keep scope, timelines and responsibilities clear from the first conversation."
      />

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                title={engagementProcess.heading}
                tagline="Five clear steps from first conversation to follow-up"
              />
              <div className="mt-8">
                <LogicFlowPanel />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <ol className="relative space-y-4 before:absolute before:bottom-4 before:left-6 before:top-4 before:w-px before:bg-border">
              {engagementProcess.steps.map((step, index) => (
                <Reveal key={step.number} delay={index * 0.05}>
                  <li className="relative flex gap-5 rounded-2xl bg-surface-page p-5 shadow-soft">
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy font-heading text-sm font-bold text-white">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="font-heading text-sm font-extrabold uppercase tracking-[0.14em] text-navy">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-navy/70">{step.description}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>

        {/* Full-width Decision Funnel card */}
        <Reveal className="mt-12 md:mt-16">
          <FunnelPanel className="w-full" />
        </Reveal>

        <div className="mt-12">
          <Callout title="Client responsibilities">{engagementProcess.clientResponsibilities}</Callout>
        </div>
      </Section>

      <Section tone="page">
        <Reveal>
          <SectionHeading
            label={businessApproach.label}
            title="Business Approach"
            tagline={businessApproach.tagline}
            align="center"
          />
        </Reveal>

        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {businessApproach.stages.map((stage) => (
            <StaggerItem key={stage.id}>
              <article className="h-full rounded-2xl bg-white p-5 text-center shadow-soft">
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-purple font-heading text-xs font-bold text-white">
                  {stage.number}
                </div>
                <h3 className="mt-4 font-heading text-xs font-extrabold uppercase tracking-[0.14em] text-navy">
                  {stage.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/65">{stage.description}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mx-auto mt-10 max-w-3xl">
          <Callout>{businessApproach.note}</Callout>
        </div>
      </Section>

      <CTABanner />
    </>
  )
}
