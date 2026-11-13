import { SEO } from '@/components/shared/SEO'
import { Hero } from '@/components/sections/Hero'
import { CorePillars } from '@/components/sections/CorePillars'
import { MarqueeBand } from '@/components/sections/MarqueeBand'
import { StatsCounter } from '@/components/sections/StatsCounter'
import { AboutPreview } from '@/components/sections/AboutPreview'
import { BusinessApproach } from '@/components/sections/BusinessApproach'
import { ServicesOverview } from '@/components/sections/ServicesOverview'
import { IndustriesCarousel } from '@/components/sections/IndustriesCarousel'
import { TrustPrinciples } from '@/components/sections/TrustPrinciples'
import { WhyChoose } from '@/components/sections/WhyChoose'
import { EngagementProcess } from '@/components/sections/EngagementProcess'
import { SitePages } from '@/components/sections/SitePages'
import { CTABanner } from '@/components/sections/CTABanner'
import { company } from '@/data/company'

export default function Home() {
  return (
    <>
      <SEO
        title="Business Consulting & Growth Solutions"
        description={company.intro}
        path="/"
      />
      <Hero />
      <CorePillars />
      <MarqueeBand />
      <AboutPreview />
      <StatsCounter />
      <BusinessApproach />
      <ServicesOverview />
      <IndustriesCarousel />
      <TrustPrinciples />
      <WhyChoose />
      <EngagementProcess />
      <SitePages />
      <CTABanner />
    </>
  )
}
