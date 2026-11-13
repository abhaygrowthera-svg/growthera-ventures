import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, Check } from 'lucide-react'
import { SEO } from '@/components/shared/SEO'
import { PageHero } from '@/components/shared/PageHero'
import { Section } from '@/components/shared/Section'
import { Callout } from '@/components/shared/Callout'
import { Reveal } from '@/components/shared/Reveal'
import { ServiceLogicPanel, FunnelPanel } from '@/components/shared/VisualPanels'
import { Button } from '@/components/ui/button'
import { CTABanner } from '@/components/sections/CTABanner'
import { getServiceBySlug, services } from '@/data/services'
import { getIcon, ICON_STROKE } from '@/lib/icons'
import { cn } from '@/lib/utils'

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>()
  const service = slug ? getServiceBySlug(slug) : undefined

  if (!service) {
    return <Navigate to="/services" replace />
  }

  const Icon = getIcon(service.icon)
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3)

  return (
    <>
      <SEO
        title={service.title}
        description={service.intro}
        path={`/services/${service.slug}`}
      />
      <PageHero
        title={service.title}
        tagline={service.tagline}
        description={service.intro}
      />

      <Section tone="white">
        <div className="mb-8">
          <Button asChild variant="ghost" size="sm">
            <Link to="/services">
              <ArrowLeft strokeWidth={ICON_STROKE} className="h-4 w-4" />
              All Services
            </Link>
          </Button>
        </div>

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-soft text-purple">
                <Icon strokeWidth={ICON_STROKE} className="h-6 w-6" />
              </div>

              <h2 className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-purple">
                What We Offer
              </h2>
              <ul className="mt-5 space-y-3">
                {service.offerings.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl bg-surface-page px-4 py-3 text-sm text-navy/80 shadow-soft"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple text-white">
                      <Check strokeWidth={ICON_STROKE} className="h-3 w-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              {service.fundingJourney && (
                <div className="mt-10">
                  <h3 className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-navy">
                    Funding Journey
                  </h3>
                  <ol className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                    {service.fundingJourney.map((step, index) => (
                      <li key={step} className="flex items-center gap-3">
                        <span className="inline-flex items-center gap-2 rounded-full bg-navy px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white">
                          <span className="text-gold">{String(index + 1).padStart(2, '0')}</span>
                          {step}
                        </span>
                        {index < service.fundingJourney!.length - 1 && (
                          <span className="hidden h-px w-6 bg-purple-light sm:block" aria-hidden="true" />
                        )}
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {service.insight && (
                <blockquote className="mt-10 rounded-2xl bg-gold-soft/40 p-5 text-sm leading-relaxed text-navy/85 md:p-6 shadow-soft">
                  <p className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-navy/60">
                    Key Insight
                  </p>
                  <p className="mt-3">{service.insight}</p>
                </blockquote>
              )}

              {service.approach && (
                <div className="mt-8 rounded-2xl bg-surface-page p-5 shadow-soft md:p-6">
                  <p className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-purple">
                    Our Approach
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-navy/75">{service.approach}</p>
                </div>
              )}

              {service.note && (
                <div className="mt-8">
                  <Callout>{service.note}</Callout>
                </div>
              )}
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.1} className="space-y-6 lg:sticky lg:top-28">
              <ServiceLogicPanel title={service.tagline} offerings={service.offerings} />
              {service.fundingJourney ? <FunnelPanel /> : null}
              <div className="rounded-2xl bg-navy p-6 text-white">
                <p className="font-heading text-sm font-bold uppercase tracking-wide">
                  Ready to discuss this service?
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  Tell us about your organisation and we will outline a clear next step.
                </p>
                <Button asChild className="mt-5 w-full" variant="default">
                  <Link to="/contact">Get a Free Consultation</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section tone="page">
        <h2 className="font-heading text-lg font-extrabold uppercase tracking-wide text-navy">
          Related Services
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {related.map((item, index) => (
            <Link
              key={item.slug}
              to={`/services/${item.slug}`}
              className={cn(
                'rounded-2xl bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple'
              )}
            >
              <span className="font-heading text-xs tracking-[0.16em] text-purple/50">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-2 font-heading text-sm font-bold uppercase tracking-wide text-navy">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-purple">{item.tagline}</p>
            </Link>
          ))}
        </div>
      </Section>

      <CTABanner />
    </>
  )
}
