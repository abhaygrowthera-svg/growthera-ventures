/**
 * Central multipage route map for Growthera Ventures.
 * Each path renders a distinct page under React Router.
 */
export const appRoutes = [
  { path: '/', label: 'Home', description: 'Landing page with section previews' },
  { path: '/about', label: 'About', description: 'Company, vision, mission and values' },
  { path: '/services', label: 'Services', description: 'Full services directory' },
  { path: '/services/:slug', label: 'Service detail', description: 'Individual service page' },
  { path: '/industries', label: 'Industries', description: 'Sectors we support' },
  { path: '/process', label: 'Process', description: 'Engagement and business approach' },
  { path: '/contact', label: 'Contact', description: 'Form, map and contact details' },
] as const
