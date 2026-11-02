import { BadgeCheck, Truck, RefreshCw, ShieldCheck } from 'lucide-react'

const benefits = [
  { icon: BadgeCheck, title: 'Made to last', text: 'Quality materials and careful finishing in every detail.' },
  { icon: Truck, title: 'Easy delivery', text: 'Convenient doorstep delivery for your new favourites.' },
  { icon: RefreshCw, title: 'Simple returns', text: 'A straightforward return experience for peace of mind.' },
  { icon: ShieldCheck, title: 'Secure checkout', text: 'Your details stay protected at every step.' }
]

export default function WhyChooseUs() {
  return (
    <section className="benefits-section" id="about">
      <div className="container">
        <div className="section-heading">
          <div><div className="eyebrow">THE FURNIFEST PROMISE</div><h2>Thoughtful in every <em>way.</em></h2></div>
          <p>We believe the best furniture is more than something you see. It is something you live with.</p>
        </div>
        <div className="benefit-grid">
          {benefits.map(({ icon: Icon, title, text }) => (
            <div className="benefit" key={title}>
              <Icon aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}