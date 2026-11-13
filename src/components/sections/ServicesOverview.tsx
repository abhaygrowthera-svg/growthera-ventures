import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Section, SectionHeading } from '@/components/shared/Section'
import { ServiceCard } from '@/components/shared/ServiceCard'
import { Reveal, Stagger, StaggerItem } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'
import { services } from '@/data/services'
import { ICON_STROKE } from '@/lib/icons'

/** Homepage preview — full catalogue lives on /services */
const featured = services.slice(0, 6)

export function ServicesOverview() {
  return (
    <Section id="services" tone="white">
      <Reveal>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            label="Services"
            title="Ways We Support Your Business"
            tagline="A preview of our solutions — open the Services page for the full catalogue"
          />
          <Button asChild variant="secondary" className="shrink-0 self-start md:self-auto">
            <Link to="/services">
              View all {services.length} services
              <ArrowRight strokeWidth={ICON_STROKE} className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Reveal>

      <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((service, index) => (
          <StaggerItem key={service.slug}>
            <ServiceCard service={service} index={index} />
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal className="mt-10 text-center">
        <p className="text-sm text-navy/60">
          Looking for branding, technology, strategy or international trade support?
        </p>
        <Button asChild className="mt-4">
          <Link to="/services">Go to Services page</Link>
        </Button>
      </Reveal>
    </Section>
  )
}
