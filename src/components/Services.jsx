import React from 'react';
import {
  Globe,
  Cpu,
  ShoppingBag,
  Layout,
  Database,
  Wrench,
  Smartphone,
  Code,
  ArrowUpRight
} from 'lucide-react';
import { services } from '../data/services';

const iconMap = {
  Globe: Globe,
  Cpu: Cpu,
  ShoppingBag: ShoppingBag,
  Layout: Layout,
  Database: Database,
  Wrench: Wrench,
  Smartphone: Smartphone,
  Code: Code
};

export default function Services() {
  const handleContactClick = () => {
    const el = document.querySelector('#contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 relative bg-[#0B0F17] overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-600/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase">
            <span>Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            What We Do
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            End-to-end digital capabilities spanning full-stack programming, business management systems, and high-impact UI/UX design.
          </p>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const IconComponent = iconMap[service.iconName] || Code;

            return (
              <div
                key={service.number}
                className="glass-card p-6 rounded-2xl border border-slate-800/80 flex flex-col justify-between group hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 relative"
              >
                <div>
                  {/* Card Header: Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-mono font-extrabold text-slate-600 group-hover:text-blue-400 transition-colors">
                      {service.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 text-blue-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-md">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Feature Bullets */}
                  <ul className="space-y-2 mb-6 pt-4 border-t border-slate-800/80">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="text-slate-400 text-xs flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA Action Link */}
                <button
                  onClick={handleContactClick}
                  className="w-full pt-4 border-t border-slate-800 text-left text-xs font-semibold text-blue-400 flex items-center justify-between group-hover:text-cyan-300 transition-colors"
                >
                  <span>Request Solution</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
