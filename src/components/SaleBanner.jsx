import { useEffect, useState } from 'react'
import { Flame, ArrowUpRight } from 'lucide-react'

export default function SaleBanner() {
  const [time, setTime] = useState({ days: 5, hours: 12, minutes: 0, seconds: 0 })
  useEffect(() => {
    const end = Date.now() + (((5 * 24 + 12) * 60) * 60 * 1000)
    const timer = setInterval(() => {
      const left = Math.max(0, end - Date.now())
      setTime({
        days: Math.floor(left / 86400000),
        hours: Math.floor((left % 86400000) / 3600000),
        minutes: Math.floor((left % 3600000) / 60000),
        seconds: Math.floor((left % 60000) / 1000)
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])
  return (
    <section className="sale-section" id="offers">
      <div className="sale-image" />
      <div className="sale-content container">
        <div className="eyebrow light"> THE BIG FESTIVE CELEBRATION</div>
        <h2>A brighter home.<br /><em>A better price.</em></h2>
        <p>Celebrate the season of new beginnings with special prices on pieces made to stay.</p>
        <div className="sale-timer" aria-label="Offer countdown">
          {Object.entries(time).map(([unit, value]) => <div key={unit}><b>{String(value).padStart(2, '0')}</b><small>{unit}</small></div>)}
        </div>
        <a className="button button-light" href="#shop">Explore festive offers <ArrowUpRight size={17} /></a>
      </div>
    </section>
  )
}