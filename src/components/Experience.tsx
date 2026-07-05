import { forwardRef } from 'react'

const Experience = forwardRef<HTMLElement>((_props, ref) => {
  return <section id="experience" ref={ref} className="min-h-screen py-20"></section>
})

export default Experience
