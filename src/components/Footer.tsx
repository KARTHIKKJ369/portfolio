import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-6">
      <div className="container px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="mono text-xs text-[var(--muted)]">
          © {new Date().getFullYear()} Karthik Jayan
        </span>
        <div className="flex items-center gap-5">
          <a href="https://github.com/KARTHIKKJ369" target="_blank" rel="noopener noreferrer" className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors" aria-label="GitHub">
            <Github className="w-4 h-4" />
          </a>
          <a href="https://www.linkedin.com/in/karthik-jayan-8544ba267/" target="_blank" rel="noopener noreferrer" className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors" aria-label="LinkedIn">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href="mailto:karthikjayan369@gmail.com" className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors" aria-label="Email">
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
