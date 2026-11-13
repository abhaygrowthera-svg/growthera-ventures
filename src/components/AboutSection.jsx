import React from 'react';
import { 
  CheckCircle2, Target, Eye, Compass, ShieldCheck, Lightbulb, 
  Users, Award, HeartHandshake, CheckSquare, Sparkles 
} from 'lucide-react';
import { whatWeFocusOn, visionMission } from '../data/prospectusData';
import { FadeInView, StaggerContainer, StaggerItem, SectionHeader, Badge } from './ui';

export default function AboutSection() {
  const valueIcons = {
    "Integrity": ShieldCheck, "Innovation": Lightbulb, "Collaboration": Users,
    "Excellence": Award, "Client Focus": HeartHandshake, "Accountability": CheckSquare
  };

  return (
    <section id="about" className="relative py-24 lg:py-32 mesh-gradient-2 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          eyebrow="About Us"
          title="Your Trusted Partner in Business Growth"
          subtitle="Growthera Ventures Private Limited is a business consulting and growth solutions company committed to supporting entrepreneurs, startups, MSMEs and established organisations."
        />

        {/* Focus & Objective */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-24">
          <div className="lg:col-span-7 space-y-6">
            
            {/* What We Focus On */}
            <FadeInView delay={0.1}>
              <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-shadow duration-500">
                <Badge variant="primary" className="mb-6">What We Focus On</Badge>
                <ul className="space-y-4">
                  {whatWeFocusOn.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3.5 group">
                      <span className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm group-hover:scale-110 transition-transform">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </span>
                      <span className="text-slate-700 font-medium text-[15px] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInView>

            {/* Our Objective */}
            <FadeInView delay={0.2}>
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-900 text-white shadow-xl overflow-hidden group">
                <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-colors duration-700" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <Badge variant="dark" className="mb-5">Our Objective</Badge>
                  <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
                    Our objective is to simplify complex business processes, help organisations identify relevant opportunities and support informed business decisions through a structured, client-focused approach.
                  </p>
                </div>
              </div>
            </FadeInView>
          </div>

          {/* Right: Visual */}
          <FadeInView delay={0.3} direction="right" className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md p-10 rounded-[2rem] bg-gradient-to-b from-slate-50 to-indigo-50/50 border border-indigo-100/50 flex flex-col items-center justify-center">
              {/* Floating badges */}
              <div className="absolute top-8 left-6 p-2.5 rounded-2xl bg-white shadow-lg shadow-indigo-100/50 text-indigo-600 animate-float">
                <Users className="w-5 h-5" />
              </div>
              <div className="absolute top-10 right-8 p-2.5 rounded-2xl bg-white shadow-lg shadow-purple-100/50 text-purple-600 animate-float-delayed">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="absolute bottom-12 right-6 p-2.5 rounded-2xl bg-white shadow-lg shadow-indigo-100/50 text-indigo-600 animate-float-slow">
                <Target className="w-5 h-5" />
              </div>

              {/* Central card */}
              <div className="w-60 h-72 bg-white rounded-3xl shadow-xl border border-slate-100/80 p-5 flex flex-col justify-between items-center text-center">
                <div className="w-full flex items-center gap-1.5 pb-3 border-b border-slate-100">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-300"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-300"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-300"></div>
                </div>
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 flex items-center justify-center text-indigo-600 my-auto">
                  <Target className="w-10 h-10" />
                </div>
                <div className="w-full space-y-2 pt-2">
                  <div className="w-3/4 h-2.5 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full mx-auto"></div>
                  <div className="w-1/2 h-2 bg-slate-100 rounded-full mx-auto"></div>
                </div>
              </div>
              <p className="mt-5 text-xs font-bold text-slate-400 uppercase tracking-wider">Client-Focused Solutions</p>
            </div>
          </FadeInView>
        </div>

        {/* Vision, Mission & Values */}
        <div className="section-divider mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          <FadeInView delay={0.1}>
            <div className="h-full p-8 rounded-3xl bg-white border border-slate-100 shadow-sm card-hover">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-50 to-indigo-100 text-indigo-600 flex items-center justify-center mb-5">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 uppercase mb-3">Vision</h3>
              <p className="text-slate-500 leading-relaxed">{visionMission.vision}</p>
            </div>
          </FadeInView>
          <FadeInView delay={0.2}>
            <div className="h-full p-8 rounded-3xl bg-white border border-slate-100 shadow-sm card-hover">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 text-purple-600 flex items-center justify-center mb-5">
                <Compass className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 uppercase mb-3">Mission</h3>
              <p className="text-slate-500 leading-relaxed">{visionMission.mission}</p>
            </div>
          </FadeInView>
        </div>

        {/* Core Values */}
        <FadeInView>
          <Badge variant="primary" className="mb-6">Our Core Values</Badge>
        </FadeInView>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {visionMission.values.map((val) => {
            const Icon = valueIcons[val.title] || Sparkles;
            return (
              <StaggerItem key={val.title}>
                <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-xs card-hover glow-border group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 text-indigo-600 flex items-center justify-center group-hover:from-indigo-600 group-hover:to-purple-600 group-hover:text-white transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-slate-900">{val.title}</h4>
                  </div>
                  <p className="text-slate-500 text-sm pl-[3.25rem]">{val.description}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Promise */}
        <FadeInView>
          <div className="p-7 rounded-3xl bg-gradient-to-r from-indigo-50/80 to-purple-50/50 border border-indigo-100/60">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white flex-shrink-0 shadow-lg shadow-indigo-600/20">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-extrabold tracking-wider uppercase text-indigo-700 block mb-1.5">Our Promise</span>
                <p className="text-slate-700 text-[15px] font-medium italic leading-relaxed">
                  "We aim to build relationships based on clear communication, responsible execution and a genuine understanding of each organisation's needs."
                </p>
              </div>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}

