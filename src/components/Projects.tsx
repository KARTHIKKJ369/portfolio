import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'Backwater Collision Avoidance',
    tag: 'IoT · Embedded · ML',
    description:
      'A two-node ESP32 system where a gateway and sensor boat exchange GPS and motion data over AES-128 CBC encrypted LoRa. A FastAPI backend runs an LSTM trajectory predictor and streams live positions to a React + Leaflet dashboard for real-time collision risk.',
    tech: ['ESP32', 'LoRa', 'FastAPI', 'LSTM', 'React', 'Leaflet'],
    href: 'https://github.com/KARTHIKKJ369/backwater_collision_avoidance',
  },
  {
    title: 'Recall',
    tag: 'AI · NLP · Research',
    description:
      'A persistent semantic memory architecture for LLMs built around a three-agent pipeline — Intake, Knowledge, and Response — with hybrid BM25 and dense retrieval, plus an Ebbinghaus-inspired decay model so memories fade the way human ones do. Accepted at JETIR.',
    tech: ['Python', 'RAG', 'BM25', 'Sentence transformers'],
    href: undefined,
  },
  {
    title: 'Hostel Management System',
    tag: 'Full-stack',
    description:
      'A complete hostel administration platform covering room allocation, fee tracking, maintenance requests, and role-based admin dashboards end to end.',
    tech: ['Node.js', 'Express', 'Supabase'],
    href: undefined,
  },
]

const Projects = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section id="projects" ref={ref} className="py-24 md:py-28">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="mono text-xs text-[var(--muted)] tracking-widest uppercase">03 · Projects</span>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3">Things I've shipped.</h2>
        </motion.div>

        <div>
          {projects.map((project, i) => {
            const Wrapper = project.href ? motion.a : motion.div
            return (
              <Wrapper
                key={project.title}
                {...(project.href ? { href: project.href, target: '_blank', rel: 'noopener noreferrer' } : {})}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group grid md:grid-cols-[1fr_2fr] gap-4 md:gap-10 py-8 border-t border-[var(--border)] last:border-b"
              >
                <div>
                  <span className="mono text-xs text-[var(--muted)] uppercase tracking-wide">{project.tag}</span>
                  <h3 className="text-xl font-semibold mt-2 flex items-center gap-1.5">
                    {project.title}
                    {project.href && (
                      <ArrowUpRight className="w-4 h-4 text-[var(--muted)] group-hover:text-[var(--fg)] transition-colors" />
                    )}
                  </h3>
                </div>
                <div>
                  <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">{project.description}</p>
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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-8"
        >
          <a
            href="https://github.com/KARTHIKKJ369"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--muted)] hover:text-[var(--fg)] transition-colors"
          >
            See everything on GitHub
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
})

export default Projects
