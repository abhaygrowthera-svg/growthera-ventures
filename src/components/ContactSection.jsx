import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Globe, Send, CheckCircle, Clock, 
  Copy, Check 
} from 'lucide-react';
import { companyDetails, allServices, businessStages } from '../data/prospectusData';
import { FadeInView, SectionHeader } from './ui';

export default function ContactSection({ prefilledData }) {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', companyName: '',
    selectedService: '', businessStage: 'START', message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (prefilledData) {
      setFormData(prev => ({
        ...prev,
        selectedService: prefilledData.serviceTitle || prev.selectedService,
        businessStage: prefilledData.stage ? prefilledData.stage.split(' ')[1] : prev.businessStage,
        message: prefilledData.note || prev.message
      }));
    }
  }, [prefilledData]);

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) { alert("Please fill required fields."); return; }
    setSubmitted(true);
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(companyDetails.contact.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const contactItems = [
    { icon: Phone, label: "Phone", value: companyDetails.contact.phone, href: `tel:${companyDetails.contact.phoneClean}` },
    { icon: Mail, label: "Email", value: companyDetails.contact.email, href: `mailto:${companyDetails.contact.email}` },
    { icon: Globe, label: "Website", value: companyDetails.contact.website, href: companyDetails.contact.domainUrl },
  ];

  return (
    <section id="contact" className="relative py-24 lg:py-32 mesh-gradient-2 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          eyebrow="Connect With Us"
          title={<>THANK <span className="text-gradient">YOU</span></>}
          subtitle="Your business has its own journey. Let Growthera Ventures support you with the right guidance, documentation and business solutions."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start text-left">
          
          {/* Left: Contact Card */}
          <FadeInView direction="left" className="lg:col-span-5 space-y-5">
            <div className="relative rounded-[2rem] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-indigo-700 to-slate-900" />
              <div className="absolute top-0 right-0 w-56 h-56 bg-purple-500/15 rounded-full blur-[80px]" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-400/10 rounded-full blur-[60px]" />
              
              <div className="relative z-10 p-8 sm:p-10 text-white">
                <h4 className="text-xs font-bold uppercase tracking-widest text-indigo-200 mb-8">Official Coordinates</h4>

                <div className="space-y-6">
                  {contactItems.map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex items-start gap-4 group">
                      <div className="w-11 h-11 rounded-xl bg-white/[0.08] flex items-center justify-center text-indigo-300 flex-shrink-0 group-hover:bg-white/[0.15] transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-semibold text-indigo-200/70 block">{label}</span>
                        <a href={href} target={label === 'Website' ? '_blank' : undefined} rel="noreferrer"
                           className="text-base font-bold text-white hover:text-indigo-200 transition-colors break-all">
                          {value}
                        </a>
                      </div>
                    </div>
                  ))}

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-white/[0.08] flex items-center justify-center text-indigo-300 flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold text-indigo-200/70 block">Address</span>
                      <p className="text-sm text-slate-200 leading-relaxed mb-2">{companyDetails.contact.address}</p>
                      <button onClick={handleCopyAddress}
                        className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-indigo-300 hover:text-white bg-white/[0.06] px-3 py-1.5 rounded-lg hover:bg-white/[0.12] transition-colors">
                        {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                        {copied ? "Copied!" : "Copy Address"}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-6 border-t border-white/[0.08]">
                  <p className="text-xs text-indigo-200/60 italic leading-relaxed">
                    "Connect with us to discuss your business requirements and explore the right solutions for your next stage of growth."
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-100 shadow-xs flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-800 block">Office Hours</span>
                <span className="text-xs text-slate-500">{companyDetails.contact.workingHours}</span>
              </div>
            </div>
          </FadeInView>

          {/* Right: Form */}
          <FadeInView direction="right" className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-[2rem] bg-white border border-slate-100 shadow-lg">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center space-y-5"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-white flex items-center justify-center mx-auto shadow-lg shadow-emerald-600/20">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-extrabold text-slate-900">Request Received!</h4>
                  <p className="text-slate-500 text-sm max-w-md mx-auto">
                    Thank you, <strong className="text-slate-800">{formData.name}</strong>. We'll contact you at <strong className="text-slate-800">{formData.phone}</strong>.
                  </p>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 max-w-xs mx-auto text-xs text-slate-500">
                    Reference: <strong className="text-slate-800 font-mono">GT-{(Date.now() % 1000000).toString().padStart(6, '0')}</strong>
                  </div>
                  <button onClick={() => setSubmitted(false)} className="text-xs font-bold text-indigo-600 hover:underline mt-2">
                    Send Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-slate-100 pb-4 mb-2">
                    <h4 className="text-xl font-extrabold text-slate-900">Schedule a Consultation</h4>
                    <p className="text-xs text-slate-400 mt-1">Structured guidance for registrations, funding, tax & digital solutions.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { name: 'name', label: 'Full Name *', type: 'text', placeholder: 'e.g. Rahul Sharma', required: true },
                      { name: 'phone', label: 'Mobile *', type: 'tel', placeholder: 'e.g. +91 98100 00000', required: true },
                      { name: 'email', label: 'Email *', type: 'email', placeholder: 'e.g. rahul@company.com', required: true },
                      { name: 'companyName', label: 'Company Name', type: 'text', placeholder: 'e.g. Nexus Enterprises' },
                    ].map(f => (
                      <div key={f.name}>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">{f.label}</label>
                        <input type={f.type} name={f.name} required={f.required} placeholder={f.placeholder}
                          value={formData[f.name]} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm transition-all" />
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Primary Service</label>
                      <select name="selectedService" value={formData.selectedService} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm">
                        <option value="">-- Select Service --</option>
                        {allServices.map(s => <option key={s.id} value={s.title}>{s.pageNumber}. {s.title}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Business Stage</label>
                      <select name="businessStage" value={formData.businessStage} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm">
                        {businessStages.map(s => <option key={s.step} value={s.name}>Stage {s.step}: {s.name}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Requirements</label>
                    <textarea name="message" rows="3" placeholder="Describe your business and requirements..."
                      value={formData.message} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm" />
                  </div>

                  <motion.button type="submit" whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}
                    className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-bold text-sm uppercase tracking-wider shadow-xl shadow-indigo-600/20 transition-all">
                    <span>Submit Consultation Request</span>
                    <Send className="w-4 h-4" />
                  </motion.button>
                </form>
              )}
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}

