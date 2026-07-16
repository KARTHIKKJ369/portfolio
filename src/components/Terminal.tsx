import { useEffect, useRef, useState, type ReactNode } from 'react'
import { projects, timeline, education, socials } from '../data'

// Interactive "developer terminal" that anchors the About section.
// Real command handling, real history, no gimmicks — just a small
// shell-flavored surface for exploring the same content that lives
// elsewhere on the page.

interface Line {
  id: number
  kind: 'input' | 'output'
  content: ReactNode
}

const PROMPT = 'karthik@portfolio:~$'

const skillBars: Array<{ name: string; level: number }> = [
  { name: 'React', level: 10 },
  { name: 'JavaScript', level: 9 },
  { name: 'Python', level: 9 },
  { name: 'RAG', level: 9 },
  { name: 'LLMs', level: 9 },
  { name: 'FastAPI', level: 7 },
  { name: 'Docker', level: 6 },
]

const fortunes = [
  'The best way to predict the future is to ship it.',
  'Every bug is a feature you haven’t understood yet.',
  'Simplicity is the ultimate form of context management.',
  'Code never lies. Comments sometimes do.',
  'A good retrieval step is worth a thousand parameters.',
]

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

function bar(level: number, max = 10) {
  return '█'.repeat(level) + '░'.repeat(max - level)
}

export default function Terminal() {
  const [lines, setLines] = useState<Line[]>([])
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState<number | null>(null)
  const [busy, setBusy] = useState(false)
  const idRef = useRef(0)
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const nextId = () => ++idRef.current
  const bootedRef = useRef(false)

  const push = (kind: Line['kind'], content: ReactNode) => {
    setLines((prev) => [...prev, { id: nextId(), kind, content }])
  }

  const pushBlock = (content: ReactNode) => push('output', content)

  useEffect(() => {
    // Guard against React.StrictMode's dev-only double-invoke of effects,
    // which would otherwise print the welcome block twice on mount.
    if (bootedRef.current) return
    bootedRef.current = true
    pushBlock(<HelpBlock />)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [lines])

  const focusInput = () => inputRef.current?.focus()

  async function run(raw: string) {
    const cmd = raw.trim()
    push('input', `${PROMPT} ${raw}`)
    if (!cmd) return

    setHistory((prev) => [...prev, raw])
    setHistoryIndex(null)
    setBusy(true)

    const [name, ...rest] = cmd.toLowerCase().split(/\s+/)
    const arg = rest.join(' ')

    switch (name) {
      case 'help':
        pushBlock(<HelpBlock />)
        break

      case 'whoami':
        await whoami()
        break

      case 'skills':
        pushBlock(
          <div className="space-y-1">
            {skillBars.map((s) => (
              <div key={s.name} className="flex items-center gap-3">
                <span className="w-24 flex-shrink-0">{s.name}</span>
                <span className="text-[var(--accent)] tracking-tight">{bar(s.level)}</span>
              </div>
            ))}
          </div>
        )
        break

      case 'projects':
        pushBlock(
          <div className="space-y-2">
            {projects.map((p) => (
              <div key={p.title}>
                <span className="text-[var(--fg)]">• {p.title}</span>
                <span className="text-[var(--muted)]"> — {p.tag}</span>
              </div>
            ))}
            <div className="text-[var(--muted)] pt-1">type "open &lt;project name&gt;" to view one</div>
          </div>
        )
        break

      case 'open': {
        const match = projects.find((p) => p.title.toLowerCase().includes(arg))
        if (!match) {
          pushBlock(<span className="text-[var(--muted)]">no project matches "{arg}"</span>)
        } else {
          pushBlock(
            <div className="space-y-1.5">
              <div className="text-[var(--fg)] font-medium">{match.title}</div>
              <div className="text-[var(--muted)]">{match.tag}</div>
              <div><span className="text-[var(--fg)]">Problem — </span><span className="text-[var(--muted)]">{match.problem}</span></div>
              <div><span className="text-[var(--fg)]">Solution — </span><span className="text-[var(--muted)]">{match.solution}</span></div>
              {match.href && (
                <a href={match.href} target="_blank" rel="noopener noreferrer" className="inline-block text-[var(--accent)] underline underline-offset-2">
                  {match.href}
                </a>
              )}
            </div>
          )
        }
        break
      }

      case 'education':
        pushBlock(
          <div className="space-y-3">
            {education.map((e) => (
              <div key={e.title}>
                <div className="text-[var(--muted)]">{e.period}</div>
                <div className="text-[var(--fg)]">{e.title}</div>
                <div className="text-[var(--muted)]">{e.org}</div>
                <div className="text-[var(--muted)]">{e.description}</div>
                <div className="text-[var(--accent)]">{e.statLabel}: {e.stat}</div>
              </div>
            ))}
          </div>
        )
        break

      case 'experience':
        pushBlock(
          <div className="space-y-3">
            {timeline.map((t) => (
              <div key={t.title}>
                <div className="text-[var(--muted)]">{t.period}</div>
                <div className="text-[var(--fg)]">{t.title}</div>
                <div className="text-[var(--muted)]">{t.org}</div>
              </div>
            ))}
          </div>
        )
        break

      case 'neofetch':
        pushBlock(<NeofetchBlock />)
        break

      case 'github':
        pushBlock(<span className="text-[var(--muted)]">opening github…</span>)
        window.open(socials.find((s) => s.short === 'GitHub')?.href, '_blank')
        break

      case 'linkedin':
        pushBlock(<span className="text-[var(--muted)]">opening linkedin…</span>)
        window.open(socials.find((s) => s.short === 'LinkedIn')?.href, '_blank')
        break

      case 'resume':
        pushBlock(<span className="text-[var(--muted)]">downloading resume…</span>)
        window.open('/resume.pdf', '_blank')
        break

      case 'contact':
        pushBlock(
          <div className="space-y-1">
            {socials.map((s) => (
              <div key={s.short}>
                <span className="text-[var(--fg)]">{s.short}: </span>
                <span className="text-[var(--muted)]">{s.label}</span>
              </div>
            ))}
          </div>
        )
        break

      case 'clear':
        setLines([])
        setBusy(false)
        return

      // Easter eggs
      case 'coffee':
        pushBlock(<span>☕ brewing… here's your coffee. back to work.</span>)
        break

      case 'fortune':
        pushBlock(<span className="text-[var(--muted)] italic">"{fortunes[Math.floor(Math.random() * fortunes.length)]}"</span>)
        break

      case 'hello':
        pushBlock(<span>hey there 👋</span>)
        break

      case 'pwd':
        pushBlock(<span className="text-[var(--muted)]">/home/karthik/portfolio</span>)
        break

      case 'ls':
        pushBlock(
          <span className="text-[var(--muted)]">about.md  skills.json  projects/  resume.pdf  contact.txt</span>
        )
        break

      case 'cat':
        if (arg === 'about.md') {
          pushBlock(
            <span className="text-[var(--muted)]">
              # about{'\n'}CS undergrad building RAG pipelines and LLM agents. Likes taking ideas from a notebook to production.
            </span>
          )
        } else {
          pushBlock(<span className="text-[var(--muted)]">cat: {arg || 'file'}: no such file</span>)
        }
        break

      case 'sudo':
        if (arg === 'hire karthik') {
          pushBlock(<span className="text-[var(--accent)]">permission granted. reach out via the contact command — he'll get back to you fast.</span>)
        } else {
          pushBlock(<span className="text-[var(--muted)]">nice try. this shell doesn't have sudo.</span>)
        }
        break

      case 'rm':
        pushBlock(<span className="text-[var(--muted)]">not a real shell — nothing was harmed 😄</span>)
        break

      case 'matrix':
        pushBlock(<span className="text-[var(--accent)]">wake up, karthik… the pipeline has you.</span>)
        break

      default:
        pushBlock(
          <span className="text-[var(--muted)]">command not found: {name} — type "help" for a list</span>
        )
    }

    setBusy(false)
  }

  async function whoami() {
    pushBlock(
      <div className="space-y-1">
        <div><span className="text-[var(--fg)]">name</span>    Karthik Jayan</div>
        <div><span className="text-[var(--fg)]">role</span>    AI Systems Engineer</div>
        <div className="text-[var(--muted)] max-w-md">
          CS undergraduate who builds retrieval-augmented systems, LLM agents, and the full-stack
          apps that wrap around them.
        </div>
      </div>
    )
    await sleep(250)
    pushBlock(<span className="text-[var(--muted)]">Loading profile…</span>)
    await sleep(350)

    const barId = nextId()
    setLines((prev) => [...prev, { id: barId, kind: 'output', content: <ProgressLine /> }])
    await sleep(900)

    pushBlock(<span className="text-[var(--muted)]">Rendering avatar…</span>)
    await sleep(300)
    pushBlock(<AvatarReveal />)
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (busy) return
    const value = input
    setInput('')
    run(value)
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (history.length === 0) return
      const idx = historyIndex === null ? history.length - 1 : Math.max(0, historyIndex - 1)
      setHistoryIndex(idx)
      setInput(history[idx])
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex === null) return
      const idx = historyIndex + 1
      if (idx >= history.length) {
        setHistoryIndex(null)
        setInput('')
      } else {
        setHistoryIndex(idx)
        setInput(history[idx])
      }
    }
  }

  return (
    <div
      className="relative rounded-[28px] overflow-hidden border border-[var(--border)] bg-[var(--bg-elevated)] flex flex-col h-[480px]"
      onClick={focusInput}
    >
      <div className="flex items-center gap-2 px-5 py-4 border-b border-[var(--border)] bg-[var(--bg-elevated-2)] flex-shrink-0">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="mono text-xs text-[var(--muted)] ml-3">karthik@portfolio — zsh</span>
      </div>

      <div ref={scrollRef} className="terminal-scroll mono text-[13px] leading-relaxed px-5 py-4 flex-1 min-h-0 overflow-y-auto">
        {lines.map((line) => (
          <div key={line.id} className={line.kind === 'input' ? 'text-[var(--fg)] mb-2' : 'text-[var(--fg)] mb-3'}>
            {line.content}
          </div>
        ))}

        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <span className="text-[var(--accent)] flex-shrink-0">{PROMPT}</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={busy}
            autoFocus
            spellCheck={false}
            autoComplete="off"
            className="flex-1 bg-transparent outline-none text-[var(--fg)] caret-[var(--accent)] min-w-0"
          />
        </form>
      </div>
    </div>
  )
}

function HelpBlock() {
  const commands = [
    'whoami', 'skills', 'projects', 'education', 'experience',
    'neofetch', 'github', 'linkedin', 'resume', 'contact', 'clear', 'help',
  ]
  return (
    <div>
      <div className="text-[var(--muted)] mb-2">Available commands</div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-1">
        {commands.map((c) => (
          <span key={c} className="text-[var(--accent)]">{c}</span>
        ))}
      </div>
    </div>
  )
}

function ProgressLine() {
  const [pct, setPct] = useState(0)
  useEffect(() => {
    const id = setInterval(() => {
      setPct((p) => (p >= 100 ? 100 : p + 5))
    }, 40)
    return () => clearInterval(id)
  }, [])
  const filled = Math.round((pct / 100) * 20)
  return (
    <span className="text-[var(--accent)]">
      {'█'.repeat(filled)}{'░'.repeat(20 - filled)} {pct}%
    </span>
  )
}

function AvatarReveal() {
  const [errored, setErrored] = useState(false)
  return (
    <div className="w-20 h-20 rounded-lg overflow-hidden border border-[var(--border)] bg-[var(--bg-elevated-2)] flex items-center justify-center">
      {errored ? (
        <span className="accent-text font-semibold text-lg">KJ</span>
      ) : (
        <img
          src="/headshot.jpg"
          alt="Karthik Jayan"
          className="w-full h-full object-cover"
          onError={() => setErrored(true)}
        />
      )}
    </div>
  )
}

function NeofetchBlock() {
  return (
    <div className="space-y-0.5">
      <div><span className="text-[var(--accent)]">Name</span>      Karthik Jayan</div>
      <div><span className="text-[var(--accent)]">Role</span>      AI Systems Engineer</div>
      <div><span className="text-[var(--accent)]">Location</span>  Kerala, India</div>
      <div className="h-2" />
      <div><span className="text-[var(--accent)]">Building</span>  RAG Applications</div>
      <div><span className="text-[var(--accent)]">Learning</span>  Multi-Agent Systems</div>
      <div className="h-2" />
      <div className="text-[var(--accent)]">Tech Stack</div>
      <div className="text-[var(--muted)]">React · Next.js · JavaScript · Python · FastAPI</div>
      <div className="h-2" />
      <div className="text-[var(--accent)]">AI Stack</div>
      <div className="text-[var(--muted)]">LangChain · Ollama · OpenCV</div>
      <div className="h-2" />
      <div><span className="text-[var(--accent)]">Editor</span>    VS Code</div>
      <div className="h-2" />
      <div><span className="text-[var(--accent)]">Status</span>    Building the next thing…</div>
    </div>
  )
}
