import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { FadeInView } from './ui';

export default function CTABanner({ onBookConsultation }) {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInView>
          <div className="relative rounded-[2.5rem] overflow-hidden">
            {/* Animated gradient background */}
            <div 
              className="absolute inset-0 animate-gradient"
              style={{
                background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 25%, #6366f1 50%, #a855f7 75%, #4f46e5 100%)',
                backgroundSize: '300% 300%',
              }}
            />
            
            {/* Overlay pattern */}
            <div 
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
                backgroundSize: '24px 24px'
              }}
            />

            {/* Glow orbs */}
            <div className="absolute top-0 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-indigo-300/10 rounded-full blur-[80px]" />

            {/* Content */}
            <div className="relative z-10 px-8 sm:px-16 py-16 sm:py-20 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl mx-auto"
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/80 text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Ready to Get Started?</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
                  Let's Build What{' '}
                  <span className="underline decoration-white/30 underline-offset-4 decoration-wavy">
                    Comes Next
                  </span>
                </h2>
                
                <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-8 max-w-lg mx-auto">
                  Your business has its own journey. Let Growthera Ventures support you with the right guidance, documentation and business solutions.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <motion.button
                    onClick={onBookConsultation}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-white text-indigo-700 font-bold text-sm shadow-xl hover:shadow-2xl transition-all"
                  >
                    <span>Book Free Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>

                  <a
                    href="tel:+919810924009"
                    className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl text-white/90 hover:text-white font-semibold text-sm bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur-sm transition-all"
                  >
                    Call +91 98109 24009
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}

