import React from 'react';
import { ArrowRight, MessageSquare, Sparkles, Send } from 'lucide-react';

export default function CTA() {
  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 relative bg-[#0B0F17] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Glowing Banner Box */}
        <div className="relative rounded-3xl bg-gradient-to-r from-blue-900/60 via-indigo-900/60 to-slate-900/90 border border-blue-500/30 p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl">

          {/* Animated Background Light Effects */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-cyan-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
              <span>Ready to Scale Your Business?</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Have an Idea? <span className="text-gradient">Let's Build It.</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Whether you need a website, business system, POS, inventory solution, or a completely custom application, G-Dev Solution can help turn your idea into a working digital solution.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll('#contact');
                }}
                className="btn-primary w-full sm:w-auto text-center flex items-center justify-center gap-2 text-sm group"
              >
                <Send className="w-4 h-4" />
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll('#contact');
                }}
                className="btn-secondary w-full sm:w-auto text-center flex items-center justify-center gap-2 text-sm"
              >
                <MessageSquare className="w-4 h-4 text-blue-400" />
                <span>Contact Us</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
