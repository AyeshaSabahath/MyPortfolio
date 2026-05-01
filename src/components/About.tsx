import { useInView } from '../hooks/useInView'
import { BookOpen, Brain, Target, Rocket } from 'lucide-react'

const cards = [
  {
    icon: BookOpen,
    title: 'Education',
    content: 'B.E. in Artificial Intelligence & Machine Learning (2023–2027) — building deep theoretical and applied foundations.',
    color: 'text-primary-400',
    bg: 'from-primary-600/10 to-primary-500/5',
  },
  {
    icon: Brain,
    title: 'Expertise',
    content: 'Specializing in ML, Deep Learning, NLP, and Computer Vision with hands-on experience on production-like projects.',
    color: 'text-accent-400',
    bg: 'from-accent-600/10 to-accent-500/5',
  },
  {
    icon: Target,
    title: 'Focus',
    content: 'Driven by solving real-world problems — from healthcare diagnostics to natural language understanding.',
    color: 'text-orange-400',
    bg: 'from-orange-600/10 to-orange-500/5',
  },
  {
    icon: Rocket,
    title: 'Goals',
    content: 'Building towards impactful AI systems that scale, leveraging cutting-edge research and engineering best practices.',
    color: 'text-primary-300',
    bg: 'from-primary-500/10 to-accent-500/5',
  },
]

export default function About() {
  const { ref, inView } = useInView()

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 px-6 section-fade ${inView ? 'visible' : ''}`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono text-primary-400 text-sm uppercase tracking-widest mb-3">Get to know me</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text side */}
          <div>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              I'm <span className="text-white font-semibold">Ayesha Sabahath</span>, an AI/ML engineering student
              from Bidar, Karnataka, passionate about the intersection of research and real-world application.
            </p>
            <p className="text-slate-400 leading-relaxed mb-6">
              My journey started with curiosity about how machines can learn, predict, and understand — and has grown
              into building full end-to-end AI pipelines spanning Computer Vision, NLP, and predictive analytics.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              I believe the most meaningful AI is the kind that helps people — in healthcare, accessibility, and
              everyday life. Each project I build is a step toward that mission.
            </p>

            <div className="flex flex-wrap gap-3">
              {['AI Research', 'Open Source', 'Data Science', 'Deep Learning', 'NLP'].map((tag) => (
                <span key={tag} className="badge">{tag}</span>
              ))}
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cards.map((card) => {
              const Icon = card.icon
              return (
                <div
                  key={card.title}
                  className={`glass glass-hover rounded-2xl p-5 bg-gradient-to-br ${card.bg}`}
                >
                  <div className={`mb-3 ${card.color}`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="text-white font-semibold mb-2 text-sm">{card.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{card.content}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
