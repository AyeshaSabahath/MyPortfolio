import { useInView } from '../hooks/useInView'
import { certifications, softSkills } from '../data/portfolio'
import { Award } from 'lucide-react'

const colorBorder: Record<string, string> = {
  blue: 'border-primary-500/20 from-primary-600/10',
  green: 'border-accent-500/20 from-accent-600/10',
  orange: 'border-orange-500/20 from-orange-600/10',
}

const colorText: Record<string, string> = {
  blue: 'text-primary-400',
  green: 'text-accent-400',
  orange: 'text-orange-400',
}

export default function Certifications() {
  const { ref, inView } = useInView()

  return (
    <section
      id="certifications"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 px-6 section-fade ${inView ? 'visible' : ''}`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono text-primary-400 text-sm uppercase tracking-widest mb-3">Credentials & traits</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Certifications & Soft Skills</h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Certifications */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              <Award size={18} className="text-primary-400" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <div
                  key={cert.title}
                  className={`glass glass-hover rounded-2xl p-5 border bg-gradient-to-br ${colorBorder[cert.color]} to-transparent`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl flex-shrink-0">{cert.icon}</span>
                    <div>
                      <h4 className="text-white font-semibold text-sm mb-0.5">{cert.title}</h4>
                      <p className={`text-xs font-medium mb-2 ${colorText[cert.color]}`}>{cert.issuer}</p>
                      <p className="text-slate-400 text-xs leading-relaxed">{cert.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="text-accent-400">✦</span>
              Soft Skills
            </h3>
            <div className="glass rounded-2xl p-6 mb-6">
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-700 border border-white/5 text-slate-300 text-sm font-medium hover:border-primary-500/30 hover:text-primary-300 transition-all duration-200 cursor-default"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-400 flex-shrink-0" />
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: 'Projects', value: '5+' },
                { label: 'Hackathons', value: '2' },
                { label: 'Publications', value: '1' },
              ].map((stat) => (
                <div key={stat.label} className="glass rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold text-gradient-blue mb-1">{stat.value}</div>
                  <div className="text-slate-400 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
