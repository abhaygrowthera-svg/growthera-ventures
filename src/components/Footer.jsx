import React from 'react';
import { Phone, Mail, MapPin, Globe, ArrowUp, FileText } from 'lucide-react';
import Logo from './Logo';
import { companyDetails, allServices } from '../data/prospectusData';

export default function Footer({ onOpenProspectus }) {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-[#0B0A1E] text-white pt-20 pb-10 border-t border-indigo-950/50 text-left overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/[0.05]">
          
          {/* Brand */}
          <div className="lg:col-span-4 space-y-5">
            <Logo light={true} showTagline={true} />
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">{companyDetails.subtitle}</p>
            <p className="text-xs font-semibold text-indigo-300/70 italic">"{companyDetails.slogan}"</p>
            <button onClick={onOpenProspectus}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-indigo-300 border border-white/[0.06] text-xs font-semibold transition-colors">
              <FileText className="w-3.5 h-3.5" />
              <span>Digital Prospectus (21 Pages)</span>
            </button>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-indigo-400/80">12 Core Services</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-xs">
              {allServices.map(srv => (
                <a key={srv.id} href="#services"
                   className="text-slate-500 hover:text-indigo-300 transition-colors flex items-center gap-1.5 py-0.5">
                  <span className="text-[10px] text-indigo-600/60 font-mono font-bold">{srv.pageNumber}.</span>
                  <span className="truncate">{srv.title}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-indigo-400/80">Corporate Office</h4>
            <div className="space-y-3 text-xs text-slate-400">
              {[
                { icon: MapPin, text: companyDetails.contact.address },
                { icon: Phone, text: companyDetails.contact.phone, href: `tel:${companyDetails.contact.phoneClean}` },
                { icon: Mail, text: companyDetails.contact.email, href: `mailto:${companyDetails.contact.email}` },
                { icon: Globe, text: companyDetails.contact.website, href: companyDetails.contact.domainUrl },
              ].map(({ icon: Icon, text, href }, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <Icon className="w-4 h-4 text-indigo-500/60 flex-shrink-0 mt-0.5" />
                  {href ? (
                    <a href={href} target={i === 3 ? '_blank' : undefined} rel="noreferrer" className="hover:text-indigo-300 transition-colors break-all">{text}</a>
                  ) : (
                    <span className="leading-snug">{text}</span>
                  )}
                </div>
              ))}
            </div>
            <span className="text-[11px] text-slate-500/80 block pt-1">{companyDetails.contact.workingHours}</span>
          </div>
        </div>

        {/* Disclaimers */}
        <div className="py-8 border-b border-white/[0.04] text-[11px] text-slate-500/60 space-y-2 leading-relaxed">
          <p><strong className="text-slate-400/80">Statutory:</strong> Consultancy and documentation assistance are distinguished from statutory attestations requiring qualified CA, CS or other professional sign-off.</p>
          <p><strong className="text-slate-400/80">Schemes:</strong> Eligibility, funding, subsidy and approval are subject to scheme rules and lender/authority decisions.</p>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500/50">
          <span>© {new Date().getFullYear()} {companyDetails.legalName}. All rights reserved.</span>
          <div className="flex items-center gap-5">
            {["About", "Services", "Contact"].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-indigo-300 transition-colors">{l}</a>
            ))}
            <button onClick={scrollToTop} 
              className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-indigo-400/60 hover:text-indigo-300 transition-colors ml-2">
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

