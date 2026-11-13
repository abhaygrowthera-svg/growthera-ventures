import { SEO } from '@/components/shared/SEO'
import { PageHero } from '@/components/shared/PageHero'
import { Section } from '@/components/shared/Section'
import { ServiceCard } from '@/components/shared/ServiceCard'
import { Stagger, StaggerItem } from '@/components/shared/Reveal'
import { CTABanner } from '@/components/sections/CTABanner'
import { services } from '@/data/services'

export default function Services() {
  return (
    <>
      <SEO
        title="Services"
        description="Business registration, government certifications, funding assistance, compliance, digital growth and more — structured support for organisations across India."
        path="/services"
      />
      <PageHero
        title="Comprehensive Business Solutions"
        tagline="Practical support across establishment, compliance, funding and growth"
        description="Each engagement is scoped around your stage, sector, eligibility and objectives. Explore our services below."
      />

      <Section tone="page">
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <StaggerItem key={service.slug}>
              <ServiceCard service={service} index={index} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <CTABanner />
    </>
  )
}
