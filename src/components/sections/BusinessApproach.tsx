import { Section, SectionHeading } from '@/components/shared/Section'
import { Callout } from '@/components/shared/Callout'
import { Reveal } from '@/components/shared/Reveal'
import { businessApproach } from '@/data/approach'
import { cn } from '@/lib/utils'

export function BusinessApproach() {
  return (
    <Section id="approach" tone="page">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
          <Reveal>
            <SectionHeading
              label={businessApproach.label}
              title="From Ambition to Execution"
              tagline={businessApproach.tagline}
            />
            <p className="mt-6 text-base leading-relaxed text-navy/70">
              Every organisation is at a different stage. Our approach follows a clear sequence so
              support stays practical, scoped and relevant.
            </p>
            <div className="mt-8">
              <Callout>{businessApproach.note}</Callout>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <div className="relative pl-2">
            <ol className="space-y-2">
              {businessApproach.stages.map((stage, index) => {
                const isFirst = index === 0
                const isLast = index === businessApproach.stages.length - 1

                return (
                  <Reveal key={stage.id} delay={index * 0.05}>
                    <li className="relative flex gap-5 pb-8 last:pb-0">
                      {/* Vertical line passing through the exact center of the circles */}
                      {!isLast && (
                        <div
                          className={cn(
                            'absolute left-6 w-0.5 -translate-x-1/2 bg-purple',
                            isFirst ? 'top-6 bottom-0' : 'top-0 bottom-0'
                          )}
                          aria-hidden="true"
                        />
                      )}
                      {isLast && (
                        <div
                          className="absolute left-6 top-0 h-6 w-0.5 -translate-x-1/2 bg-purple"
                          aria-hidden="true"
                        />
                      )}

                      <div
                        className={cn(
                          'relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-purple font-heading text-sm font-bold text-white shadow-soft'
                        )}
                      >
                        {stage.number}
                      </div>
                      <div className="rounded-2xl bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                        <h3 className="font-heading text-sm font-extrabold uppercase tracking-[0.14em] text-navy">
                          {stage.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-navy/70">{stage.description}</p>
                      </div>
                    </li>
                  </Reveal>
                )
              })}
            </ol>
          </div>
        </div>
      </div>
    </Section>
  )
}
