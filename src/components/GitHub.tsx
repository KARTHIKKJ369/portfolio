import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { Github, GitBranch, Star } from 'lucide-react'

const featuredRepos = [
  {
    name: 'backwater_collision_avoidance',
    description: 'Two-node ESP32 + LoRa collision avoidance system with an LSTM trajectory predictor.',
    url: 'https://github.com/KARTHIKKJ369/backwater_collision_avoidance',
  },
  {
    name: 'portfolio',
    description: 'This site — React, Three.js, and Tailwind.',
    url: 'https://github.com/KARTHIKKJ369/portfolio',
  },
]

const GitHub = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section id="github" ref={ref} className="relative py-24 md:py-32">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <span className="mono text-sm text-[var(--accent)] tracking-widest uppercase">GitHub</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Mostly <span className="gradient-text">public</span> by habit.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid md:grid-cols-2 gap-4 mb-8"
        >
          <img
            src="https://github-readme-stats.vercel.app/api?username=KARTHIKKJ369&show_icons=true&hide_border=true&bg_color=00000000&title_color=00d4aa&icon_color=0099ff&text_color=7a7a8a"
            alt="Karthik's GitHub stats"
            className="w-full rounded-2xl glass"
            loading="lazy"
          />
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=KARTHIKKJ369&layout=compact&hide_border=true&bg_color=00000000&title_color=00d4aa&text_color=7a7a8a"
            alt="Karthik's most used languages"
            className="w-full rounded-2xl glass"
            loading="lazy"
          />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          {featuredRepos.map((repo, i) => (
            <motion.a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-6 hover:bg-[var(--glass-strong)] transition-all group"
            >
              <div className="flex items-center gap-2 mb-3">
                <GitBranch className="w-4 h-4 text-[var(--accent)]" />
                <span className="font-mono text-sm font-medium group-hover:text-[var(--accent)] transition-colors">
                  {repo.name}
                </span>
              </div>
              <p className="text-sm text-[var(--muted)] leading-relaxed">{repo.description}</p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <a
            href="https://github.com/KARTHIKKJ369"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass gradient-border rounded-xl font-medium hover:bg-[var(--accent-dim)] transition-all"
          >
            <Github className="w-4 h-4" />
            @KARTHIKKJ369
            <Star className="w-4 h-4 text-[var(--accent)]" />
          </a>
        </motion.div>
      </div>
    </section>
  )
})

export default GitHub
