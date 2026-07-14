import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { timeline } from '../data'

const ease = [0.23, 1, 0.32, 1] as const

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="container px-4">
        <Reveal amount={0.5}>
          <h2 className="text-3xl md:text-4xl font-semibold mb-14">Where the time's gone.</h2>
        </Reveal>

        <div className="max-w-2xl relative">
          <div className="absolute left-[5px] top-2 bottom-2 w-px bg-[var(--border)]" aria-hidden="true" />
          {timeline.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.07, ease }}
              whileHover={{ x: 6 }}
              className="relative grid grid-cols-[24px_1fr] gap-5 py-6"
            >
              <span className="relative flex items-start justify-center pt-1.5">
                <span className="w-[11px] h-[11px] rounded-full bg-[var(--bg)] border-2 border-[var(--accent)] z-10" />
              </span>
              <div>
                <span className="mono text-xs text-[var(--muted)]">{item.period}</span>
                <h3 className="font-semibold mt-1">{item.title}</h3>
                <p className="text-sm text-[var(--muted)] mb-1.5">{item.org}</p>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
