import { useState } from 'react'
import { Mail, MapPin, Send, CheckCircle } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './SocialIcons'
import { useInView } from '../hooks/useInView'
import { personalInfo } from '../data/portfolio'

export default function Contact() {
  const { ref, inView } = useInView()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSent(true)
      setForm({ name: '', email: '', message: '' })
    }, 1200)
  }

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 px-6 section-fade ${inView ? 'visible' : ''}`}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono text-primary-400 text-sm uppercase tracking-widest mb-3">Let's connect</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Info */}
          <div>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Whether you're a recruiter, founder, or fellow AI enthusiast — I'd love to hear from you.
              I'm currently open to internships, collaborations, and research opportunities.
            </p>

            <div className="space-y-4 mb-8">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 glass glass-hover rounded-xl p-4 text-slate-300 hover:text-primary-300 transition-all group"
              >
                <div className="p-2 rounded-lg bg-primary-600/15 text-primary-400 group-hover:bg-primary-600/25 transition-colors">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-xs text-slate-500 mb-0.5">Email</div>
                  <div className="text-sm font-medium">{personalInfo.email}</div>
                </div>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 glass glass-hover rounded-xl p-4 text-slate-300 hover:text-primary-300 transition-all group"
              >
                <div className="p-2 rounded-lg bg-primary-600/15 text-primary-400 group-hover:bg-primary-600/25 transition-colors">
                  <GithubIcon size={18} />
                </div>
                <div>
                  <div className="text-xs text-slate-500 mb-0.5">GitHub</div>
                  <div className="text-sm font-medium">AyeshaSabahath</div>
                </div>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 glass glass-hover rounded-xl p-4 text-slate-300 hover:text-primary-300 transition-all group"
              >
                <div className="p-2 rounded-lg bg-primary-600/15 text-primary-400 group-hover:bg-primary-600/25 transition-colors">
                  <LinkedinIcon size={18} />
                </div>
                <div>
                  <div className="text-xs text-slate-500 mb-0.5">LinkedIn</div>
                  <div className="text-sm font-medium">ayesha-sabahath</div>
                </div>
              </a>

              <div className="flex items-center gap-4 glass rounded-xl p-4 text-slate-400">
                <div className="p-2 rounded-lg bg-accent-600/15 text-accent-400">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-xs text-slate-500 mb-0.5">Location</div>
                  <div className="text-sm font-medium text-slate-300">{personalInfo.location}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="glass rounded-2xl p-6">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10 gap-4">
                <CheckCircle size={48} className="text-accent-400" />
                <h3 className="text-white font-semibold text-lg">Message sent!</h3>
                <p className="text-slate-400 text-sm">Thanks for reaching out. I'll get back to you soon.</p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-2 text-sm text-primary-400 hover:text-primary-300 underline transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5 font-medium">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-surface-700 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-primary-500/60 focus:ring-1 focus:ring-primary-500/30 transition-all"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5 font-medium">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-surface-700 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-primary-500/60 focus:ring-1 focus:ring-primary-500/30 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5 font-medium">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-surface-700 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-primary-500/60 focus:ring-1 focus:ring-primary-500/30 transition-all resize-none"
                    placeholder="Tell me about the opportunity or project..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-primary-600 hover:bg-primary-500 disabled:opacity-60 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-primary-600/25 hover:shadow-primary-500/35"
                >
                  {loading ? (
                    <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
