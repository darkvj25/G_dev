import React, { useState } from 'react';
import {
  Code2,
  Zap,
  FileCode2,
  Globe,
  Palette,
  Server,
  Database,
  Terminal,
  Figma,
  GitBranch,
  Github,
  Layers
} from 'lucide-react';
import { techStack } from '../data/techStack';

const iconMap = {
  Code2: Code2,
  Zap: Zap,
  FileCode2: FileCode2,
  Globe: Globe,
  Palette: Palette,
  Server: Server,
  Database: Database,
  Terminal: Terminal,
  Figma: Figma,
  GitBranch: GitBranch,
  Github: Github
};

export default function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Languages', 'Tooling', 'Design', 'Version Control'];

  const filteredStack = selectedCategory === 'All'
    ? techStack
    : techStack.filter(item => item.category === selectedCategory);

  return (
    <section id="tech-stack" className="py-24 relative bg-[#090D16] border-y border-white/5 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase">
            <span>Stack & Tools</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Technologies We Work With
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            We leverage a modern, high-performance technology stack for robust backend databases, fast frontends, and seamless design workflows.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredStack.map((tech) => {
            const IconComponent = iconMap[tech.iconName] || Layers;

            return (
              <div
                key={tech.name}
                className="glass-card p-5 rounded-2xl border border-slate-800/80 flex flex-col items-center text-center space-y-3 group hover:border-blue-500/50 hover:scale-105 transition-all duration-300"
              >
                {/* Tech Icon */}
                <div
                  className="w-12 h-12 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner"
                  style={{ color: tech.color }}
                >
                  <IconComponent className="w-6 h-6" />
                </div>

                {/* Tech Info */}
                <div>
                  <h3 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                    {tech.name}
                  </h3>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block mt-0.5">
                    {tech.category}
                  </span>
                </div>

                {/* Description Tooltip / Text */}
                <p className="text-[11px] text-slate-400 line-clamp-2 leading-snug">
                  {tech.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
