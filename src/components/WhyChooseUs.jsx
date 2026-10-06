import React from 'react';
import {
  Sliders,
  UserCheck,
  Sparkles,
  Target,
  Layers,
  MessageSquare
} from 'lucide-react';
import { whyChooseReasons } from '../data/whyChooseUs';

const iconMap = {
  Sliders: Sliders,
  UserCheck: UserCheck,
  Sparkles: Sparkles,
  Target: Target,
  Layers: Layers,
  MessageSquare: MessageSquare
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 relative bg-[#090D16] border-y border-white/5 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-600/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase">
            <span>Value Proposition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Why Choose G-Dev Solution
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            We deliver the dedication of a tight-knit expert team with the engineering rigor of a digital agency.
          </p>
        </div>

        {/* 6 Reasons Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseReasons.map((reason, idx) => {
            const IconComponent = iconMap[reason.iconName] || Target;

            return (
              <div
                key={idx}
                className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800/80 group hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 text-blue-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-md">
                  <IconComponent className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                  {reason.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
