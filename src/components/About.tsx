import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Terminal, Cpu, Sparkles } from 'lucide-react'

const facts = [
  {
    icon: GraduationCap,
    title: 'B.Tech CSE',
    body: "Mar Athanasius College of Engineering (Autonomous), Kothamangalam — KTU 2019 scheme, currently S6/S7.",
  },
  {
    icon: Terminal,
    title: 'Interning at IIIT Kottayam',
    body: 'Working alongside coursework on applied research and systems problems.',
  },
  {
    icon: Cpu,
    title: 'Homelab tinkerer',
    body: 'Runs a Mac Mini M4 as a personal server — managed remotely over Tailscale and SSH from a phone.',
  },
  {
    icon: Sparkles,
    title: 'Builds full-stack, top to bottom',
    body: 'Comfortable moving from firmware and sensors up through backend APIs to the UI on top.',
  },
]

const About = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section id="about" ref={ref} className="relative py-24 md:py-32">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <span className="mono text-sm text-[var(--accent)] tracking-widest uppercase">About</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
            Curious by default,<br /><span className="gradient-text">builder by habit.</span>
          </h2>
          <p className="text-lg text-[var(--muted)] leading-relaxed">
            I'm a Computer Science undergraduate who likes taking ideas all the way from a breadboard
            to a browser tab. Most of what I build starts as a question I want answered for myself —
            how boats could avoid each other on a backwater at night, or whether an LLM could actually
            remember a conversation the way a person does — and turns into a working system with sensors,
            servers, and a dashboard somewhere in the middle.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {facts.map(({ icon: Icon, title, body }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-6 hover:bg-[var(--glass-strong)] transition-all"
            >
              <div className="w-11 h-11 rounded-xl glass-strong flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-[var(--accent)]" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{title}</h3>
              <p className="text-[var(--muted)] text-sm leading-relaxed">{body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
})

export default About
