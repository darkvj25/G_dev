import React from 'react';
import { Code, Facebook, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { companyInfo } from '../data/company';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#070A10] border-t border-slate-800/80 text-slate-400 text-xs sm:text-sm pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">

          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToTop(); }} className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 p-0.5 shadow-md overflow-hidden flex items-center justify-center">
                <img
                  src={companyInfo.logoImage}
                  alt={companyInfo.name}
                  className="w-full h-full object-cover rounded-[10px]"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-white">
                  G-Dev
                </span>
                <span className="text-[9px] font-semibold tracking-widest text-blue-400 uppercase">
                  {companyInfo.logoSubtext}
                </span>
              </div>
            </a>

            <p className="text-slate-400 text-xs sm:text-sm max-w-sm leading-relaxed">
              “{companyInfo.alternativeTagline}”
            </p>

            <p className="text-slate-500 text-xs max-w-sm leading-relaxed">
              A specialized software development & UI/UX design team crafting custom websites, web applications, management systems, POS solutions, and business platforms.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={companyInfo.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={companyInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={companyInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={companyInfo.socials.email}
                className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {['Home', 'About', 'Services', 'Tech Stack', 'Projects', 'Team', 'Process', 'Contact'].map((item) => {
                const id = item.toLowerCase().replace(' ', '-');
                return (
                  <li key={item}>
                    <a
                      href={`#${id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(`#${id}`);
                      }}
                      className="hover:text-blue-400 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Services Quick List */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Core Capabilities
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Web Development</li>
              <li>System Development</li>
              <li>POS & Inventory Systems</li>
              <li>UI/UX Design & Wireframing</li>
              <li>Database Architecture & Optimization</li>
              <li>Custom Business Applications</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 G-Dev Solution. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 flex items-center gap-2 transition-all"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
