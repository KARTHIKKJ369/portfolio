import { motion } from 'framer-motion'
import Reveal from './Reveal'
import Terminal from './Terminal'
import { focusAreas } from '../data'

const journey = [
  { year: '2023', label: 'Started B.Tech CSE at MACE' },
  { year: '2024', label: 'First AI and full-stack builds' },
  { year: '2025', label: 'Shipped Recall — persistent LLM memory' },
  { year: '2026', label: 'Research internship, IIIT Kottayam' },
]

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="container px-4">
        <Reveal direction="left" amount={0.5}>
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight max-w-2xl mb-4">
            Not a resume — <span className="accent-text">who I actually am</span>.
          </h2>
          <p className="text-[var(--muted)] max-w-xl mb-14 leading-relaxed">
            I'm a Computer Science undergraduate who likes taking ideas all the way from a rough
            question to a shipped product. Most of what I build starts as something I want answered
            for myself — and turns into a working system with a retrieval layer, an agent loop, and a
            dashboard somewhere in the middle.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-[1.35fr_0.85fr] gap-14 items-start">
          {/* Terminal centerpiece — try "help" for a list of commands. */}
          <Reveal direction="scale" delay={0.05}>
            <Terminal />

            <div className="flex flex-wrap gap-2 mt-6">
              {focusAreas.map((area) => (
                <span key={area} className="tag">{area}</span>
              ))}
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.1}>
            <div className="space-y-0">
              {journey.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.45, delay: i * 0.08, ease: [0.23, 1, 0.32, 1] }}
                  className="grid grid-cols-[70px_1fr] gap-4 py-5 border-t border-[var(--border)] last:border-b"
                >
                  <span className="mono text-sm text-[var(--muted)] pt-0.5">{item.year}</span>
                  <p className="text-[var(--fg)]">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
