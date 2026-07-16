import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, GitBranch, Users, FolderGit2 } from 'lucide-react'
import Reveal from './Reveal'

const GITHUB_USER = 'KARTHIKKJ369'
const ease = [0.23, 1, 0.32, 1] as const

const featuredRepos = [
  {
    name: 'backwater_collision_avoidance',
    description: 'Intelligent collision avoidance system combining trajectory prediction, real-time mapping, and distributed communication.',
    url: 'https://github.com/KARTHIKKJ369/backwater_collision_avoidance',
  },
  {
    name: 'portfolio',
    description: 'This site — React, TypeScript, and Tailwind.',
    url: 'https://github.com/KARTHIKKJ369/portfolio',
  },
]

interface Stats {
  publicRepos: number
  followers: number
  yearsActive: number
}

interface LangShare {
  name: string
  pct: number
}

const barColors = ['var(--accent)', 'var(--muted)', 'var(--border-strong)', 'var(--fg)', 'var(--muted-2)']

export default function GitHub() {
  const [stats, setStats] = useState<Stats | null>(null)
  const [languages, setLanguages] = useState<LangShare[] | null>(null)
  const [status, setStatus] = useState<'loading' | 'live' | 'error'>('loading')

  useEffect(() => {
    const controller = new AbortController()

    async function load() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USER}`, { signal: controller.signal }),
          fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`, {
            signal: controller.signal,
          }),
        ])

        if (!userRes.ok || !reposRes.ok) throw new Error('GitHub API request failed')

        const user = await userRes.json()
        const repos: Array<{ language: string | null; fork: boolean }> = await reposRes.json()

        const createdYear = new Date(user.created_at).getFullYear()
        setStats({
          publicRepos: user.public_repos,
          followers: user.followers,
          yearsActive: Math.max(1, new Date().getFullYear() - createdYear),
        })

        const counts = new Map<string, number>()
        repos
          .filter((r) => !r.fork && r.language)
          .forEach((r) => {
            counts.set(r.language as string, (counts.get(r.language as string) ?? 0) + 1)
          })

        const total = [...counts.values()].reduce((a, b) => a + b, 0)
        const top = [...counts.entries()]
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5)
          .map(([name, count]) => ({ name, pct: total ? Math.round((count / total) * 100) : 0 }))

        setLanguages(top)
        setStatus('live')
      } catch {
        setStatus('error')
      }
    }

    load()
    return () => controller.abort()
  }, [])

  return (
    <section id="github" className="py-24">
      <div className="container px-4">
        <Reveal amount={0.5} className="flex items-end justify-between mb-16 flex-wrap gap-2">
          <h2 className="text-3xl md:text-4xl font-semibold">Mostly public by habit.</h2>
          {status !== 'error' && (
            <span className="mono text-xs text-[var(--muted)] flex items-center gap-1.5">
              <span className={`w-1.5 h-1.5 rounded-full bg-[var(--accent)] ${status === 'live' ? 'animate-pulse' : 'opacity-40'}`} />
              {status === 'live' ? 'live from GitHub' : 'syncing…'}
            </span>
          )}
        </Reveal>

        {status === 'error' ? (
          <p className="text-sm text-[var(--muted)] mb-10">
            GitHub's public API is rate-limited and occasionally unavailable — the repos below are still
            accurate; for live stats, see{' '}
            <a href="https://github.com/KARTHIKKJ369" target="_blank" rel="noopener noreferrer" className="accent-text underline underline-offset-2">
              the profile directly
            </a>.
          </p>
        ) : (
          <Reveal delay={0.05} className="grid sm:grid-cols-3 gap-5 mb-10 items-start">
            <div className="card card-hover p-8 sm:p-9">
              <div className="flex items-center justify-between">
                <FolderGit2 className="w-4 h-4 text-[var(--muted)]" />
                <span className="text-xs text-[var(--muted)]">public repos</span>
              </div>
              <div className="mono text-4xl font-medium mt-8">
                {stats ? stats.publicRepos : <span className="text-[var(--muted)]">···</span>}
              </div>
            </div>
            <div className="card card-hover p-8 sm:p-9">
              <div className="flex items-center justify-between">
                <Users className="w-4 h-4 text-[var(--muted)]" />
                <span className="text-xs text-[var(--muted)]">followers</span>
              </div>
              <div className="mono text-4xl font-medium mt-8">
                {stats ? stats.followers : <span className="text-[var(--muted)]">···</span>}
              </div>
            </div>
            <div className="card card-hover p-8 sm:p-9 sm:col-span-1 col-span-2">
              <div className="text-xs text-[var(--muted)] mb-4">top languages</div>
              <div className="space-y-2.5">
                {languages && languages.length > 0 ? (
                  languages.map((lang, i) => (
                    <div key={lang.name} className="flex items-center gap-3 text-xs">
                      <span className="w-20 text-[var(--muted)] truncate flex-shrink-0">{lang.name}</span>
                      <div className="flex-1 h-1.5 rounded-full bg-[var(--border)] overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: barColors[i % barColors.length] }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${lang.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.1 + i * 0.05, ease }}
                        />
                      </div>
                      <span className="mono text-[var(--muted)] w-8 text-right flex-shrink-0">{lang.pct}%</span>
                    </div>
                  ))
                ) : (
                  <div className="text-xs text-[var(--muted)]">···</div>
                )}
              </div>
            </div>
          </Reveal>
        )}

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
              transition={{ duration: 0.4, delay: i * 0.06, ease }}
              className="group flex items-center justify-between gap-5 py-7 border-t border-[var(--border)] last:border-b"
            >
              <div className="flex items-start gap-3">
                <GitBranch className="w-4 h-4 text-[var(--muted)] mt-2 flex-shrink-0" />
                <div>
                  <span className="font-mono text-sm font-medium">{repo.name}</span>
                  <p className="text-sm text-[var(--muted)] mt-2">{repo.description}</p>
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
}