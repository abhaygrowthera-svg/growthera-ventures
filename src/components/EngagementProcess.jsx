import React from 'react';
import { motion } from 'framer-motion';
import { 
  Headphones, Search, FileSignature, CheckCircle2, Clock, 
  ArrowRight, ShieldCheck 
} from 'lucide-react';
import { engagementProcess } from '../data/prospectusData';
import { FadeInView, SectionHeader } from './ui';

const stepIcons = [Headphones, Search, FileSignature, CheckCircle2, Clock];

export default function EngagementProcess({ onStartEngagement }) {
  return (
    <section id="process" className="relative py-24 lg:py-32 mesh-gradient-1 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          eyebrow="Our Engagement Process"
          title="A Clear and Transparent Service Journey"
          subtitle="Every engagement begins with understanding the requirement and agreeing on a practical scope of work."
        />

        {/* 5-Step Timeline */}
        <div className="space-y-5 mb-16">
          {engagementProcess.map((step, idx) => {
            const IconComp = stepIcons[idx];
            return (
              <FadeInView key={step.step} delay={idx * 0.08}>
                <motion.div
                  whileHover={{ x: 6, scale: 1.005 }}
                  className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-100 shadow-xs hover:border-indigo-300/60 hover:shadow-lg transition-all duration-400 flex flex-col md:flex-row md:items-center justify-between gap-6 text-left group glow-border"
                >
                  <div className="flex items-center gap-5 md:w-1/3">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white flex items-center justify-center font-black text-xl shadow-lg shadow-indigo-600/20 flex-shrink-0 group-hover:shadow-indigo-600/40 transition-shadow">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-slate-900 tracking-tight uppercase">{step.title}</h3>
                      <p className="text-xs font-semibold text-indigo-600 mt-0.5">{step.subtitle}</p>
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                  </div>
                  <div className="hidden md:flex items-center justify-end md:w-1/6">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-50 to-indigo-50 border border-slate-100 flex items-center justify-center text-indigo-600 group-hover:from-indigo-600 group-hover:to-purple-600 group-hover:text-white group-hover:border-transparent transition-all duration-300">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>
                </motion.div>
              </FadeInView>
            );
          })}
        </div>

        {/* Client Responsibilities */}
        <FadeInView>
          <div className="p-8 rounded-3xl bg-white border border-indigo-100/60 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 text-indigo-700 flex-shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider mb-1.5">
                  Client Responsibilities & Governance
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Clients are expected to provide complete and accurate information, review documents promptly, meet statutory deadlines and pay applicable government or third-party charges.
                </p>
              </div>
            </div>
          </div>
        </FadeInView>

        {/* CTA */}
        <FadeInView delay={0.2}>
          <div className="mt-12 text-center">
            <motion.button
              onClick={onStartEngagement}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 px-10 py-4.5 rounded-2xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-bold text-sm uppercase tracking-wider shadow-xl shadow-indigo-600/25 hover:shadow-indigo-500/40 transition-all"
            >
              <span>Begin Step 01: Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}

