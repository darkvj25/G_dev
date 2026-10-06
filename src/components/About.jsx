import React from 'react';
import { Code, Palette, Zap, Target, Shield, Check } from 'lucide-react';
import { companyInfo } from '../data/company';

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-[#090D16] border-y border-white/5 overflow-hidden">
      {/* Decorative ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase">
            <span>About Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Who We Are
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A specialized two-person digital agency where programming architecture and human-centered design unite.
          </p>
        </div>

        {/* Visual Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">

          {/* Left Column: Company Story & Vision */}
          <div className="lg:col-span-6 flex flex-col justify-between glass-card p-8 rounded-2xl border border-slate-800 space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Synergy of Programming & UI/UX Design
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {companyInfo.description}
              </p>
              <p className="text-slate-400 leading-relaxed text-sm">
                We believe software shouldn't just work behind the scenes — it must also feel effortless to operate. By eliminating unnecessary overhead and managing every phase directly, we deliver high-value custom solutions built for real operational efficiency.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-800">
              <div className="flex items-center gap-3 text-slate-300 text-sm">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Direct collaboration with the actual lead developer and UI designer</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300 text-sm">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Tailored software solutions built from scratch to your specifications</span>
              </div>
            </div>
          </div>

          {/* Right Column: Two Primary Pillars (DEVELOPMENT + DESIGN) */}
          <div className="lg:col-span-6 grid grid-cols-1 gap-6">

            {/* Development Card */}
            <div className="glass-card p-8 rounded-2xl border border-slate-800 relative group overflow-hidden hover:border-blue-500/50 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full pointer-events-none group-hover:bg-blue-500/20 transition-all"></div>
              <div className="flex items-start gap-5">
                <div className="p-3.5 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 group-hover:scale-110 transition-transform">
                  <Code className="w-7 h-7" />
                </div>
                <div className="space-y-2">
                  <div className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase">PILLAR 01</div>
                  <h4 className="text-xl font-bold text-white">DEVELOPMENT</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    “Powerful functionality, reliable systems, clean architecture, and scalable solutions.”
                  </p>
                  <div className="pt-2 flex flex-wrap gap-2">
                    <span className="text-[11px] px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700 font-mono">React / JS</span>
                    <span className="text-[11px] px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700 font-mono">PHP & MySQL</span>
                    <span className="text-[11px] px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700 font-mono">Java Systems</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Design Card */}
            <div className="glass-card p-8 rounded-2xl border border-slate-800 relative group overflow-hidden hover:border-indigo-500/50 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-bl-full pointer-events-none group-hover:bg-indigo-500/20 transition-all"></div>
              <div className="flex items-start gap-5">
                <div className="p-3.5 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 group-hover:scale-110 transition-transform">
                  <Palette className="w-7 h-7" />
                </div>
                <div className="space-y-2">
                  <div className="text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase">PILLAR 02</div>
                  <h4 className="text-xl font-bold text-white">DESIGN</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    “Intuitive interfaces, modern visual design, and user-centered experiences.”
                  </p>
                  <div className="pt-2 flex flex-wrap gap-2">
                    <span className="text-[11px] px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700 font-mono">UI/UX Systems</span>
                    <span className="text-[11px] px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700 font-mono">Figma Wireframing</span>
                    <span className="text-[11px] px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700 font-mono">Mobile & Web UI</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {companyInfo.stats.map((stat, idx) => (
            <div key={idx} className="glass-card p-6 rounded-xl border border-slate-800/80 text-center space-y-1 hover:border-blue-500/40 transition-all">
              <div className="text-3xl sm:text-4xl font-extrabold text-gradient">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200">
                {stat.label}
              </div>
              {stat.suffix && (
                <div className="text-[11px] text-slate-400 font-medium">
                  {stat.suffix}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
