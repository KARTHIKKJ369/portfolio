import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github, Linkedin, Mail, FileText } from 'lucide-react'

interface NavbarProps {
  scrolled: boolean
  sections: Record<string, HTMLElement | null>
}

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'github', label: 'GitHub' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar({ scrolled, sections }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    )

    Object.values(sections).forEach((el) => {
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [sections])

  const scrollTo = (id: string) => {
    const el = sections[id]
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setMobileOpen(false)
    }
  }

  return (
    <motion.nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled ? 'bg-[var(--bg)]/90 backdrop-blur-sm border-[var(--border)] py-4' : 'py-6 border-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <div className="container flex items-center justify-between px-4">
        <a href="#hero" className="mono font-semibold text-lg tracking-tight">
          KJ
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`relative px-1 py-1 text-sm font-medium transition-colors ${
                activeSection === item.id ? 'text-[var(--fg)]' : 'text-[var(--muted)] hover:text-[var(--fg)]'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-[-4px] left-0 right-0 h-px bg-[var(--fg)]"
                />
              )}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="https://github.com/KARTHIKKJ369" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/karthik-jayan-8544ba267/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:karthikjayan369@gmail.com" className="btn-secondary px-4 py-2 text-sm">
            Contact
          </a>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden bg-[var(--bg)] border-t border-[var(--border)] px-4 pb-6"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="flex flex-col gap-4 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`text-left px-2 py-2 font-medium transition-colors ${
                    activeSection === item.id ? 'text-[var(--fg)]' : 'text-[var(--muted)] hover:text-[var(--fg)]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex gap-4 pt-4 border-t border-[var(--border)]">
                <a href="https://github.com/KARTHIKKJ369" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="text-[var(--muted)] hover:text-[var(--fg)]">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/karthik-jayan-8544ba267/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="text-[var(--muted)] hover:text-[var(--fg)]">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:karthikjayan369@gmail.com" aria-label="Send email" className="text-[var(--muted)] hover:text-[var(--fg)]">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="View Resume" className="text-[var(--muted)] hover:text-[var(--fg)]">
                  <FileText className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}