import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, FileText, ChevronRight, ArrowRight } from 'lucide-react';
import Logo from './Logo';
import { companyDetails } from '../data/prospectusData';

export default function Header({ onOpenProspectus, onBookConsultation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Approach", href: "#approach" },
    { name: "Services", href: "#services" },
    { name: "Industries", href: "#industries" },
    { name: "Why Us", href: "#why-choose" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'py-2.5' 
            : 'py-4'
        }`}
      >
        <div className={`mx-auto transition-all duration-500 ${
          isScrolled 
            ? 'max-w-6xl mx-4 sm:mx-auto rounded-2xl bg-white/80 backdrop-blur-xl shadow-lg shadow-slate-900/5 border border-white/50 px-5' 
            : 'max-w-7xl px-4 sm:px-6 lg:px-8 bg-transparent'
        }`}>
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <a href="#" className="flex items-center">
              <Logo light={!isScrolled} showTagline={false} />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 rounded-lg text-[13px] font-medium transition-all duration-200 ${
                    isScrolled 
                      ? 'text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/60' 
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="hidden sm:flex items-center gap-2.5">
              <a
                href={`tel:${companyDetails.contact.phoneClean}`}
                className={`hidden xl:flex items-center gap-2 text-xs font-semibold px-3.5 py-2 rounded-xl transition-all ${
                  isScrolled 
                    ? 'text-slate-600 hover:text-indigo-600 border border-slate-200 hover:border-indigo-200 hover:bg-indigo-50/50' 
                    : 'text-indigo-200 border border-indigo-800/40 bg-white/[0.04] hover:bg-white/[0.08]'
                }`}
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{companyDetails.contact.phone}</span>
              </a>

              <button
                onClick={onOpenProspectus}
                className={`flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-xl transition-all ${
                  isScrolled
                    ? 'text-indigo-600 bg-indigo-50 hover:bg-indigo-100'
                    : 'text-indigo-200 bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.08]'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Prospectus</span>
              </button>

              <motion.button
                onClick={onBookConsultation}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white shadow-md shadow-indigo-600/20 transition-all"
              >
                <span>Consult</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </motion.button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2.5 rounded-xl transition-colors lg:hidden ${
                isScrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-slate-200 hover:bg-white/[0.06]'
              }`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-4/5 max-w-sm bg-white p-6 shadow-2xl flex flex-col justify-between overflow-y-auto lg:hidden"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <Logo light={false} showTagline={true} />
                  <button onClick={() => setMobileMenuOpen(false)} className="p-2 rounded-xl hover:bg-slate-100">
                    <X className="w-5 h-5 text-slate-600" />
                  </button>
                </div>
                <div className="space-y-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="flex items-center justify-between py-3 px-3 rounded-xl text-base font-semibold text-slate-800 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-4 h-4 text-slate-300" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 space-y-3">
                <a
                  href={`tel:${companyDetails.contact.phoneClean}`}
                  className="flex items-center justify-center gap-2 text-sm font-semibold text-slate-700 py-3 bg-slate-50 rounded-2xl"
                >
                  <Phone className="w-4 h-4 text-indigo-600" />
                  <span>{companyDetails.contact.phone}</span>
                </a>
                <button
                  onClick={() => { setMobileMenuOpen(false); onBookConsultation(); }}
                  className="w-full py-3.5 text-center text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-2xl shadow-lg shadow-indigo-600/25"
                >
                  Book Free Consultation
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

