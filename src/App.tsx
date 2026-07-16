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
      <Navbar scrolled={scrolled} />

      <main>
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
