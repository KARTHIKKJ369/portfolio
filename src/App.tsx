import { useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Stars, Html, Float } from '@react-three/drei'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import GitHub from './components/GitHub'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Scene from './components/Scene'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const sectionsRef = useRef<Record<string, HTMLDivElement | null>>({})

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar scrolled={scrolled} sections={sectionsRef.current} />
      
      <Canvas
        className="fixed inset-0 -z-10 pointer-events-none"
        camera={{ position: [0, 0, 50], fov: 50 }}
        style={{ touchAction: 'none' }}
      >
        <Scene />
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} color="#00d4aa" opacity={0.15} />
      </Canvas>

      <main>
        <Hero ref={el => sectionsRef.current.hero = el} />
        <About ref={el => sectionsRef.current.about = el} />
        <Skills ref={el => sectionsRef.current.skills = el} />
        <Projects ref={el => sectionsRef.current.projects = el} />
        <Experience ref={el => sectionsRef.current.experience = el} />
        <GitHub ref={el => sectionsRef.current.github = el} />
        <Contact ref={el => sectionsRef.current.contact = el} />
      </main>

      <Footer />
    </div>
  )
}

export default App