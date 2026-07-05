import { forwardRef } from 'react'
import { motion } from 'framer-motion'

const timeline = [
  {
    period: 'Ongoing',
    title: 'Intern',
    org: 'IIIT Kottayam',
    description: 'Working on applied research and systems problems alongside coursework.',
  },
  {
    period: '2025 – Present',
    title: 'Group 9 Mini Project — Recall',
    org: 'Mar Athanasius College of Engineering',
    description:
      'Led development of a persistent semantic memory architecture for LLMs under faculty guides Prof. Nimisha P Abraham and Prof. Leya Elizabeth. Accepted at JETIR, submitted to Rajagiri.',
  },
  {
    period: '2023 – Present',
    title: 'FOSS Team Member',
    org: 'NetX MACE',
    description: 'Open-source contribution, community participation, and technical workshops.',
  },
  {
    period: '2023 – Present',
    title: 'Volunteer',
    org: 'Hult Prize, MACE',
    description: 'Event organization, team coordination, and technical support.',
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
    <section id="experience" ref={ref} className="py-24 md:py-28">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="mono text-xs text-[var(--muted)] tracking-widest uppercase">04 · Experience</span>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3">Where the time's gone.</h2>
        </motion.div>

        <div className="max-w-2xl">
          {timeline.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="grid sm:grid-cols-[110px_1fr] gap-2 sm:gap-6 py-5 border-t border-[var(--border)] last:border-b"
            >
              <span className="mono text-xs text-[var(--muted)] pt-0.5">{item.period}</span>
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-[var(--muted)] mb-1.5">{item.org}</p>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
})

export default Experience
