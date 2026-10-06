import React, { useState } from 'react';
import {
  Mail,
  Send,
  CheckCircle2,
  MapPin,
  Phone,
  Facebook,
  Github,
  Linkedin,
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { companyInfo } from '../data/company';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    projectType: 'Web Development',
    message: ''
  });

  const [status, setStatus] = useState({ type: null, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const projectOptions = [
    'Web Development',
    'System Development',
    'POS & Inventory Systems',
    'UI/UX Design',
    'Database Solutions',
    'Mobile Applications',
    'Custom Software Solution'
  ];

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        type: 'error',
        message: 'Please fill out all required fields before sending.'
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    // Simulate quick form submission response
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. G-Dev Solution will reply shortly.'
      });
      setFormData({
        fullName: '',
        email: '',
        projectType: 'Web Development',
        message: ''
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#090D16] border-y border-white/5 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase">
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let's Work Together
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Have a project in mind or need technical guidance? Reach out directly to G-Dev Solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Direct Info & Social Links */}
          <div className="lg:col-span-5 glass-card p-8 rounded-2xl border border-slate-800 space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest block">
                DIRECT COMMUNICATION
              </span>
              <h3 className="text-2xl font-bold text-white">
                {companyInfo.name}
              </h3>
              <p className="text-sm font-medium text-slate-400">
                Development & Design Solutions
              </p>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              We respond promptly to all project inquiries, technical consultations, and partnership opportunities. Contact us directly through the form or via our email.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-4 text-sm text-slate-300">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 block font-mono">Email Address</span>
                  <a href={companyInfo.socials.email} className="hover:text-blue-400 font-medium transition-colors">
                    {companyInfo.contactEmail}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-slate-300">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 block font-mono">Location</span>
                  <span className="font-medium">{companyInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-slate-800 space-y-3">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                Connect With Us
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={companyInfo.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  aria-label="Facebook Page"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href={companyInfo.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  aria-label="GitHub Organization"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={companyInfo.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  aria-label="LinkedIn Company Page"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 glass-card p-8 rounded-2xl border border-slate-800">
            <form onSubmit={handleSubmit} className="space-y-6">

              {status.message && (
                <div className={`p-4 rounded-xl text-xs sm:text-sm flex items-center gap-3 ${
                  status.type === 'success'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    : 'bg-red-500/20 text-red-300 border border-red-500/30'
                }`}>
                  {status.type === 'success' ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                  )}
                  <span>{status.message}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 block">
                    Full Name <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 block">
                    Email Address <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    required
                    className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              {/* Project Type Dropdown */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 block">
                  Project Type / Interest
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                >
                  {projectOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-[#0D1322] text-white">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 block">
                  Project Details / Message <span className="text-blue-400">*</span>
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project goals, required features, or timeline..."
                  required
                  className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary py-3.5 text-sm flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
