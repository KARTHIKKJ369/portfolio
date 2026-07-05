import { forwardRef } from 'react'

const Skills = forwardRef<HTMLElement>((_props, ref) => {
  return <section id="skills" ref={ref} className="min-h-screen py-20"></section>
})

export default Skills
