import { useInView } from '../hooks/useInView'
import { achievements } from '../data/portfolio'

export default function Achievements() {
  const { ref, inView } = useInView()

  return (
    <section
      id="achievements"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 px-6 section-fade ${inView ? 'visible' : ''}`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono text-primary-400 text-sm uppercase tracking-widest mb-3">Recognition & milestones</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Achievements</h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-transparent hidden md:block" />

          <div className="space-y-6">
            {achievements.map((item, i) => (
              <div
                key={item.title}
                className="md:pl-16 relative"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-3 top-6 w-6 h-6 rounded-full bg-surface-800 border-2 border-primary-500 flex items-center justify-center hidden md:flex text-xs">
                  <div className="w-2 h-2 rounded-full bg-primary-400" />
                </div>

                <div className="glass glass-hover rounded-2xl p-6 flex items-start gap-5">
                  <div className="text-3xl flex-shrink-0 mt-0.5">{item.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2 flex-wrap">
                      <h3 className="text-white font-semibold text-base">{item.title}</h3>
                      <span className="badge text-xs flex-shrink-0">{item.year}</span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
