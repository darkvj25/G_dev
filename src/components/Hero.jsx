import React, { useState } from 'react';
import { ArrowRight, Users, Code2, Layout, Terminal, CheckCircle2, Sparkles, Database, Layers } from 'lucide-react';
import { companyInfo } from '../data/company';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('code'); // 'code' or 'design'

  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-radial-gradient">
      {/* Background Decorative Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-blue-600/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-0 sm:right-10 w-[280px] sm:w-[400px] h-[280px] sm:h-[400px] bg-indigo-600/10 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none"></div>
      <div className="absolute inset-0 w-full h-full bg-grid-pattern opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Copywriting & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">

            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wide">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping"></span>
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Full-Stack Development & UI/UX Design Agency</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              <span className="block">{companyInfo.name}</span>
              <span className="text-gradient block mt-1">
                {companyInfo.alternativeTagline}
              </span>
            </h1>

            {/* Subtitle / Tagline Badge */}
            <p className="text-lg sm:text-xl font-medium text-blue-300/90 italic">
              “{companyInfo.tagline}”
            </p>

            {/* Supporting Description */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {companyInfo.description}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll('#projects');
                }}
                className="btn-primary w-full sm:w-auto text-center flex items-center justify-center gap-2 group text-sm"
              >
                <span>View Our Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#team"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll('#team');
                }}
                className="btn-secondary w-full sm:w-auto text-center flex items-center justify-center gap-2 text-sm"
              >
                <Users className="w-4 h-4 text-blue-400" />
                <span>Meet The Team</span>
              </a>
            </div>

            {/* Key Value Highlights */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Websites & Web Apps</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Custom Systems & POS</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>100% Customized Solutions</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Code & UI Design Showcase Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">

              {/* Outer Card Glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 opacity-30 blur-lg transition duration-500 group-hover:opacity-100"></div>

              {/* Main Visual Window */}
              <div className="relative rounded-2xl bg-[#0F172A] border border-slate-700/80 shadow-2xl overflow-hidden">

                {/* Window Header / Tabs */}
                <div className="bg-[#090D16] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    <span className="text-xs text-slate-400 font-mono ml-2">g-dev-engine.jsx</span>
                  </div>

                  {/* Toggle Mode Buttons */}
                  <div className="flex items-center bg-slate-900/90 p-1 rounded-lg border border-slate-800">
                    <button
                      onClick={() => setActiveTab('code')}
                      className={`px-2.5 py-1 rounded text-[11px] font-mono flex items-center gap-1.5 transition-all ${
                        activeTab === 'code'
                          ? 'bg-blue-600 text-white font-semibold shadow'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <Code2 className="w-3 h-3" />
                      <span>Code</span>
                    </button>
                    <button
                      onClick={() => setActiveTab('design')}
                      className={`px-2.5 py-1 rounded text-[11px] font-mono flex items-center gap-1.5 transition-all ${
                        activeTab === 'design'
                          ? 'bg-indigo-600 text-white font-semibold shadow'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <Layout className="w-3 h-3" />
                      <span>UI Design</span>
                    </button>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-5 font-mono text-xs leading-relaxed min-h-[310px] flex flex-col justify-between">
                  {activeTab === 'code' ? (
                    <div className="space-y-2 text-slate-300">
                      <div className="flex items-center gap-2 text-slate-500 pb-2 border-b border-slate-800/80">
                        <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                        <span>// Lead Developer: Van Jasper Benzon</span>
                      </div>
                      <p className="text-purple-400">
                        <span className="text-blue-400">import</span> &#123; SystemArchitecture, Database &#125; <span className="text-blue-400">from</span> <span className="text-emerald-300">'@g-dev/core'</span>;
                      </p>
                      <p className="pt-1">
                        <span className="text-blue-400">const</span> <span className="text-yellow-300">GDevSolution</span> = () =&gt; &#123;
                      </p>
                      <p className="pl-4">
                        <span className="text-blue-400">const</span> stack = [<span className="text-emerald-300">'React'</span>, <span className="text-emerald-300">'PHP'</span>, <span className="text-emerald-300">'MySQL'</span>, <span className="text-emerald-300">'Java'</span>];
                      </p>
                      <p className="pl-4">
                        <span className="text-blue-400">return</span> (
                      </p>
                      <p className="pl-8 text-cyan-300">
                        &lt;<span className="text-blue-400">CustomApp</span> status=<span className="text-emerald-300">"Production-Ready"</span> efficiency=<span className="text-yellow-400">100</span> /&gt;
                      </p>
                      <p className="pl-4">);</p>
                      <p>&#125;;</p>
                      <div className="pt-3 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-800/80">
                        <span className="flex items-center gap-1.5 text-emerald-400">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                          Build: Passed (0 errors)
                        </span>
                        <span className="text-slate-500">v2.4.0</span>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3 font-sans text-slate-200">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
                        <div className="flex items-center gap-2">
                          <Layers className="w-4 h-4 text-indigo-400" />
                          <span className="font-semibold text-sm">Design System Matrix</span>
                        </div>
                        <span className="text-[10px] bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded border border-indigo-500/30">
                          Figma Master
                        </span>
                      </div>

                      {/* Mock UI Element */}
                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-slate-300">POS Sales Dashboard</span>
                          <span className="text-[10px] text-emerald-400 font-mono">+24.8% Live</span>
                        </div>
                        <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 w-3/4 rounded-full"></div>
                        </div>
                        <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                          <span>Usability Score: 98/100</span>
                          <span>Dark Aesthetic</span>
                        </div>
                      </div>

                      {/* Color Palette Indicators */}
                      <div className="grid grid-cols-4 gap-2 pt-1">
                        <div className="h-8 rounded-lg bg-[#0B0F17] border border-slate-700 flex items-center justify-center text-[9px] text-slate-400 font-mono">#0B0F17</div>
                        <div className="h-8 rounded-lg bg-[#2563EB] flex items-center justify-center text-[9px] text-white font-mono">#2563EB</div>
                        <div className="h-8 rounded-lg bg-[#8B5CF6] flex items-center justify-center text-[9px] text-white font-mono">#8B5CF6</div>
                        <div className="h-8 rounded-lg bg-[#06B6D4] flex items-center justify-center text-[9px] text-slate-950 font-semibold font-mono">#06B6D4</div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Floating Stats Pill */}
                <div className="bg-[#090D16] p-3 border-t border-slate-800 flex items-center justify-around text-center text-xs text-slate-300">
                  <div>
                    <span className="block text-blue-400 font-bold text-sm">DEV</span>
                    <span className="text-[10px] text-slate-400">Logic & DB</span>
                  </div>
                  <div className="h-6 w-px bg-slate-800"></div>
                  <div>
                    <span className="block text-indigo-400 font-bold text-sm">+</span>
                    <span className="text-[10px] text-slate-400">Seamless</span>
                  </div>
                  <div className="h-6 w-px bg-slate-800"></div>
                  <div>
                    <span className="block text-cyan-400 font-bold text-sm">DESIGN</span>
                    <span className="text-[10px] text-slate-400">UI/UX Flow</span>
                  </div>
                </div>

              </div>

              {/* Floating Mini Overlay Badges */}
              <div className="hidden lg:flex absolute -bottom-5 -left-6 glass-panel px-4 py-2.5 rounded-xl border border-white/10 shadow-xl items-center gap-3 animate-float">
                <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                  <Database className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Database & Systems</div>
                  <div className="text-[10px] text-slate-400">MySQL / PHP / Java / React</div>
                </div>
              </div>

              <div className="hidden lg:flex absolute -top-6 -right-6 glass-panel px-4 py-2.5 rounded-xl border border-white/10 shadow-xl items-center gap-3 animate-float" style={{ animationDelay: '2s' }}>
                <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400">
                  <Layout className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Responsive UI/UX</div>
                  <div className="text-[10px] text-slate-400">Figma & Design Systems</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
