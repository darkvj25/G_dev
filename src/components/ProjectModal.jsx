import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0F172A] border border-slate-700/80 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors focus:outline-none"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Badge & Title */}
        <div className="space-y-2 pr-8">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-400 border border-blue-500/30">
            {project.categoryBadge || project.category}
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            {project.title}
          </h3>
        </div>

        {/* Project Image */}
        <div className="relative rounded-xl overflow-hidden border border-slate-700/60 bg-slate-950 flex items-center justify-center min-h-[220px] max-h-[420px] p-1">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full max-h-[400px] object-contain rounded-lg"
          />
        </div>

        {/* Long Description */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
            <Layers className="w-4 h-4 text-cyan-400" />
            Project Overview
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {project.longDescription || project.description}
          </p>
        </div>

        {/* Key Features List */}
        {project.keyFeatures && (
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider">
              Key Features & Capabilities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack Pills */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
            Technologies Implemented
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-md text-xs font-mono font-medium bg-blue-600/10 text-blue-300 border border-blue-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <a
              href={project.liveUrl !== '#' ? project.liveUrl : '#contact'}
              onClick={(e) => {
                if (project.liveUrl === '#') {
                  e.preventDefault();
                  onClose();
                  const el = document.querySelector('#contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-primary text-xs flex items-center gap-2"
              target={project.liveUrl !== '#' ? "_blank" : "_self"}
              rel="noreferrer"
            >
              <span>{project.liveUrl !== '#' ? 'Live Preview' : 'Request Similar Project'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            {project.githubUrl && (
              <a
                href={project.githubUrl !== '#' ? project.githubUrl : '#contact'}
                onClick={(e) => {
                  if (project.githubUrl === '#') {
                    e.preventDefault();
                    onClose();
                    const el = document.querySelector('#contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="btn-secondary text-xs flex items-center gap-2"
                target={project.githubUrl !== '#' ? "_blank" : "_self"}
                rel="noreferrer"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Repository</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="text-xs text-slate-400 hover:text-white transition-colors"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
}
