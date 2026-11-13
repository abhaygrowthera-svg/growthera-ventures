import { SEO } from '@/components/shared/SEO'
import { PageHero } from '@/components/shared/PageHero'
import { Section, SectionHeading } from '@/components/shared/Section'
import { Reveal, Stagger, StaggerItem } from '@/components/shared/Reveal'
import { Callout } from '@/components/shared/Callout'
import { IndustryVisual } from '@/components/shared/VisualPanels'
import { CTABanner } from '@/components/sections/CTABanner'
import { industries } from '@/data/industries'
import { getIcon, ICON_STROKE } from '@/lib/icons'

export default function Industries() {
  return (
    <>
      <SEO
        title="Industries"
        description="Growthera supports manufacturing, agriculture, food processing, retail, construction, education, healthcare, professional services and technology startups across India."
        path="/industries"
      />
      <PageHero
        title={industries.heading}
        tagline={industries.tagline}
        description={industries.note}
      />

      <Section tone="white">
        <Reveal>
          <SectionHeading
            label="Sector Focus"
            title="Support Tailored to Your Operating Model"
            tagline="Requirements differ by sector, stage and regulatory context"
          />
        </Reveal>

        <Stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.items.map((item, index) => {
            const Icon = getIcon(item.icon)
            const isOffset = index % 3 === 1
            return (
              <StaggerItem key={item.id} className={isOffset ? 'md:mt-8' : ''}>
                <article className="group overflow-hidden rounded-2xl bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <IndustryVisual icon={item.icon} title={item.title} />
                  <div className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-soft text-purple transition-colors group-hover:bg-purple group-hover:text-white">
                        <Icon strokeWidth={ICON_STROKE} className="h-5 w-5" />
                      </div>
                      <span className="font-heading text-xs tracking-[0.16em] text-navy/30">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="mt-4 font-heading text-base font-bold uppercase tracking-wide text-navy">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-navy/65">{item.description}</p>
                  </div>
                </article>
              </StaggerItem>
            )
          })}
        </Stagger>

        <div className="mt-12">
          <Callout>{industries.note}</Callout>
        </div>
      </Section>

      <CTABanner />
    </>
  )
}
