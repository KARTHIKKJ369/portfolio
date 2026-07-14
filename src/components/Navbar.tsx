import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github, Linkedin, Mail, FileText, Sun, Moon } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

interface NavbarProps {
  scrolled: boolean
}

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'github', label: 'GitHub' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

const ease = [0.23, 1, 0.32, 1] as const

export default function Navbar({ scrolled }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const { theme, toggle } = useTheme()

  useEffect(() => {
    const elements = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 border-b transition-[padding,background-color,border-color] duration-300"
      style={{
        background: scrolled ? 'color-mix(in srgb, var(--bg) 90%, transparent)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderColor: scrolled ? 'var(--border)' : 'transparent',
        paddingTop: scrolled ? '0.9rem' : '1.4rem',
        paddingBottom: scrolled ? '0.9rem' : '1.4rem',
      }}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease }}
    >
      <div className="container flex items-center justify-between px-4">
        <a href="#hero" className="mono font-semibold text-lg tracking-tight">KJ</a>

        <div className="hidden lg:flex items-center gap-7">
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
                  transition={{ duration: 0.3, ease }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={toggle}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2 rounded-full text-[var(--muted)] hover:text-[var(--fg)] hover:bg-[var(--bg-elevated)] transition-colors"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <a href="https://github.com/KARTHIKKJ369" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/karthik-jayan-8544ba267/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:karthikjayan369@gmail.com" className="btn-secondary px-4 py-2 text-sm">Contact</a>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <button
            onClick={toggle}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2 text-[var(--muted)]"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button className="p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? 'Close menu' : 'Open menu'}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="lg:hidden bg-[var(--bg)] border-t border-[var(--border)] px-4 pb-6 overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease }}
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
                <a href="https://github.com/KARTHIKKJ369" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-[var(--muted)] hover:text-[var(--fg)]">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/karthik-jayan-8544ba267/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[var(--muted)] hover:text-[var(--fg)]">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:karthikjayan369@gmail.com" aria-label="Email" className="text-[var(--muted)] hover:text-[var(--fg)]">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Resume" className="text-[var(--muted)] hover:text-[var(--fg)]">
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
