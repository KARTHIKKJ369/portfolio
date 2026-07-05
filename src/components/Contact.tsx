import { forwardRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Send } from 'lucide-react'

const socials = [
  { icon: Mail, label: 'karthikjayan369@gmail.com', href: 'mailto:karthikjayan369@gmail.com' },
  { icon: Github, label: 'github.com/KARTHIKKJ369', href: 'https://github.com/KARTHIKKJ369' },
  { icon: Linkedin, label: 'linkedin.com/in/karthik-jayan', href: 'https://www.linkedin.com/in/karthik-jayan-8544ba267/' },
]

const Contact = forwardRef<HTMLElement>((_props, ref) => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = () => {
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || 'a visitor'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:karthikjayan369@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" ref={ref} className="relative py-24 md:py-32">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <span className="mono text-sm text-[var(--accent)] tracking-widest uppercase">Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Let's <span className="gradient-text">build</span> something.
          </h2>
          <p className="text-[var(--muted)] mt-4">
            Open to internships, collaborations, or just talking shop about IoT and RAG systems.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass rounded-2xl p-7 space-y-5"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-[var(--muted)]">Name</label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl bg-transparent border border-[var(--glass-border)] focus:border-[var(--accent)] outline-none transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-[var(--muted)]">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl bg-transparent border border-[var(--glass-border)] focus:border-[var(--accent)] outline-none transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-[var(--muted)]">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="What's on your mind?"
                className="w-full px-4 py-3 rounded-xl bg-transparent border border-[var(--glass-border)] focus:border-[var(--accent)] outline-none transition-colors resize-none"
              />
            </div>
            <button
              onClick={handleSubmit}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 glass gradient-border rounded-xl font-semibold hover:bg-[var(--accent-dim)] transition-all"
            >
              Send message
              <Send className="w-4 h-4" />
            </button>
            <p className="text-xs text-[var(--muted)] text-center">
              Opens your email client with this pre-filled — nothing is stored here.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 glass rounded-2xl p-5 hover:bg-[var(--glass-strong)] transition-all group"
              >
                <div className="w-11 h-11 rounded-xl glass-strong flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-[var(--accent)]" />
                </div>
                <span className="font-medium mono text-sm group-hover:text-[var(--accent)] transition-colors truncate">
                  {label}
                </span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
})

export default Contact
