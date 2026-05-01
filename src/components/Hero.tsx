import { Mail, ChevronDown, Download } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './SocialIcons'
import { personalInfo } from '../data/portfolio'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-500/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-500/10 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: '0.5s' }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center animate-fade-in">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 text-sm text-accent-300 border border-accent-500/20">
          <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
          Available for internships & collaborations
        </div>

        {/* Name */}
        <h1 className="font-sans font-bold text-5xl md:text-7xl text-white mb-4 leading-tight tracking-tight">
          {personalInfo.name.split(' ')[0]}{' '}
          <span className="text-gradient">{personalInfo.name.split(' ')[1]}</span>
        </h1>

        {/* Role */}
        <p className="font-mono text-primary-400 text-lg md:text-xl mb-6 tracking-wide">
          {personalInfo.role}
        </p>

        {/* Tagline */}
        <h2 className="text-2xl md:text-4xl font-semibold text-white/90 mb-6 leading-snug max-w-3xl mx-auto">
          {personalInfo.tagline}
        </h2>

        {/* Bio */}
        <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          {personalInfo.bio}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="#projects"
            className="px-8 py-3 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-semibold transition-all duration-200 shadow-lg shadow-primary-600/30 hover:shadow-primary-500/40 hover:-translate-y-0.5"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-xl border border-primary-500/40 text-primary-300 hover:bg-primary-500/10 hover:border-primary-400 font-semibold transition-all duration-200 hover:-translate-y-0.5"
          >
            Contact Me
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-accent-500/40 text-accent-300 hover:bg-accent-500/10 hover:border-accent-400 font-medium transition-all duration-200 hover:-translate-y-0.5"
          >
            <Download size={16} />
            Resume
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-5">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl glass hover:border-primary-400/40 text-slate-400 hover:text-primary-300 transition-all duration-200 hover:-translate-y-0.5"
            aria-label="GitHub"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl glass hover:border-primary-400/40 text-slate-400 hover:text-primary-300 transition-all duration-200 hover:-translate-y-0.5"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-3 rounded-xl glass hover:border-primary-400/40 text-slate-400 hover:text-primary-300 transition-all duration-200 hover:-translate-y-0.5"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Location */}
        <p className="mt-8 text-slate-500 text-sm">{personalInfo.location}</p>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-primary-400 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  )
}
