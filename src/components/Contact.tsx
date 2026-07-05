import { forwardRef } from 'react'

const Contact = forwardRef<HTMLElement>((_props, ref) => {
  return <section id="contact" ref={ref} className="min-h-screen py-20"></section>
})

export default Contact
