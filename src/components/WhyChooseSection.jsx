import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, ShieldCheck, Handshake, Layers, FileText, 
  TrendingUp, MessageSquare, Users, Compass 
} from 'lucide-react';
import { strengths, companyDetails } from '../data/prospectusData';
import { FadeInView, StaggerContainer, StaggerItem, SectionHeader, Badge } from './ui';

const strengthIcons = [Layers, Users, FileText, TrendingUp, ShieldCheck, Compass, MessageSquare, Handshake];

export default function WhyChooseSection() {
  return (
    <section id="why-choose" className="relative py-24 lg:py-32 mesh-gradient-2 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          eyebrow="Why Choose Growthera"
          title="Connected Support. Clear Communication. Practical Execution."
          subtitle="Multiple business support capabilities coordinated through structured engagements."
        />

        <FadeInView><Badge variant="primary" className="mb-8">Our Strengths</Badge></FadeInView>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-left mb-16" staggerDelay={0.06}>
          {strengths.map((str, idx) => {
            const Icon = strengthIcons[idx];
            return (
              <StaggerItem key={str.title}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="h-full p-6 rounded-3xl bg-white border border-slate-100 hover:border-indigo-300/60 shadow-xs hover:shadow-xl transition-all duration-400 flex flex-col justify-between group glow-border"
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 text-indigo-600 flex items-center justify-center mb-5 group-hover:from-indigo-600 group-hover:to-purple-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-indigo-600/20 transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex items-start gap-2 mb-2">
                      <CheckCircle2 className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-1" />
                      <h3 className="font-bold text-slate-900 text-[15px] leading-snug">{str.title}</h3>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed pl-6">{str.desc}</p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100 pl-6">
                    <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">Pillar {String(idx + 1).padStart(2, '0')}</span>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Commitment Card */}
        <FadeInView>
          <div className="relative rounded-[2rem] overflow-hidden">
            {/* Animated gradient border */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 animate-gradient rounded-[2rem]" />
            <div className="relative m-[2px] rounded-[calc(2rem-2px)] bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-8 sm:p-12 text-white">
              <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[80px] pointer-events-none" />
              
              <div className="relative z-10 max-w-4xl">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] text-indigo-300 text-xs font-bold uppercase tracking-wider mb-5 border border-white/[0.08]">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Professional Ethics</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-4">
                  Our Core Commitment
                </h3>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed italic mb-8">
                  "{companyDetails.commitment}"
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/[0.06]">
                  {["Transparent Scope of Work", "Responsible Coordination", "Licensed Professional Sign-offs"].map(item => (
                    <div key={item} className="flex items-center gap-2.5 text-xs text-indigo-200">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400"></span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}

