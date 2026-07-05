import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, GitBranch } from 'lucide-react'

const featuredRepos = [
  {
    name: 'backwater_collision_avoidance',
    description: 'Two-node ESP32 + LoRa collision avoidance system with an LSTM trajectory predictor.',
    url: 'https://github.com/KARTHIKKJ369/backwater_collision_avoidance',
  },
  {
    name: 'portfolio',
    description: 'This site — React, TypeScript, and Tailwind.',
    url: 'https://github.com/KARTHIKKJ369/portfolio',
  },
]

const GitHub = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section id="github" ref={ref} className="py-24 md:py-28">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="mono text-xs text-[var(--muted)] tracking-widest uppercase">05 · GitHub</span>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3">Mostly public by habit.</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="grid md:grid-cols-2 gap-4 mb-10"
        >
          <img
            src="https://github-readme-stats.vercel.app/api?username=KARTHIKKJ369&show_icons=true&hide_border=true&bg_color=00000000&title_color=f2f2f4&icon_color=5b6ef0&text_color=8a8a92"
            alt="Karthik's GitHub stats"
            className="w-full rounded-2xl card"
            loading="lazy"
          />
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=KARTHIKKJ369&layout=compact&hide_border=true&bg_color=00000000&title_color=f2f2f4&text_color=8a8a92"
            alt="Karthik's most used languages"
            className="w-full rounded-2xl card"
            loading="lazy"
          />
        </motion.div>

        <div className="max-w-2xl mb-10">
          {featuredRepos.map((repo, i) => (
            <motion.a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group flex items-center justify-between gap-4 py-4 border-t border-[var(--border)] last:border-b"
            >
              <div className="flex items-start gap-3">
                <GitBranch className="w-4 h-4 text-[var(--muted)] mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-mono text-sm font-medium">{repo.name}</span>
                  <p className="text-sm text-[var(--muted)] mt-0.5">{repo.description}</p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[var(--muted)] group-hover:text-[var(--fg)] transition-colors flex-shrink-0" />
            </motion.a>
          ))}
        </div>

        <a
          href="https://github.com/KARTHIKKJ369"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary inline-flex items-center gap-2 px-5 py-2.5 text-sm"
        >
          @KARTHIKKJ369 on GitHub
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  )
})

export default GitHub
