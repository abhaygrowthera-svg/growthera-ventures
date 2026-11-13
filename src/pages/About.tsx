import { Check } from 'lucide-react'
import { SEO } from '@/components/shared/SEO'
import { PageHero } from '@/components/shared/PageHero'
import { Section, SectionHeading } from '@/components/shared/Section'
import { Reveal, Stagger, StaggerItem } from '@/components/shared/Reveal'
import { Callout } from '@/components/shared/Callout'
import { GrowthChartPanel, FocusRingPanel } from '@/components/shared/VisualPanels'
import { CTABanner } from '@/components/sections/CTABanner'
import { company, coreValues } from '@/data/company'
import { ICON_STROKE } from '@/lib/icons'

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description={company.about}
        path="/about"
      />
      <PageHero
        title="Guided by Purpose. Driven by Progress."
        tagline={company.subTagline}
        description={company.about}
      />

      <Section tone="white">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal>
              <SectionHeading
                label="Who We Are"
                title="A Client-Focused Consulting Partner"
                tagline="Supporting entrepreneurs, startups, MSMEs and established organisations"
              />
              <p className="mt-6 text-base leading-relaxed text-navy/70">{company.objective}</p>
              <ul className="mt-8 space-y-3">
                {company.focus.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-navy/80">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple text-white">
                      <Check strokeWidth={ICON_STROKE} className="h-3 w-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <div className="lg:col-span-6 space-y-6">
            <Reveal delay={0.1}>
              <GrowthChartPanel title="Client-Focused Growth Logic" />
            </Reveal>
            <Reveal delay={0.15}>
              <FocusRingPanel />
            </Reveal>
          </div>
        </div>
      </Section>

      <Section tone="page">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <article className="h-full rounded-2xl bg-white p-7 shadow-soft">
              <p className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-purple">
                Vision
              </p>
              <h2 className="mt-3 font-heading text-xl font-extrabold uppercase tracking-wide text-navy md:text-2xl">
                Looking Ahead
              </h2>
              <div className="mt-3 h-1 w-12 rounded-full bg-purple" />
              <p className="mt-5 text-base leading-relaxed text-navy/75">{company.vision}</p>
            </article>
          </Reveal>
          <Reveal delay={0.1}>
            <article className="h-full rounded-2xl bg-navy p-7 shadow-soft text-white">
              <p className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-gold">
                Mission
              </p>
              <h2 className="mt-3 font-heading text-xl font-extrabold uppercase tracking-wide md:text-2xl">
                How We Serve
              </h2>
              <div className="mt-3 h-1 w-12 rounded-full bg-gold" />
              <p className="mt-5 text-base leading-relaxed text-white/75">{company.mission}</p>
            </article>
          </Reveal>
        </div>
      </Section>

      <Section tone="white">
        <Reveal>
          <SectionHeading
            label="Core Values"
            title="Principles That Shape Our Work"
            tagline="Integrity, clarity and accountability in every engagement"
            align="center"
          />
        </Reveal>
        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {coreValues.map((value, index) => (
            <StaggerItem key={value.id}>
              <article className="h-full rounded-2xl bg-surface-page p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                <span className="font-heading text-xs font-semibold tracking-[0.16em] text-purple/60">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 font-heading text-base font-bold uppercase tracking-wide text-navy">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy/65">{value.description}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section tone="lavender">
        <Reveal>
          <blockquote className="relative mx-auto max-w-3xl rounded-3xl bg-white p-8 text-center shadow-card md:p-12">
            <span className="absolute left-6 top-4 font-heading text-6xl text-purple/20" aria-hidden="true">
              “
            </span>
            <p className="font-heading text-xs font-bold uppercase tracking-[0.16em] text-purple">
              Our Promise
            </p>
            <p className="mt-5 text-lg font-medium leading-relaxed text-navy md:text-xl">
              {company.promise}
            </p>
            <div className="mx-auto mt-6 h-1 w-14 rounded-full bg-gold" />
          </blockquote>
        </Reveal>
        <div className="mx-auto mt-10 max-w-3xl">
          <Callout title="Our commitment">{company.commitment}</Callout>
        </div>
      </Section>

      <CTABanner />
    </>
  )
}
