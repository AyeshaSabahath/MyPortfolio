import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#hero" className="font-mono text-primary-400 font-semibold text-lg tracking-tight">
          AS<span className="text-accent-400">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-slate-400 hover:text-primary-300 transition-colors duration-200 font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            className="ml-2 text-sm px-4 py-1.5 rounded-lg border border-primary-500/50 text-primary-300 hover:bg-primary-500/10 transition-all duration-200 font-medium"
          >
            Resume
          </a>
        </nav>

        <button
          className="md:hidden text-slate-400 hover:text-primary-300 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden glass border-t border-primary-500/10">
          <nav className="flex flex-col px-6 py-4 gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-slate-300 hover:text-primary-300 transition-colors py-1"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download
              className="mt-2 text-sm px-4 py-2 rounded-lg border border-primary-500/50 text-primary-300 hover:bg-primary-500/10 transition-all text-center"
            >
              Download Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
