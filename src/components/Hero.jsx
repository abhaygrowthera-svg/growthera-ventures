import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  Wallet, 
  ShieldCheck, 
  TrendingUp, 
  ArrowRight, 
  FileText, 
  Sparkles, 
  CheckCircle2, 
  Globe2, 
  Landmark,
  ChevronDown
} from 'lucide-react';
import { companyDetails, corePillars } from '../data/prospectusData';

const pillarIcons = [Building2, Wallet, ShieldCheck, TrendingUp];

const hexNodes = [
  { id: 0, title: "Business Consulting", icon: Building2, desc: "Pvt Ltd, LLP, Strategy & Structuring" },
  { id: 1, title: "Funding Assistance", icon: Wallet, desc: "PMEGP, Stand-Up India, DPR & Loans" },
  { id: 2, title: "Compliance Support", icon: ShieldCheck, desc: "GST, ROC, ISO, Audit & Legal Contracts" },
  { id: 3, title: "Digital Growth", icon: TrendingUp, desc: "Web, Software, Custom CRM & Marketing" },
  { id: 4, title: "Government Tenders", icon: Landmark, desc: "GeM, Bid Documents, EMD & NSIC" },
  { id: 5, title: "Global Expansion", icon: Globe2, desc: "IEC Code, Export RCMC & Global Markets" }
];

export default function Hero({ onOpenProspectus, onOpenWizard }) {
  const [activeHex, setActiveHex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Auto-rotate hexagon nodes
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveHex(prev => (prev + 1) % hexNodes.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
    });
  };

  return (
    <section 
      className="relative min-h-screen pt-24 pb-20 overflow-hidden flex items-center"
      onMouseMove={handleMouseMove}
      style={{
        background: 'linear-gradient(135deg, #0c0a24 0%, #120f35 30%, #1a1452 60%, #0f0d2a 100%)',
      }}
    >
      {/* ===== LAYERED BACKGROUND EFFECTS ===== */}

      {/* Animated mesh gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
        animate={{
          x: mousePos.x * 2,
          y: mousePos.y * 2,
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
        animate={{
          x: mousePos.x * -1.5,
          y: mousePos.y * -1.5,
          scale: [1, 1.08, 1],
        }}
        transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
      />

      {/* Subtle dot pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}
      />

      {/* Corner geometric triangles (matching PDF branding) */}
      <div className="absolute top-0 right-0 w-80 h-80 pointer-events-none opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient id="triGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <polygon points="100,0 100,100 0,0" fill="url(#triGrad1)" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-64 h-64 pointer-events-none opacity-15">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon points="0,100 100,100 0,0" fill="url(#triGrad1)" />
        </svg>
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-indigo-400/30 pointer-events-none"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}

      {/* ===== MAIN CONTENT ===== */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.1] backdrop-blur-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-400"></span>
                </span>
                <span className="text-indigo-200 text-xs font-semibold tracking-wider uppercase">
                  Official Company Prospectus
                </span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-4"
            >
              <p className="text-sm font-bold tracking-[0.35em] uppercase text-indigo-400/80">
                COMPANY PROSPECTUS
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight leading-[1.1] text-white">
                Fueling Ambitions{' '}
                <br className="hidden sm:block" />
                That Drive the{' '}
                <span className="text-gradient-light">
                  Future of Business
                </span>
              </h1>
            </motion.div>

            {/* Slogan */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="border-l-2 border-indigo-500/60 pl-5 py-1 space-y-2"
            >
              <p className="text-lg sm:text-xl font-semibold text-indigo-100">
                {companyDetails.slogan}
              </p>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl">
                {companyDetails.subtitle}
              </p>
            </motion.div>

            {/* 4 Core Pillar Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3"
            >
              {corePillars.map((pillar, i) => {
                const Icon = pillarIcons[i];
                return (
                  <motion.div
                    key={pillar.title}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="relative p-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:border-indigo-500/40 hover:bg-white/[0.08] transition-colors cursor-default group overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10">
                      <div className="w-9 h-9 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-300 mb-2.5 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                        <Icon className="w-4.5 h-4.5" />
                      </div>
                      <div className="text-xs font-bold text-white leading-tight">{pillar.title}</div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <motion.a
                href="#services"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-bold text-sm shadow-xl shadow-indigo-600/25 hover:shadow-indigo-500/40 transition-all"
              >
                <span>Explore 12 Core Services</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.button
                onClick={onOpenWizard}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2.5 px-6 py-4 rounded-2xl bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/[0.12] hover:border-white/[0.2] font-semibold text-sm backdrop-blur-sm transition-all"
              >
                <Sparkles className="w-4 h-4 text-indigo-300" />
                <span>Service Matcher</span>
              </motion.button>

              <motion.button
                onClick={onOpenProspectus}
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center gap-2 px-4 py-4 rounded-2xl text-indigo-300 hover:text-white text-sm font-medium hover:bg-white/[0.05] transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>Full Prospectus</span>
              </motion.button>
            </motion.div>

            {/* Trust Markers */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-indigo-300/70"
            >
              {["Structured Documentation", "End-to-End Coordination", "Pan-India Assistance"].map((item) => (
                <div key={item} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400/70" />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT COLUMN – Interactive Constellation */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-full max-w-md mx-auto aspect-square flex items-center justify-center p-4"
            >
              {/* Dashed orbit ring */}
              <motion.div 
                className="absolute inset-4 rounded-full border border-dashed border-indigo-500/15"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              />
              <div className="absolute inset-12 rounded-full border border-indigo-500/10" />

              {/* Center Brand Shield */}
              <motion.div 
                className="relative z-20 w-32 h-36 rounded-3xl overflow-hidden shadow-2xl shadow-indigo-500/30 animate-pulse-glow"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-600/80 to-indigo-950 p-[1.5px] rounded-3xl">
                  <div className="w-full h-full bg-[#120F34] rounded-3xl p-4 flex flex-col items-center justify-center text-center">
                    <div className="w-14 h-14 flex items-center justify-center mb-1.5">
                      <svg viewBox="0 0 100 115" className="w-full h-full" fill="none">
                        <defs>
                          <linearGradient id="heroShield" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#6366f1" />
                            <stop offset="100%" stopColor="#a855f7" />
                          </linearGradient>
                        </defs>
                        <path d="M50 4 L92 27 L92 78 L50 110 L8 78 L8 27 Z" fill="url(#heroShield)" stroke="#818CF8" strokeWidth="3" />
                        <path d="M52 25 C66 25 74 34 74 48 C74 62 64 71 50 71 C38 71 30 63 30 50 C30 38 38 32 48 32" fill="none" stroke="#FFFFFF" strokeWidth="7" strokeLinecap="round" />
                        <path d="M48 50 L68 50" stroke="#FFFFFF" strokeWidth="7" strokeLinecap="round" />
                      </svg>
                    </div>
                    <span className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-white">GROWTHERA</span>
                    <span className="text-[9px] font-bold text-indigo-400 uppercase tracking-widest">VENTURES</span>
                  </div>
                </div>
              </motion.div>

              {/* Orbiting Nodes */}
              {hexNodes.map((node, idx) => {
                const angle = (idx * (360 / hexNodes.length) - 90) * (Math.PI / 180);
                const radius = 140;
                const x = Math.round(Math.cos(angle) * radius);
                const y = Math.round(Math.sin(angle) * radius);
                const NodeIcon = node.icon;
                const isSelected = activeHex === idx;

                return (
                  <motion.button
                    key={node.id}
                    onClick={() => setActiveHex(idx)}
                    style={{ transform: `translate(${x}px, ${y}px)` }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ 
                      opacity: 1, 
                      scale: isSelected ? 1.15 : 1,
                    }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3, delay: 0.5 + idx * 0.08 }}
                    className={`absolute z-30 w-[4.2rem] h-[4.2rem] rounded-2xl transition-all duration-300 group ${
                      isSelected 
                        ? 'shadow-xl shadow-indigo-500/40 ring-2 ring-indigo-400/70' 
                        : 'opacity-80 hover:opacity-100'
                    }`}
                    title={node.title}
                  >
                    <div className={`w-full h-full rounded-2xl flex flex-col items-center justify-center p-2 text-center transition-all duration-300 ${
                      isSelected 
                        ? 'bg-indigo-600/30 border border-indigo-400/60 backdrop-blur-sm' 
                        : 'bg-white/[0.04] border border-white/[0.1] hover:bg-white/[0.08] backdrop-blur-sm'
                    }`}>
                      <NodeIcon className={`w-5 h-5 mb-0.5 transition-colors ${
                        isSelected ? 'text-indigo-200' : 'text-slate-400 group-hover:text-indigo-300'
                      }`} />
                      <span className="text-[9px] font-bold text-white/90 line-clamp-1 leading-tight">
                        {node.title.split(' ')[0]}
                      </span>
                    </div>
                  </motion.button>
                );
              })}

              {/* Connecting lines (SVG) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="-200 -200 400 400">
                {hexNodes.map((_, idx) => {
                  const angle = (idx * (360 / hexNodes.length) - 90) * (Math.PI / 180);
                  const x = Math.round(Math.cos(angle) * 140);
                  const y = Math.round(Math.sin(angle) * 140);
                  return (
                    <line
                      key={idx}
                      x1="0" y1="0" x2={x} y2={y}
                      stroke={activeHex === idx ? 'rgba(129, 140, 248, 0.25)' : 'rgba(99, 102, 241, 0.08)'}
                      strokeWidth={activeHex === idx ? 1.5 : 0.5}
                      strokeDasharray={activeHex === idx ? 'none' : '4 4'}
                      className="transition-all duration-300"
                    />
                  );
                })}
              </svg>
            </motion.div>

            {/* Active Node Info Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeHex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-sm mt-6 p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm text-left"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider">
                    {hexNodes[activeHex].title}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-900/50 text-indigo-300 border border-indigo-700/30">
                    {String(activeHex + 1).padStart(2, '0')} / 06
                  </span>
                </div>
                <p className="text-xs text-slate-400">{hexNodes[activeHex].desc}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <a href="#about" className="flex flex-col items-center gap-1 text-indigo-400/50 hover:text-indigo-400 transition-colors">
          <span className="text-[10px] font-semibold uppercase tracking-widest">Explore</span>
          <ChevronDown className="w-4 h-4" />
        </a>
      </motion.div>
    </section>
  );
}

