import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative border-t border-[var(--glass-border)] py-10">
      <div className="container px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="mono text-sm text-[var(--muted)]">
          © {new Date().getFullYear()} Karthik Jayan. Built with React &amp; Three.js.
        </span>
        <div className="flex items-center gap-4">
          <a href="https://github.com/KARTHIKKJ369" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-[var(--glass)] rounded-lg transition-colors" aria-label="GitHub">
            <Github className="w-4 h-4 text-[var(--muted)] hover:text-[var(--accent)] transition-colors" />
          </a>
          <a href="https://linkedin.com/in/karthik-jayan" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-[var(--glass)] rounded-lg transition-colors" aria-label="LinkedIn">
            <Linkedin className="w-4 h-4 text-[var(--muted)] hover:text-[var(--accent)] transition-colors" />
          </a>
          <a href="mailto:karthikjayan369@gmail.com" className="p-2 hover:bg-[var(--glass)] rounded-lg transition-colors" aria-label="Email">
            <Mail className="w-4 h-4 text-[var(--muted)] hover:text-[var(--accent)] transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  )
}
