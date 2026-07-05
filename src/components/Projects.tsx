import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Backwater Collision Avoidance',
    tag: 'IoT · Embedded · ML',
    description:
      'A two-node ESP32 system where a gateway and sensor boat exchange GPS and motion data over AES-128 CBC encrypted LoRa. A FastAPI backend runs an LSTM trajectory predictor and streams live positions to a React + Leaflet dashboard for real-time collision risk.',
    tech: ['ESP32', 'LoRa', 'FastAPI', 'LSTM', 'React', 'Leaflet'],
    github: 'https://github.com/KARTHIKKJ369/backwater_collision_avoidance',
  },
  {
    title: 'Recall',
    tag: 'AI · NLP · Research',
    description:
      'A persistent semantic memory architecture for LLMs built around a three-agent pipeline — Intake, Knowledge, and Response — with hybrid BM25 and dense retrieval, plus an Ebbinghaus-inspired decay model so memories fade the way human ones do. Accepted at JETIR.',
    tech: ['Python', 'RAG', 'BM25', 'Vector Search'],
    github: undefined,
  },
  {
    title: 'Self-Hosted WebRTC Calling',
    tag: 'Full-stack · Networking',
    description:
      'A lightweight peer-to-peer video calling app built as a Jitsi replacement, running on a home server. Native browser WebRTC with a Node.js WebSocket signaling layer, ICE restart and reconnection logic, screen sharing, and Docker + Tailscale for secure access.',
    tech: ['WebRTC', 'Node.js', 'Docker', 'Tailscale'],
    github: undefined,
  },
  {
    title: 'CA-RAG Seminar',
    tag: 'Research · Seminar',
    description:
      'Seminar presentation on Context-Aware RAG (IEEE Access, 2025) — built the full slide deck and worked through the conceptual mechanics of semantic chunking, post-processing strategies, and the paper\'s bias limitations.',
    tech: ['RAG', 'NLP', 'IEEE'],
    github: undefined,
  },
  {
    title: 'Pest & Disease Detection',
    tag: 'Edge AI · Computer Vision',
    description:
      'On-device crop disease classifier for a Raspberry Pi 4, using a MobileNetV2 model quantized to TFLite and trained on the PlantVillage dataset — built as part of an internship project.',
    tech: ['MobileNetV2', 'TFLite', 'Raspberry Pi'],
    github: undefined,
  },
  {
    title: 'Hostel Management System',
    tag: 'Full-stack',
    description:
      'A micro project covering student and room allocation, fee tracking, and admin workflows end to end.',
    tech: ['Full-stack'],
    github: undefined,
  },
]

const Projects = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section id="projects" ref={ref} className="relative py-24 md:py-32">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <span className="mono text-sm text-[var(--accent)] tracking-widest uppercase">Projects</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Things I've <span className="gradient-text">shipped</span>.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
              className="glass rounded-2xl p-7 flex flex-col hover:bg-[var(--glass-strong)] transition-all group"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="mono text-xs text-[var(--accent)] tracking-wide uppercase">{project.tag}</span>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg hover:bg-[var(--glass)] transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="w-4 h-4 text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors" />
                  </a>
                )}
              </div>
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed mb-5 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="px-2.5 py-1 glass rounded-full text-xs font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/KARTHIKKJ369"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
          >
            See everything on GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
})

export default Projects
