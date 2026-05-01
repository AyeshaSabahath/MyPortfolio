import { ExternalLink, Star } from 'lucide-react'
import { GithubIcon } from './SocialIcons'
import { useInView } from '../hooks/useInView'
import { projects } from '../data/portfolio'

const categoryColors: Record<string, string> = {
  'Computer Vision': 'badge-green',
  'NLP': 'badge',
  'Machine Learning': 'badge-orange',
}

export default function Projects() {
  const { ref, inView } = useInView()

  return (
    <section
      id="projects"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 px-6 section-fade ${inView ? 'visible' : ''}`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono text-primary-400 text-sm uppercase tracking-widest mb-3">What I've built</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <article
              key={project.id}
              className="glass glass-hover rounded-2xl overflow-hidden flex flex-col group"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-800 via-surface-800/40 to-transparent" />

                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span className={`badge text-xs ${categoryColors[project.category] ?? 'badge'}`}>
                    {project.category}
                  </span>
                </div>

                {/* Highlight badge */}
                {project.highlight && (
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-yellow-500/20 border border-yellow-500/40 text-yellow-300 text-xs font-medium">
                    <Star size={10} className="fill-yellow-400 text-yellow-400" />
                    {project.highlight}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-white font-bold text-base mb-2 group-hover:text-primary-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded-md bg-surface-700 text-slate-400 border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl border border-white/10 text-slate-300 hover:text-primary-300 hover:border-primary-500/40 transition-all text-sm font-medium"
                  >
                    <GithubIcon size={14} />
                    Code
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl bg-primary-600/20 border border-primary-500/30 text-primary-300 hover:bg-primary-600/30 transition-all text-sm font-medium"
                  >
                    <ExternalLink size={14} />
                    Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
