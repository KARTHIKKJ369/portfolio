import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const stack = ['Python', 'FastAPI', 'React', 'ESP32', 'LLMs / RAG']

const Hero = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section ref={ref} id="hero" className="min-h-screen flex items-center pt-28 pb-20">
      <div className="container px-4">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mono text-sm text-[var(--muted)] mb-6"
            >
              B.Tech CSE, MACE '27 · Aluva, Kerala
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight mb-6"
            >
              Karthik Jayan
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-[var(--muted)] max-w-lg mb-10 leading-relaxed"
            >
              CS undergraduate building backend systems, IoT devices, and LLM
              applications — usually all three in the same project.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex flex-wrap gap-3 mb-12"
            >
              <a href="#projects" className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm">
                View projects
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#contact" className="btn-secondary inline-flex items-center px-6 py-3 text-sm">
                Get in touch
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-2"
            >
              {stack.map((item) => (
                <span key={item} className="tag">{item}</span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card p-6 mono text-sm text-[var(--muted)] leading-loose hidden sm:block"
          >
            <p><span className="accent-text">&gt;</span> role: CS undergrad, MACE</p>
            <p><span className="accent-text">&gt;</span> focus: AI · backend · IoT</p>
            <p><span className="accent-text">&gt;</span> current: intern @ IIIT Kottayam</p>
            <p><span className="accent-text">&gt;</span> homelab: Mac Mini M4, remote over Tailscale</p>
            <p><span className="accent-text">&gt;</span> status: <span className="text-[var(--fg)]">building</span></p>
          </motion.div>
        </div>
      </div>
    </section>
  )
})

export default Hero
