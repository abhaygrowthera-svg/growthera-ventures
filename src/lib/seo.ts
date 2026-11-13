import { company } from '@/data/company'
import { absoluteUrl } from '@/lib/utils'

export type PageMeta = {
  title: string
  description: string
  path: string
  image?: string
}

export function buildTitle(pageTitle?: string) {
  if (!pageTitle) return `${company.shortName} | Business Consulting & Growth Solutions`
  return `${pageTitle} | ${company.shortName}`
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness', 'ProfessionalService'],
    name: company.name,
    url: company.website,
    email: company.email,
    telephone: company.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'H-28 ARV Park, G-03',
      addressLocality: 'Noida',
      addressRegion: 'UP',
      postalCode: '201301',
      addressCountry: 'IN',
    },
    openingHours: 'Mo-Sa 10:00-18:00',
    description: company.intro,
    areaServed: 'IN',
    sameAs: [company.website],
  }
}

export function pageDefaults(meta: PageMeta) {
  const title = buildTitle(meta.title)
  const url = absoluteUrl(meta.path)
  const image = meta.image ?? absoluteUrl('/og-default.jpg')
  return { title, description: meta.description, url, image }
}
