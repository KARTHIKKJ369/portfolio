import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'
import ProjectVisual from './ProjectVisual'
import { projects } from '../data'

const ease = [0.23, 1, 0.32, 1] as const

export default function Projects() {
  const featured = projects.find((p) => p.featured) ?? projects[0]
  const rest = projects.filter((p) => p !== featured)

  return (
    <section id="projects" className="py-24">
      <div className="container px-4">
        <Reveal amount={0.5} className="mb-16 max-w-xl">
          <h2 className="text-3xl md:text-4xl font-semibold mb-3">Things I've shipped.</h2>
          <p className="text-[var(--muted)] text-sm">
            {projects.length} projects, ranging from RAG pipelines to full-stack platforms.
          </p>
        </Reveal>

        {/* Featured project — large, distinct treatment */}
        <Reveal direction="scale" amount={0.2} className="mb-20">
          <a
            href={featured.href}
            target={featured.href ? '_blank' : undefined}
            rel="noopener noreferrer"
            className="group grid lg:grid-cols-2 gap-0 card card-hover overflow-hidden"
          >
            <div className="aspect-[4/3] lg:aspect-auto">
              <ProjectVisual index={0} />
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <span className="mono text-xs text-[var(--muted)] uppercase tracking-wide mb-3">
                {featured.tag} · Hero project
              </span>
              <h3 className="text-2xl lg:text-3xl font-semibold mb-4 flex items-center gap-2">
                {featured.title}
                {featured.href && (
                  <ArrowUpRight className="w-5 h-5 text-[var(--muted)] group-hover:text-[var(--fg)] transition-colors" />
                )}
              </h3>
              <div className="space-y-3 mb-5">
                <p className="text-sm text-[var(--muted)]"><span className="text-[var(--fg)] font-medium">Problem — </span>{featured.problem}</p>
                <p className="text-sm text-[var(--muted)]"><span className="text-[var(--fg)] font-medium">Solution — </span>{featured.solution}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {featured.tech.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </a>
        </Reveal>

        {/* Remaining projects — alternating layout, no two rows the same */}
        <div className="space-y-16">
          {rest.map((project, i) => {
            const reversed = i % 2 === 1
            const Wrapper = project.href ? motion.a : motion.div
            return (
              <Wrapper
                key={project.title}
                {...(project.href ? { href: project.href, target: '_blank', rel: 'noopener noreferrer' } : {})}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease }}
                className={`group grid lg:grid-cols-[1fr_1.2fr] gap-8 items-center ${reversed ? 'lg:[&>*:first-child]:order-2' : ''}`}
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--border)]">
                  <ProjectVisual index={i + 1} />
                </div>
                <div>
                  <span className="mono text-xs text-[var(--muted)] uppercase tracking-wide">{project.tag}</span>
                  <h3 className="text-xl font-semibold mt-2 mb-3 flex items-center gap-1.5">
                    {project.title}
                    {project.href && (
                      <ArrowUpRight className="w-4 h-4 text-[var(--muted)] group-hover:text-[var(--fg)] transition-colors" />
                    )}
                  </h3>
                  <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">{project.solution}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
              </Wrapper>
            )
          })}
        </div>

        <Reveal delay={0.1} className="mt-16">
          <a
            href="https://github.com/KARTHIKKJ369"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--muted)] hover:text-[var(--fg)] transition-colors"
          >
            See everything on GitHub
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
