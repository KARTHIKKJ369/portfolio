import { useEffect, useState, lazy, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, FileText } from 'lucide-react'
import { heroRoles } from '../data'

// Three.js is the single heaviest dependency in this project — split it into
// its own chunk so it loads after the critical hero text/CTA has painted,
// instead of blocking first contentful paint.
const HeroMesh = lazy(() => import('./HeroMesh'))

const ease = [0.23, 1, 0.32, 1] as const

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % heroRoles.length), 2600)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      <div className="container px-4 relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="mono text-sm text-[var(--muted)] mb-6"
            >
              Aluva, Kerala · B.Tech CSE '27
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease }}
              className="text-5xl md:text-6xl lg:text-[5.2rem] font-semibold leading-[1.03] tracking-tight mb-5"
            >
              Karthik Jayan
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16, ease }}
              className="h-10 mb-6 overflow-hidden"
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={heroRoles[roleIndex]}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4, ease }}
                  className="text-xl md:text-2xl font-medium accent-text"
                >
                  {heroRoles[roleIndex]}
                </motion.p>
              </AnimatePresence>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24, ease }}
              className="text-lg text-[var(--muted)] max-w-lg mb-10 leading-relaxed"
            >
              I build systems that sense, decide, and ship — from ESP32 firmware to LLM pipelines to
              the interface on top.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.32, ease }}
              className="flex flex-wrap gap-3"
            >
              <a href="#projects" className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm">
                View projects
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center gap-2 px-6 py-3 text-sm">
                <FileText className="w-4 h-4" />
                Resume
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease }}
            className="relative h-[380px] lg:h-[480px] hidden sm:block"
          >
            <Suspense fallback={<div className="w-full h-full" />}>
              <HeroMesh />
            </Suspense>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
