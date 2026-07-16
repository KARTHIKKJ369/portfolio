import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { education } from '../data'

const ease = [0.23, 1, 0.32, 1] as const

export default function Education() {
  return (
    <section id="education" className="py-24">
      <div className="container px-4">
        <Reveal amount={0.5}>
          <h2 className="text-3xl md:text-4xl font-semibold mb-14">Education.</h2>
        </Reveal>

        <div className="max-w-3xl space-y-4">
          {education.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, delay: i * 0.08, ease }}
              className="card p-8 sm:p-9 grid sm:grid-cols-[1fr_auto] gap-6 sm:items-start"
            >
              <div>
                <span className="mono text-xs text-[var(--muted)]">{item.period}</span>
                <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
                <p className="text-sm text-[var(--muted)] mt-2">{item.org}</p>
                <p className="text-sm text-[var(--muted)] mt-2 leading-relaxed">{item.description}</p>
              </div>
              <div className="flex sm:flex-col items-center sm:items-end gap-2 sm:gap-1 sm:text-right pt-4 sm:pt-0 border-t sm:border-t-0 sm:border-l border-[var(--border)] sm:pl-8">
                <div className="mono text-2xl font-semibold accent-text">{item.stat}</div>
                <div className="text-xs text-[var(--muted)] uppercase tracking-wide">{item.statLabel}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
