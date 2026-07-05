import { forwardRef } from 'react'
import { motion } from 'framer-motion'

const facts = [
  ['Education', "B.Tech CSE, Mar Athanasius College of Engineering (Autonomous), Kothamangalam — KTU 2019 scheme, S6/S7."],
  ['Current work', 'Interning at IIIT Kottayam alongside coursework.'],
  ['Setup', 'Runs a Mac Mini M4 as a personal server, managed remotely over Tailscale.'],
  ['Approach', 'Builds full-stack — firmware and sensors up through backend APIs to the UI on top.'],
]

const About = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section id="about" ref={ref} className="py-24 md:py-28">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-[0.9fr_1.1fr] gap-12"
        >
          <div>
            <span className="mono text-xs text-[var(--muted)] tracking-widest uppercase">01 · About</span>
            <h2 className="text-3xl md:text-4xl font-semibold mt-3">
              Curious by default, builder by habit.
            </h2>
          </div>

          <div>
            <p className="text-[var(--muted)] leading-relaxed mb-8">
              I'm a Computer Science undergraduate who likes taking ideas all the way from a breadboard
              to a browser tab. Most of what I build starts as a question I want answered for myself —
              how boats could avoid each other on a backwater at night, or whether an LLM could actually
              remember a conversation the way a person does — and turns into a working system with sensors,
              servers, and a dashboard somewhere in the middle.
            </p>

            <dl className="divide-y divide-[var(--border)]">
              {facts.map(([label, body]) => (
                <div key={label} className="grid sm:grid-cols-[140px_1fr] gap-2 py-4 first:pt-0">
                  <dt className="mono text-sm text-[var(--muted)]">{label}</dt>
                  <dd className="text-sm text-[var(--fg)]">{body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </motion.div>
      </div>
    </section>
  )
})

export default About
