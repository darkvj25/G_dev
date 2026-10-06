import React, { useState } from 'react';
import { ExternalLink, Github, Eye, Layers, Sparkles } from 'lucide-react';
import { projects, projectCategories } from '../data/projects';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProjectModal, setActiveProjectModal] = useState(null);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative bg-[#0B0F17] overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase">
            <span>Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Custom websites, web applications, management platforms, POS systems, and tailored digital interfaces built with clean code and high performance.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl border border-slate-800/80 overflow-hidden group hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card Thumbnail */}
              <div className="relative aspect-video overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-lg text-[11px] font-semibold bg-[#0B0F17]/80 backdrop-blur-md text-blue-400 border border-white/10">
                    {project.categoryBadge}
                  </span>
                </div>

                {/* Hover Overlay Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                  <button
                    onClick={() => setActiveProjectModal(project)}
                    className="btn-primary text-xs flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Project Specs</span>
                  </button>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => setActiveProjectModal(project)}
                    className="text-xs font-semibold text-blue-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors"
                  >
                    <span>View Details</span>
                    <Sparkles className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveProjectModal(project)}
                      className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-slate-800 transition-colors"
                      title="View Project Modal"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </button>
                    {project.githubUrl && (
                      <button
                        onClick={() => setActiveProjectModal(project)}
                        className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-slate-800 transition-colors"
                        title="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Modal */}
      {activeProjectModal && (
        <ProjectModal
          project={activeProjectModal}
          onClose={() => setActiveProjectModal(null)}
        />
      )}
    </section>
  );
}
