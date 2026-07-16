import { motion } from 'framer-motion'
import { Cpu, Server, BrainCircuit, Globe, Cloud } from 'lucide-react'
import Reveal from './Reveal'
import { skillGroups } from '../data'

const icons: Record<string, typeof Cpu> = {
  'AI Systems': BrainCircuit,
  Frontend: Globe,
  Backend: Server,
  'AI / ML': Cpu,
  'Cloud & Tools': Cloud,
}

const sizeClasses: Record<string, string> = {
  large: 'sm:col-span-1 lg:col-span-2',
  wide: 'sm:col-span-2 lg:col-span-4',
  medium: 'sm:col-span-1 lg:col-span-2',
}

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container px-4">
        <Reveal amount={0.5} className="flex items-end justify-between mb-12 flex-wrap gap-2">
          <h2 className="text-3xl md:text-4xl font-semibold">What I reach for.</h2>
          <span className="mono text-xs text-[var(--muted)]">
            {skillGroups.reduce((s, g) => s + g.items.length, 0)} tools · {skillGroups.length} areas
          </span>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, i) => {
            const Icon = icons[group.title] ?? Cpu
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.23, 1, 0.32, 1] }}
                whileHover={{ y: -4 }}
                className={`card card-hover p-8 ${sizeClasses[group.size]}`}
              >
                <motion.div whileHover={{ rotate: -6, scale: 1.08 }} transition={{ duration: 0.3 }} className="inline-block">
                  <Icon className="w-5 h-5 text-[var(--accent)] mb-4" />
                </motion.div>
                <h3 className="font-medium mb-4">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="tag">{item}</span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
