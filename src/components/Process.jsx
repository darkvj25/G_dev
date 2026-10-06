import React from 'react';
import {
  Search,
  Compass,
  PenTool,
  Code,
  CheckCircle2,
  Rocket
} from 'lucide-react';
import { processSteps } from '../data/process';

const iconMap = {
  Search: Search,
  Compass: Compass,
  PenTool: PenTool,
  Code: Code,
  CheckCircle2: CheckCircle2,
  Rocket: Rocket
};

export default function Process() {
  return (
    <section id="process" className="py-24 relative bg-[#0B0F17] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase">
            <span>Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Our Process
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A structured 6-step engineering methodology that transforms initial concepts into production-ready software.
          </p>
        </div>

        {/* Timeline Grid (Desktop Horizontal Flow / Mobile Vertical Stack) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative">

          {processSteps.map((item, index) => {
            const IconComponent = iconMap[item.iconName] || Code;

            return (
              <div
                key={item.step}
                className="glass-card p-6 rounded-2xl border border-slate-800/80 flex flex-col justify-between group hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 relative"
              >
                {/* Connector Line on Desktop */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-3 w-6 h-[2px] bg-gradient-to-r from-blue-500/50 to-transparent z-20 pointer-events-none"></div>
                )}

                <div className="space-y-4">
                  {/* Step Header */}
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-mono font-extrabold text-blue-500/80 group-hover:text-cyan-400 transition-colors">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-blue-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shadow-md">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-[11px] font-mono text-cyan-400 block mt-0.5">
                      {item.subtitle}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Progress Indicator */}
                <div className="pt-4 border-t border-slate-800/80 mt-4 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                  <span>PHASE {item.step}</span>
                  <span className="w-2 h-2 rounded-full bg-blue-500/50 group-hover:bg-cyan-400 transition-colors"></span>
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
