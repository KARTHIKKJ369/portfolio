import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Check } from 'lucide-react'
import Reveal from './Reveal'
import { socials } from '../data'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const isValid = form.name.trim() && /\S+@\S+\.\S+/.test(form.email) && form.message.trim()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!isValid) return

    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:karthikjayan369@gmail.com?subject=${subject}&body=${body}`

    setSent(true)
    setTimeout(() => setSent(false), 2500)
  }

  return (
    <section id="contact" className="py-24">
      <div className="container px-4 max-w-3xl mx-auto text-center">
        <Reveal direction="scale" amount={0.5}>
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">Let's build something.</h2>
          <p className="text-[var(--muted)] max-w-lg mx-auto mb-10">
            Open to internships, collaborations, or conversations about AI systems, LLMs, and building
            thoughtful software.
          </p>
        </Reveal>

        <Reveal delay={0.05} amount={0.3}>
          <motion.form
            onSubmit={handleSubmit}
            noValidate
            className="card p-8 text-left space-y-4 max-w-xl mx-auto"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-xs mono text-[var(--muted)] mb-2">Name</label>
                <input id="name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required className="field" />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs mono text-[var(--muted)] mb-2">Email</label>
                <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required className="field" />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-xs mono text-[var(--muted)] mb-2">Message</label>
              <textarea id="message" name="message" value={form.message} onChange={handleChange} rows={4} placeholder="What's on your mind?" required className="field resize-none" />
            </div>
            <button
              type="submit"
              disabled={!isValid}
              className={`w-full py-3.5 text-sm rounded-[12px] font-semibold flex items-center justify-center gap-2 transition-all duration-150 ${
                isValid
                  ? 'btn-primary'
                  : 'bg-[var(--bg-elevated-2)] text-[var(--muted)] cursor-not-allowed'
              }`}
            >
              {sent ? (<><Check className="w-4 h-4" /> Opening your email client…</>) : ('Send message')}
              {!sent && <ArrowUpRight className="w-4 h-4" />}
            </button>
            <p className="text-xs text-[var(--muted)] text-center">
              Opens your email client with this pre-filled — nothing is stored here.
            </p>
          </motion.form>
        </Reveal>

        <Reveal delay={0.1} amount={0.3} className="flex flex-wrap justify-center gap-3 mt-10">
          {socials.map(({ icon: Icon, short, href }) => (
            <a
              key={short}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2 px-6 py-3 text-sm"
            >
              <Icon className="w-4 h-4" />
              {short}
              {href.startsWith('http') && <ArrowUpRight className="w-3.5 h-3.5" />}
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
