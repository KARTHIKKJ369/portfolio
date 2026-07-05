import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { Code2, Server, BrainCircuit, Cpu, LayoutGrid, Database } from 'lucide-react'

const skillGroups = [
  {
    icon: Code2,
    title: 'Languages',
    color: '#00d4aa',
    items: ['Python', 'C / C++', 'TypeScript / JavaScript', 'Java'],
  },
  {
    icon: Server,
    title: 'Backend & Systems',
    color: '#0099ff',
    items: ['FastAPI', 'Node.js', 'Docker', 'Linux', 'Caddy / Nginx', 'Tailscale'],
  },
  {
    icon: BrainCircuit,
    title: 'AI / ML',
    color: '#7c3aed',
    items: ['LSTM & sequence models', 'RAG pipelines', 'LLM orchestration', 'TensorFlow Lite'],
  },
  {
    icon: Cpu,
    title: 'IoT & Embedded',
    color: '#f59e0b',
    items: ['ESP32', 'LoRa (AES-128 CBC)', 'MPU6050 / HC-SR04', 'Wokwi & PlatformIO'],
  },
  {
    icon: LayoutGrid,
    title: 'Web & Frontend',
    color: '#00d4aa',
    items: ['React', 'Tailwind CSS', 'Three.js', 'Framer Motion'],
  },
  {
    icon: Database,
    title: 'Data & Tooling',
    color: '#0099ff',
    items: ['MQTT', 'Hybrid BM25 + dense retrieval', 'Git', 'REST API design'],
  },
]

const Skills = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section id="skills" ref={ref} className="relative py-24 md:py-32">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <span className="mono text-sm text-[var(--accent)] tracking-widest uppercase">Skills</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            The <span className="gradient-text">stack</span> I reach for.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map(({ icon: Icon, title, color, items }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass rounded-2xl p-6 hover:bg-[var(--glass-strong)] transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl" style={{ background: `${color}22` }}>
                  <Icon className="w-5 h-5" style={{ color }} />
                </div>
                <h3 className="font-semibold text-lg">{title}</h3>
              </div>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item} className="text-sm text-[var(--muted)] flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full" style={{ background: color }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
})

export default Skills
