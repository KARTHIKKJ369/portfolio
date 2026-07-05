import { forwardRef } from 'react'

const About = forwardRef<HTMLElement>((_props, ref) => {
  return <section id="about" ref={ref} className="min-h-screen py-20"></section>
})

export default About
