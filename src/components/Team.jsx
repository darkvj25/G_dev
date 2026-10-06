import React from 'react';
import {
  Code,
  Palette,
  Github,
  Linkedin,
  Mail,
  Figma,
  Terminal,
  CheckCircle,
  Layers,
  Sparkles
} from 'lucide-react';
import { teamMembers } from '../data/team';

export default function Team() {
  return (
    <section id="team" className="py-24 relative bg-[#090D16] border-y border-white/5 overflow-hidden">
      {/* Background Lighting Glows */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase">
            <span>Our Experts</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Meet The Team
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Two specialized leaders driving software development and UI/UX design to deliver complete, production-ready solutions.
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {teamMembers.map((member) => {
            const isDev = member.theme === 'code';

            return (
              <div
                key={member.id}
                className={`glass-card rounded-2xl border ${
                  isDev ? 'hover:border-blue-500/50' : 'hover:border-indigo-500/50'
                } p-6 sm:p-8 flex flex-col justify-between space-y-8 relative overflow-hidden transition-all duration-300 group`}
              >
                {/* Top Corner Glow Accent */}
                <div
                  className={`absolute top-0 right-0 w-40 h-40 rounded-bl-full pointer-events-none opacity-20 ${
                    isDev ? 'bg-blue-500' : 'bg-indigo-500'
                  }`}
                ></div>

                <div className="space-y-6">
                  {/* Top Header: Badge & Photo */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      {/* Avatar Image */}
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-slate-700 group-hover:border-blue-400 transition-colors shadow-xl">
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      <div>
                        {/* Member Name */}
                        <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                          {member.name}
                        </h3>
                        {/* Position */}
                        <p className="text-xs sm:text-sm font-semibold text-blue-400">
                          {member.position}
                        </p>
                      </div>
                    </div>

                    {/* Badge */}
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider ${
                        isDev
                          ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                          : 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                      }`}
                    >
                      {isDev ? <Code className="w-3.5 h-3.5 text-cyan-400" /> : <Palette className="w-3.5 h-3.5 text-indigo-400" />}
                      <span>{member.badge}</span>
                    </span>
                  </div>

                  {/* Visual Tag Indicator */}
                  <div className="flex items-center gap-2 text-xs font-mono font-medium text-slate-400 bg-slate-900/80 px-3.5 py-2 rounded-xl border border-slate-800">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                    <span>{member.visualTags.join(' • ')}</span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {member.description}
                  </p>

                  {/* Visual Complementary Block (Code snippet for Dev, Tokens for Designer) */}
                  {isDev ? (
                    <div className="bg-[#080C14] p-4 rounded-xl border border-slate-800 font-mono text-[11px] text-slate-300 space-y-1">
                      <div className="flex items-center justify-between text-slate-500 text-[10px] pb-1.5 mb-1.5 border-b border-slate-800">
                        <span className="flex items-center gap-1">
                          <Terminal className="w-3 h-3 text-cyan-400" /> lead-developer.ts
                        </span>
                        <span className="text-emerald-400">Status: Active</span>
                      </div>
                      <p className="text-purple-400"><span className="text-blue-400">const</span> dev = &#123;</p>
                      <p className="pl-4 text-slate-300">architect: <span className="text-emerald-300">'Van Jasper Benzon'</span>,</p>
                      <p className="pl-4 text-slate-300">stack: [<span className="text-emerald-300">'React'</span>, <span className="text-emerald-300">'PHP'</span>, <span className="text-emerald-300">'MySQL'</span>, <span className="text-emerald-300">'Java'</span>],</p>
                      <p className="pl-4 text-slate-300">creates: [<span className="text-emerald-300">'Websites'</span>, <span className="text-emerald-300">'POS'</span>, <span className="text-emerald-300">'Custom Systems'</span>, <span className="text-emerald-300">'APIs'</span>]</p>
                      <p>&#125;;</p>
                    </div>
                  ) : (
                    <div className="bg-[#080C14] p-4 rounded-xl border border-slate-800 font-sans text-[11px] text-slate-300 space-y-2">
                      <div className="flex items-center justify-between text-slate-500 text-[10px] pb-1.5 border-b border-slate-800">
                        <span className="flex items-center gap-1">
                          <Layers className="w-3 h-3 text-indigo-400" /> ui-ux-design-system.fig
                        </span>
                        <span className="text-indigo-400">Layout Verified</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-[10px]">
                        <div className="bg-slate-900 p-2 rounded border border-slate-800">
                          <span className="text-slate-400 block">Lead Designer</span>
                          <span className="font-semibold text-white">Rdell Mark Gabion</span>
                        </div>
                        <div className="bg-slate-900 p-2 rounded border border-slate-800">
                          <span className="text-slate-400 block">Output</span>
                          <span className="font-semibold text-white">Wireframes & UI Specs</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Skills Grid */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                      Technical Skills & Expertise
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {member.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-900 text-slate-300 border border-slate-800"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Social Links */}
                <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-mono">
                    Direct Contact
                  </span>
                  <div className="flex items-center gap-3">
                    {member.socials.github && (
                      <a
                        href={member.socials.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                        title="GitHub Profile"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {member.socials.figma && (
                      <a
                        href={member.socials.figma}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                        title="Figma Profile"
                      >
                        <Figma className="w-4 h-4" />
                      </a>
                    )}
                    {member.socials.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                        title="LinkedIn Profile"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {member.socials.email && (
                      <a
                        href={member.socials.email}
                        className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                        title="Email Contact"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
