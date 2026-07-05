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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-strong py-4' : 'py-6 bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <div className="container flex items-center justify-between px-4">
        <motion.a
          href="#hero"
          className="font-bold text-xl gradient-text tracking-tight"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          KJ
        </motion.a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`relative px-2 py-1 text-sm font-medium transition-colors ${
                activeSection === item.id ? 'text-[var(--accent)]' : 'text-[var(--muted)] hover:text-[var(--fg)]'
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
              <AnimatePresence>
                {activeSection === item.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--accent)]"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    exit={{ scaleX: 0 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </AnimatePresence>
            </motion.button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="https://github.com/KARTHIKKJ369" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-[var(--glass)] rounded-lg transition-colors">
            <Github className="w-5 h-5 text-[var(--muted)] hover:text-[var(--accent)] transition-colors" />
          </a>
          <a href="https://linkedin.com/in/karthik-jayan" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-[var(--glass)] rounded-lg transition-colors">
            <Linkedin className="w-5 h-5 text-[var(--muted)] hover:text-[var(--accent)] transition-colors" />
          </a>
          <a href="mailto:karthikjayan369@gmail.com" className="px-4 py-2 glass gradient-border rounded-lg text-sm font-medium hover:bg-[var(--accent-dim)] transition-colors">
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
            className="md:hidden glass-strong border-t border-[var(--glass-border)] px-4 pb-6"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="flex flex-col gap-4 pt-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                    activeSection === item.id
                      ? 'bg-[var(--accent-dim)] text-[var(--accent)]'
                      : 'text-[var(--muted)] hover:text-[var(--fg)] hover:bg-[var(--glass)]'
                  }`}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.label}
                </motion.button>
              ))}
              <div className="flex gap-4 pt-4 border-t border-[var(--glass-border)]">
                <a href="https://github.com/KARTHIKKJ369" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-[var(--glass)] rounded-lg transition-colors">
                  <Github className="w-5 h-5 text-[var(--muted)] hover:text-[var(--accent)]" />
                </a>
                <a href="https://linkedin.com/in/karthik-jayan" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-[var(--glass)] rounded-lg transition-colors">
                  <Linkedin className="w-5 h-5 text-[var(--muted)] hover:text-[var(--accent)]" />
                </a>
                <a href="mailto:karthikjayan369@gmail.com" className="p-2 hover:bg-[var(--glass)] rounded-lg transition-colors">
                  <Mail className="w-5 h-5 text-[var(--muted)] hover:text-[var(--accent)]" />
                </a>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-[var(--glass)] rounded-lg transition-colors">
                  <FileText className="w-5 h-5 text-[var(--muted)] hover:text-[var(--accent)]" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}