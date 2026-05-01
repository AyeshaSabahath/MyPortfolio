import { useInView } from '../hooks/useInView'
import { skills } from '../data/portfolio'

const colorMap: Record<string, string> = {
  blue: 'badge',
  green: 'badge badge-green',
  orange: 'badge badge-orange',
}

const borderMap: Record<string, string> = {
  blue: 'border-primary-500/20 from-primary-600/10',
  green: 'border-accent-500/20 from-accent-600/10',
  orange: 'border-orange-500/20 from-orange-600/10',
}

export default function Skills() {
  const { ref, inView } = useInView()

  return (
    <section
      id="skills"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 px-6 section-fade ${inView ? 'visible' : ''}`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono text-primary-400 text-sm uppercase tracking-widest mb-3">What I work with</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, i) => (
            <div
              key={group.category}
              className={`glass glass-hover rounded-2xl p-6 border bg-gradient-to-br ${borderMap[group.color]} to-transparent`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{group.icon}</span>
                <h3 className="text-white font-semibold text-sm">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className={colorMap[group.color]}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
