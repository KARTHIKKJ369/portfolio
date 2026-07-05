import { forwardRef } from 'react'

const GitHub = forwardRef<HTMLElement>((_props, ref) => {
  return <section id="github" ref={ref} className="min-h-screen py-20"></section>
})

export default GitHub
