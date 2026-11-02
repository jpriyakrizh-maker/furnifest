import { ArrowUpRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-image" />
      <div className="hero-shade" />
      <div className="container hero-content">
        <div className="eyebrow light"> THE DIWALI HOME EDIT · 2026</div>
        <h1>Make room for<br /><em>beautiful</em> moments.</h1>
        <p>Bring home warmth, thoughtful design and a little festive magic. Your next favourite corner starts here.</p>
        <div className="hero-actions">
          <a className="button button-gold" href="#shop">Shop the collection <ArrowUpRight size={17} /></a>
          <a className="text-link light-link" href="#categories">Explore categories <span>↗</span></a>
        </div>
        <div className="hero-note"> MADE FOR THE WAY YOU LIVE</div>
      </div>
      <div className="hero-stamp"><strong>UP TO</strong><b>50%</b><span>OFF</span><small>FESTIVE OFFER</small></div>
    </section>
  )
}