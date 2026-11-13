import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Lightbulb, Building, Coins, ShieldAlert, Rocket, 
  ArrowRight, CheckCircle, Info, ChevronRight 
} from 'lucide-react';
import { businessStages } from '../data/prospectusData';
import { FadeInView, SectionHeader, Badge } from './ui';

const stageIcons = { 1: Lightbulb, 2: Building, 3: Coins, 4: ShieldAlert, 5: Rocket };
const stageColors = {
  1: 'from-amber-500 to-orange-500',
  2: 'from-blue-500 to-indigo-500', 
  3: 'from-emerald-500 to-teal-500',
  4: 'from-rose-500 to-pink-500',
  5: 'from-purple-500 to-indigo-600'
};

const stageDeliverables = {
  1: ["Idea feasibility & market viability review", "Draft business model & proposition document", "Entity roadmap (Pvt Ltd vs LLP vs OPC)", "Financial estimation & funding prerequisites"],
  2: ["Company name approval & DIN/DSC filing", "Drafting MOA, AOA & partnership deeds", "Statutory registrations: PAN, TAN, GST, Udyam", "Bank account opening and formalization"],
  3: ["Government scheme identification (PMEGP, Stand-Up India)", "Detailed Project Reports (DPR) & CMA data prep", "Credit assessment & promoter contribution modeling", "Liaison with lending institutions & scheme portals"],
  4: ["Trademark & brand copyright applications", "Mandatory licenses: FSSAI, ISO, Shops & Establishments", "ROC annual filings & periodic tax documentation", "Vendor contracts, employment agreements & NDAs"],
  5: ["GeM seller registration & tender bid preparation", "Brand collateral, digital presence & high-converting website", "Custom ERP, CRM & operational workflow software", "Export documentation (IEC) & overseas market research"]
};

export default function BusinessApproach() {
  const [activeStage, setActiveStage] = useState(0);
  const currentStage = businessStages[activeStage];
  const CurrentIcon = stageIcons[currentStage.step];

  return (
    <section id="approach" className="relative py-24 lg:py-32 mesh-gradient-1 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          eyebrow="Our Business Approach"
          title="A Structured Path to Business Success"
          subtitle="Growthera supports organisations across five connected stages of their business journey."
        />

        {/* 5-Stage Selector */}
        <FadeInView>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 lg:gap-4 mb-12">
            {businessStages.map((stage, idx) => {
              const Icon = stageIcons[stage.step];
              const isSelected = activeStage === idx;
              return (
                <motion.button
                  key={stage.step}
                  onClick={() => setActiveStage(idx)}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  className={`p-5 rounded-2xl text-left transition-all duration-400 relative group flex flex-col justify-between overflow-hidden ${
                    isSelected
                      ? 'bg-gradient-to-br from-indigo-600 to-indigo-700 text-white shadow-xl shadow-indigo-600/25 ring-2 ring-indigo-400/50'
                      : 'bg-white text-slate-700 hover:bg-white border border-slate-200/80 shadow-sm hover:shadow-md'
                  }`}
                >
                  {isSelected && <div className="absolute inset-0 animate-shimmer" />}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-3.5">
                      <span className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-indigo-50 text-indigo-600'
                      }`}>
                        {stage.step}
                      </span>
                      <Icon className={`w-5 h-5 ${isSelected ? 'text-indigo-200' : 'text-slate-300 group-hover:text-indigo-500'} transition-colors`} />
                    </div>
                    <h3 className={`text-base font-extrabold tracking-tight mb-1 ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                      {stage.name}
                    </h3>
                    <p className={`text-xs line-clamp-2 ${isSelected ? 'text-indigo-100' : 'text-slate-400'}`}>
                      {stage.tagline}
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </FadeInView>

        {/* Active Stage Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-[2rem] p-8 sm:p-10 border border-slate-100 shadow-lg text-left"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-4">
                  <span className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${stageColors[currentStage.step]} text-white flex items-center justify-center font-black text-xl shadow-lg`}>
                    {currentStage.step}
                  </span>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-indigo-600">STAGE {currentStage.step} OF 05</span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      {currentStage.name} — {currentStage.tagline}
                    </h3>
                  </div>
                </div>
                <p className="text-slate-500 text-base leading-relaxed">{currentStage.desc}</p>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Scope & Deliverables:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {stageDeliverables[currentStage.step].map((item, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50/80 border border-slate-100 hover:border-indigo-200 transition-colors"
                      >
                        <CheckCircle className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm font-medium text-slate-700">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-gradient-to-br from-slate-50 to-indigo-50/50 rounded-2xl p-7 border border-indigo-100/50">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 mb-4 block">Recommended Services</span>
                <div className="space-y-2.5">
                  {currentStage.primaryServices.map((srv) => (
                    <div key={srv} className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-xs hover:border-indigo-400 hover:shadow-md transition-all">
                      <span className="text-xs font-bold text-slate-800">{srv}</span>
                      <a href="#services" className="text-xs font-semibold text-indigo-600 flex items-center gap-1 hover:text-indigo-800">
                        Details <ChevronRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  ))}
                </div>
                <div className="pt-6 mt-6 border-t border-indigo-100/60">
                  <a href="#contact" className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-semibold text-xs uppercase tracking-wider shadow-md shadow-indigo-600/20 transition-all">
                    <span>Inquire for Stage {currentStage.step}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <FadeInView delay={0.2}>
          <div className="mt-10 p-5 rounded-2xl bg-white border border-slate-200/80 text-left flex items-start gap-3.5 shadow-xs">
            <Info className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-slate-500 leading-relaxed">
              <strong className="text-slate-700">Please note:</strong> The right support depends on the organisation's stage, sector, eligibility and objectives.
            </p>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}

