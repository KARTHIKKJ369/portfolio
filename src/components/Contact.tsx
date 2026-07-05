import { forwardRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react'

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
    <section id="contact" ref={ref} className="py-24 md:py-28">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="mono text-xs text-[var(--muted)] tracking-widest uppercase">06 · Contact</span>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3">Let's build something.</h2>
          <p className="text-[var(--muted)] mt-3 max-w-lg">
            Open to internships, collaborations, or just talking shop about IoT and RAG systems.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="card p-6 space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-xs mono text-[var(--muted)] mb-2">Name</label>
              <input
                id="name" name="name" value={form.name} onChange={handleChange}
                placeholder="Your name"
                className="w-full px-3.5 py-2.5 rounded-lg bg-transparent border border-[var(--border)] focus:border-[var(--accent)] outline-none transition-colors text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs mono text-[var(--muted)] mb-2">Email</label>
              <input
                id="email" name="email" type="email" value={form.email} onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-3.5 py-2.5 rounded-lg bg-transparent border border-[var(--border)] focus:border-[var(--accent)] outline-none transition-colors text-sm"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs mono text-[var(--muted)] mb-2">Message</label>
              <textarea
                id="message" name="message" value={form.message} onChange={handleChange}
                rows={4} placeholder="What's on your mind?"
                className="w-full px-3.5 py-2.5 rounded-lg bg-transparent border border-[var(--border)] focus:border-[var(--accent)] outline-none transition-colors resize-none text-sm"
              />
            </div>
            <button onClick={handleSubmit} className="btn-primary w-full py-3 text-sm">
              Send message
            </button>
            <p className="text-xs text-[var(--muted)] text-center">
              Opens your email client with this pre-filled — nothing is stored here.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-3 py-4 border-t border-[var(--border)] last:border-b"
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-4 h-4 text-[var(--muted)]" />
                  <span className="font-mono text-sm group-hover:text-[var(--accent)] transition-colors">{label}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[var(--muted)] group-hover:text-[var(--fg)] transition-colors" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
})

export default Contact
