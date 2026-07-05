import { forwardRef } from 'react'

const Projects = forwardRef<HTMLElement>((_props, ref) => {
  return <section id="projects" ref={ref} className="min-h-screen py-20"></section>
})

export default Projects
