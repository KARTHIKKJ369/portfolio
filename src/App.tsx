import { useEffect, useRef, useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import GitHub from './components/GitHub'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const sectionsRef = useRef<Record<string, HTMLElement | null>>({})

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar scrolled={scrolled} sections={sectionsRef.current} />

      <main>
        <Hero ref={el => { sectionsRef.current.hero = el; }} />
        <About ref={el => { sectionsRef.current.about = el; }} />
        <Skills ref={el => { sectionsRef.current.skills = el; }} />
        <Projects ref={el => { sectionsRef.current.projects = el; }} />
        <Experience ref={el => { sectionsRef.current.experience = el; }} />
        <GitHub ref={el => { sectionsRef.current.github = el; }} />
        <Contact ref={el => { sectionsRef.current.contact = el; }} />
      </main>

      <Footer />
    </div>
  )
}

export default App
