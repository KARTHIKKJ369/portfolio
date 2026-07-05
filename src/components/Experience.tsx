import { forwardRef } from 'react'
import { motion } from 'framer-motion'

const timeline = [
  {
    period: 'Ongoing',
    title: 'Intern',
    org: 'IIIT Kottayam',
    description:
      'Working on applied research and systems problems alongside coursework, in parallel with independent project work.',
  },
  {
    period: '2025 – Present',
    title: 'Group 9 Mini Project — Recall',
    org: 'Mar Athanasius College of Engineering',
    description:
      'Led development of a persistent semantic memory architecture for LLMs under faculty guides Prof. Nimisha P Abraham and Prof. Leya Elizabeth. Reached publication stage: accepted at JETIR, submitted to Rajagiri.',
  },
  {
    period: '2023 – 2027',
    title: 'B.Tech, Computer Science & Engineering',
    org: 'Mar Athanasius College of Engineering (Autonomous), Kothamangalam',
    description: 'KTU 2019 scheme. Currently in S6/S7.',
  },
]

const Experience = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section id="experience" ref={ref} className="relative py-24 md:py-32">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <span className="mono text-sm text-[var(--accent)] tracking-widest uppercase">Experience</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Where the time's <span className="gradient-text">gone</span>.
          </h2>
        </motion.div>

        <div className="relative max-w-2xl">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[var(--glass-border)]" />
          <div className="space-y-10">
            {timeline.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-8"
              >
                <span className="absolute left-0 top-1.5 w-4 h-4 rounded-full glass-strong border border-[var(--accent)]" />
                <span className="mono text-xs text-[var(--accent)] tracking-wide uppercase">{item.period}</span>
                <h3 className="text-lg font-semibold mt-1">{item.title}</h3>
                <p className="text-sm text-[var(--muted)] mb-2">{item.org}</p>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
})

export default Experience
