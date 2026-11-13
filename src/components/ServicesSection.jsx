import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, FileCheck, BadgeDollarSign, Sparkles, HeartHandshake, 
  Calculator, Scale, Landmark, Megaphone, Laptop, Compass, Globe2,
  Search, CheckCircle2, ArrowRight
} from 'lucide-react';
import { allServices } from '../data/prospectusData';
import { FadeInView, StaggerContainer, StaggerItem, SectionHeader, Badge } from './ui';

const iconMap = { Building2, FileCheck, BadgeDollarSign, Sparkles, HeartHandshake, Calculator, Scale, Landmark, Megaphone, Laptop, Compass, Globe2 };

const categories = ['All', 'Entity Setup', 'Licenses & Standards', 'Capital & Finance', 'Startups', 'Tax & Finance', 'Legal & IP', 'Technology', 'Marketing', 'Global Trade'];

export default function ServicesSection({ onOpenServiceModal, onBookServiceDirect }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredServices = useMemo(() => {
    return allServices.filter((srv) => {
      const catMatch = selectedCategory === 'All' || srv.category.toLowerCase().includes(selectedCategory.toLowerCase());
      const q = searchQuery.toLowerCase().trim();
      if (!q) return catMatch;
      return catMatch && (
        srv.title.toLowerCase().includes(q) || srv.subtitle.toLowerCase().includes(q) ||
        srv.shortDesc.toLowerCase().includes(q) || srv.offerings.some(o => o.toLowerCase().includes(q))
      );
    });
  }, [searchQuery, selectedCategory]);

  return (
    <section id="services" className="relative py-24 lg:py-32 mesh-gradient-2 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          eyebrow="Services We Offer"
          title="Your Business. Our Expertise. Together, We Grow."
          subtitle="12 specialized business support services covering registration, funding, compliance, and digital growth."
        />

        {/* Search & Filter */}
        <FadeInView>
          <div className="mb-10 space-y-4">
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search services (e.g. GST, PMEGP, ISO, GeM)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-200 bg-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm shadow-sm transition-all"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600 px-2 py-1 rounded-lg hover:bg-slate-100">
                    Clear
                  </button>
                )}
              </div>
              <div className="text-xs font-medium text-slate-400">
                <strong className="text-indigo-600 font-bold">{filteredServices.length}</strong> of {allServices.length} services
              </div>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs font-semibold px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-md shadow-indigo-600/20'
                      : 'bg-white hover:bg-slate-50 text-slate-500 border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </FadeInView>

        {/* Services Grid */}
        {filteredServices.length === 0 ? (
          <FadeInView>
            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200 shadow-inner">
              <p className="text-slate-400 text-sm mb-3">No services match "{searchQuery}"</p>
              <button onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }} className="text-xs font-bold text-indigo-600 hover:underline">
                Reset filters
              </button>
            </div>
          </FadeInView>
        ) : (
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left" staggerDelay={0.06}>
            {filteredServices.map((service) => {
              const IconComp = iconMap[service.icon] || Building2;
              return (
                <StaggerItem key={service.id}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="h-full rounded-3xl bg-white border border-slate-100 hover:border-indigo-300/60 transition-all duration-400 shadow-sm hover:shadow-xl flex flex-col justify-between group overflow-hidden glow-border"
                  >
                    <div className="p-7 space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Badge variant="ghost">PG {service.pageNumber}</Badge>
                          <span className="text-[11px] font-medium text-slate-400">{service.badge}</span>
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-50 to-indigo-50 border border-slate-100 flex items-center justify-center text-indigo-600 group-hover:from-indigo-600 group-hover:to-purple-600 group-hover:text-white group-hover:border-transparent group-hover:shadow-lg group-hover:shadow-indigo-600/20 transition-all duration-300">
                          <IconComp className="w-5 h-5" />
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-extrabold text-slate-900 tracking-tight leading-snug group-hover:text-indigo-600 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-xs font-semibold text-indigo-500 mt-1">{service.subtitle}</p>
                      </div>

                      <p className="text-[13px] text-slate-500 leading-relaxed">{service.shortDesc}</p>

                      <div className="pt-2">
                        <Badge variant="primary" className="mb-3">What We Offer</Badge>
                        <ul className="space-y-2">
                          {service.offerings.slice(0, 4).map((offering, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 font-medium">
                              <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 flex-shrink-0 mt-0.5" />
                              <span className="line-clamp-1">{offering}</span>
                            </li>
                          ))}
                        </ul>
                        {service.offerings.length > 4 && (
                          <p className="text-[11px] font-medium text-slate-400 mt-2 pl-5.5">
                            + {service.offerings.length - 4} more
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="px-7 py-4 bg-gradient-to-r from-slate-50/50 to-indigo-50/30 border-t border-slate-100 flex items-center justify-between">
                      <button onClick={() => onOpenServiceModal(service)} className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 group/btn">
                        Full Scope <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                      </button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => onBookServiceDirect(service)}
                        className="text-[11px] font-bold px-4 py-2 rounded-xl bg-white hover:bg-indigo-600 text-slate-600 hover:text-white border border-slate-200 hover:border-indigo-600 shadow-xs transition-all duration-200"
                      >
                        Inquire
                      </motion.button>
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        )}
      </div>
    </section>
  );
}

