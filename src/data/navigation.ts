export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Process', href: '/process' },
  { label: 'Contact', href: '/contact' },
] as const

export const footerLinks = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Process', href: '/process' },
    { label: 'Industries', href: '/industries' },
    { label: 'Contact', href: '/contact' },
  ],
  services: [
    { label: 'Business Registration', href: '/services/business-registration-incorporation' },
    { label: 'Funding Assistance', href: '/services/funding-grants-subsidy-assistance' },
    { label: 'Compliance Support', href: '/services/government-registrations-certifications' },
    { label: 'All Services', href: '/services' },
  ],
} as const
