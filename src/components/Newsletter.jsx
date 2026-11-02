import { useState } from 'react'
import { ArrowUpRight, Mail } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const submit = e => {
    e.preventDefault()
    if (email.trim()) setSubmitted(true)
  }
  return (
    <section className="newsletter-section">
      <div className="container newsletter-inner">
        <div><div className="eyebrow light">A LITTLE SOMETHING FOR YOUR INBOX</div><h2>Make yourself<br /><em>at home.</em></h2><p>Get first looks, styling notes and a little festive surprise.</p></div>
        <form className="newsletter-form" onSubmit={submit}>
          <label htmlFor="newsletter-email">YOUR EMAIL ADDRESS</label>
          <div className="email-field"><Mail size={18} /><input id="newsletter-email" type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} required /><button aria-label="Subscribe"><ArrowUpRight size={20} /></button></div>
          <small>{submitted ? 'Thank you! You are on the FurniFest list.' : 'By subscribing, you agree to receive updates from FurniFest.'}</small>
        </form>
      </div>
    </section>
  )
}