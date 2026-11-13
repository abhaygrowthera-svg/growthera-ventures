import React from 'react';
import { motion } from 'framer-motion';
import { 
  Factory, Sprout, UtensilsCrossed, ShoppingBag, HardHat, 
  GraduationCap, Stethoscope, Briefcase, Cpu, CheckCircle2, Info 
} from 'lucide-react';
import { industries } from '../data/prospectusData';
import { FadeInView, StaggerContainer, StaggerItem, SectionHeader, Badge } from './ui';

const iconMap = { Factory, Sprout, UtensilsCrossed, ShoppingBag, HardHat, GraduationCap, Stethoscope, Briefcase, Cpu };

export default function IndustriesSection() {
  return (
    <section id="industries" className="relative py-24 lg:py-32 mesh-gradient-1 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          eyebrow="Industries We Serve"
          title="Solutions for Different Business Sectors"
          subtitle="Our service portfolio is designed to support a range of business models across diverse industries in India."
        />

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left" staggerDelay={0.06}>
          {industries.map((ind, idx) => {
            const IconComp = iconMap[ind.icon] || Factory;
            return (
              <StaggerItem key={ind.name}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="h-full p-7 rounded-3xl bg-white border border-slate-100 hover:border-indigo-300/60 shadow-sm hover:shadow-xl transition-all duration-400 flex flex-col justify-between group glow-border"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100/50 flex items-center justify-center text-indigo-600 group-hover:from-indigo-600 group-hover:to-purple-600 group-hover:text-white group-hover:border-transparent group-hover:shadow-lg group-hover:shadow-indigo-600/20 transition-all duration-300">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-sm font-extrabold text-slate-200 group-hover:text-indigo-200 transition-colors">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <h3 className="text-lg font-extrabold text-slate-900 tracking-tight mb-2.5 group-hover:text-indigo-600 transition-colors">
                      {ind.name}
                    </h3>
                    <p className="text-[13px] text-slate-500 leading-relaxed">{ind.desc}</p>
                  </div>

                  <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-indigo-600 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Sector Advisory
                    </span>
                    <a href="#contact" className="text-xs font-bold text-slate-400 hover:text-indigo-600 transition-colors">
                      Consult →
                    </a>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <FadeInView delay={0.2}>
          <div className="mt-12 p-6 rounded-3xl bg-white border border-indigo-100/60 shadow-sm flex items-start gap-4">
            <Info className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-slate-500">
              <strong className="text-slate-700">Tailored support:</strong> Scope is tailored to the operating model, sector requirements and stage of each organisation.
            </p>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}

