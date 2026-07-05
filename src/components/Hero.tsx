import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import { Code, Zap, Cpu, Globe, ArrowRight, MousePointer2 } from 'lucide-react'
import HeroCanvas from './HeroCanvas'
import { forwardRef } from 'react'

const techIcons = [
  { icon: Code, color: '#00d4aa', label: 'Python/JS' },
  { icon: Cpu, color: '#0099ff', label: 'AI/ML' },
  { icon: Zap, color: '#7c3aed', label: 'IoT/Edge' },
  { icon: Globe, color: '#f59e0b', label: 'Backend' },
]


const Hero = forwardRef<HTMLElement>((_props, ref) => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.target.classList.toggle('visible', entry.isIntersecting),
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={(node) => {
        (sectionRef as React.MutableRefObject<HTMLElement | null>).current = node;
        if (typeof ref === 'function') {
          ref(node);
        } else if (ref) {
          (ref as React.MutableRefObject<HTMLElement | null>).current = node;
        }
      }}
      id="hero"
      className="min-h-screen flex items-center justify-center relative reveal"
    >
      <div className="absolute inset-0 overflow-hidden">
        <Canvas camera={{ position: [0, 0, 15], fov: 45 }} style={{ width: '100%', height: '100%' }}>
          <HeroCanvas />
        </Canvas>
      </div>

      <div className="relative z-10 container px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="mb-6 flex items-center justify-center lg:justify-start gap-3"
            >
              <span className="px-4 py-1.5 glass rounded-full text-sm font-medium gradient-text">
                B.Tech CSE • MACE '27
              </span>
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] pulse-glow" />
              <span className="px-4 py-1.5 glass rounded-full text-sm font-medium text-[var(--muted)]">
                Aluva, Kerala
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
            >
              <span className="block">Karthik</span>
              <span className="block gradient-text">Jayan</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              className="text-lg md:text-xl text-[var(--muted)] mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Computer Science undergraduate passionate about{' '}
              <span className="gradient-text">Artificial Intelligence</span>,{' '}
              <span className="gradient-text">Backend Development</span>,{' '}
              <span className="gradient-text">IoT Systems</span>, and{' '}
              <span className="gradient-text">Open Source</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12"
            >
              <a
                href="#projects"
                className="group px-8 py-4 glass gradient-border rounded-xl font-semibold text-lg hover:bg-[var(--accent-dim)] transition-all relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Projects
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a
                href="mailto:karthikjayan369@gmail.com"
                className="px-8 py-4 glass rounded-xl font-semibold text-lg hover:bg-[var(--glass-strong)] transition-all border border-[var(--glass-border)]"
              >
                Get In Touch
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 glass rounded-xl font-semibold text-lg hover:bg-[var(--glass-strong)] transition-all border border-[var(--glass-border)] hidden sm:inline-flex"
              >
                Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
              className="flex flex-wrap gap-6 justify-center lg:justify-start"
            >
              {techIcons.map(({ icon: Icon, color, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3 p-4 glass rounded-xl min-w-[160px] hover:bg-[var(--glass-strong)] transition-all"
                >
                  <div className="p-3 rounded-xl" style={{ background: `${color}22` }}>
                    <Icon className="w-6 h-6" style={{ color }} />
                  </div>
                  <span className="font-medium">{label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              <Canvas
                className="absolute inset-0"
                camera={{ position: [0, 0, 12], fov: 40 }}
                style={{ touchAction: 'none' }}
              >
                <HeroCanvas />
                <Html
                  transform
                  position={[0, 0, 0]}
                  distanceFactor={10}
                  sprite
                  zIndexRange={[100, 200]}
                >
                  <div className="w-96 h-96 glass-strong rounded-3xl p-8 flex flex-col items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-radial from-[var(--accent-dim)] via-transparent to-transparent" />
                    <div className="relative z-10 text-center">
                      <div className="w-24 h-24 mx-auto mb-6 relative">
                        <div className="absolute inset-0 rounded-full border-2 border-[var(--accent)] animate-ping opacity-50" />
                        <div className="absolute inset-0 rounded-full border-2 border-[var(--accent)] animate-ping opacity-30" style={{ animationDelay: '1s' }} />
                        <div className="relative w-full h-full rounded-full glass-strong flex items-center justify-center border border-[var(--glass-border)]">
                          <Cpu className="w-12 h-12 gradient-text" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">AI & Backend Developer</h3>
                      <p className="text-[var(--muted)] mb-6 max-w-xs mx-auto">
                        Building intelligent systems with LLMs, RAG architectures, and scalable backends
                      </p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {['Python', 'Node.js', 'RAG', 'LLMs', 'IoT', 'Linux'].map((tech) => (
                          <span key={tech} className="px-3 py-1 glass rounded-full text-xs font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Html>
              </Canvas>
            </div>

            <motion.div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex items-center gap-2 px-4 py-2 glass rounded-full"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <MousePointer2 className="w-4 h-4 text-[var(--accent)]" />
              <span className="text-sm text-[var(--muted)] mono">Scroll to explore</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
})

export default Hero