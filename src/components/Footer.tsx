import { Mail, Heart } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './SocialIcons'
import { personalInfo } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-slate-500 text-sm">
          <span>Built with</span>
          <Heart size={13} className="text-primary-400 fill-primary-400" />
          <span>by</span>
          <span className="text-primary-400 font-medium">{personalInfo.name}</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-500 hover:text-primary-400 transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-500 hover:text-primary-400 transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-2 text-slate-500 hover:text-primary-400 transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>

        <p className="text-slate-600 text-xs">© {new Date().getFullYear()} Ayesha Sabahath. All rights reserved.</p>
      </div>
    </footer>
  )
}
