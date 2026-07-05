import { forwardRef } from 'react'
import { motion } from 'framer-motion'

const skillGroups = [
  { title: 'Languages', items: ['Python', 'C / C++', 'TypeScript / JavaScript', 'Java', 'SQL'] },
  { title: 'Backend & systems', items: ['FastAPI', 'Node.js / Express', 'Docker', 'Linux', 'Caddy / Nginx', 'Tailscale', 'Supabase'] },
  { title: 'AI / ML', items: ['LSTM & sequence models', 'RAG pipelines', 'Sentence transformers', 'Local LLMs (Ollama)', 'TensorFlow Lite'] },
  { title: 'IoT & embedded', items: ['ESP32', 'LoRa (AES-128 CBC)', 'MPU6050 / HC-SR04', 'Wokwi & PlatformIO'] },
  { title: 'Web & frontend', items: ['React', 'Tailwind CSS'] },
  { title: 'Data & tooling', items: ['MQTT', 'Hybrid BM25 + dense retrieval', 'Git', 'REST API design'] },
]

const Skills = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section id="skills" ref={ref} className="py-24 md:py-28">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="mono text-xs text-[var(--muted)] tracking-widest uppercase">02 · Skills</span>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3">The stack I reach for.</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="py-4 border-t border-[var(--border)]"
            >
              <h3 className="mono text-sm text-[var(--muted)] mb-3">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="tag">{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
})

export default Skills
