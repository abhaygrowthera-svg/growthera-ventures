import { Link } from 'react-router-dom'
import { Clock, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react'
import { Logo } from '@/components/shared/Logo'
import { company } from '@/data/company'
import { footerLinks } from '@/data/navigation'
import { ICON_STROKE } from '@/lib/icons'

export function Footer() {
  return (
    <footer className="noise-overlay relative overflow-hidden bg-navy text-white">
      {/* Decorative shapes */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rotate-45 bg-purple/30" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-8 -left-8 h-28 w-28 rotate-12 bg-purple-light/20" aria-hidden="true" />

      {/* Subtle grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.02]" aria-hidden="true">
        <svg className="h-full w-full">
          <defs>
            <pattern id="footer-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0H0V40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-grid)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-content px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo variant="light" />
            <p className="mt-5 text-sm leading-relaxed text-white/70">{company.intro}</p>
            {/* Mini accent line */}
            <div className="mt-4 h-0.5 w-12 rounded-full bg-gradient-to-r from-gold to-gold/30" />
          </div>

          <div>
            <h3 className="font-heading text-xs font-bold uppercase tracking-[0.16em] text-gold">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-white/75 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-light rounded"
                  >
                    {link.label}
                    <ArrowUpRight strokeWidth={ICON_STROKE} className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-xs font-bold uppercase tracking-[0.16em] text-gold">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-white/75 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-light rounded"
                  >
                    {link.label}
                    <ArrowUpRight strokeWidth={ICON_STROKE} className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-xs font-bold uppercase tracking-[0.16em] text-gold">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li className="flex gap-3">
                <MapPin strokeWidth={ICON_STROKE} className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a
                  href={company.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-light rounded"
                >
                  {company.address.full}
                </a>
              </li>
              <li>
                <a
                  href={company.phoneHref}
                  className="inline-flex items-center gap-3 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-light rounded"
                >
                  <Phone strokeWidth={ICON_STROKE} className="h-4 w-4 text-gold" />
                  {company.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="inline-flex items-center gap-3 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-light rounded"
                >
                  <Mail strokeWidth={ICON_STROKE} className="h-4 w-4 text-gold" />
                  {company.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock strokeWidth={ICON_STROKE} className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>{company.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Gradient divider */}
        <div className="divider-gradient mt-12" />

        <div className="mt-6 flex flex-col gap-3 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p className="max-w-xl">
            Engagements are scoped to client requirements. Approvals, certifications and funding
            decisions rest with the relevant authorities or lenders.
          </p>
        </div>
      </div>
    </footer>
  )
}
