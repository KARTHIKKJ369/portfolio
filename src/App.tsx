import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import GitHub from './components/GitHub'
import Education from './components/Education'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen">
      <a
        href="#main-content"
        className="fixed top-0 left-0 z-[100] -translate-y-full focus:translate-y-0 bg-[var(--fg)] text-[var(--bg)] px-4 py-2 font-medium transition-transform duration-200"
      >
        Skip to main content
      </a>
      <Navbar scrolled={scrolled} />

      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <GitHub />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
