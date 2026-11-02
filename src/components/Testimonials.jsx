import { Star } from 'lucide-react'

const reviews = [
  { quote: 'The sofa looks even better in person. The fabric, finish and comfort are exactly what we wanted for our living room.', name: 'Ananya R.', city: 'Chennai' },
  { quote: 'The dining set has become everyone’s favourite spot. Beautiful design and a smooth delivery experience.', name: 'Karthik M.', city: 'Bengaluru' },
  { quote: 'Loved how easy it was to find pieces that work together. Our home feels warmer and more personal now.', name: 'Meera S.', city: 'Coimbatore' }
]

export default function Testimonials() {
  return (
    <section className="section container reviews-section">
      <div className="section-heading">
        <div><div className="eyebrow">HAPPY HOMES, HAPPY HEARTS</div><h2>Notes from <em>home.</em></h2></div>
        <div className="review-rating"><strong>4.9</strong><span><span className="stars">★★★★★</span><small>LOVED BY OUR CUSTOMERS</small></span></div>
      </div>
      <div className="review-grid">
        {reviews.map(review => <article className="review-card" key={review.name}>
          <div className="stars"><Star /><Star /><Star /><Star /><Star /></div>
          <blockquote>“{review.quote}”</blockquote>
          <div className="review-person"><span className="avatar">{review.name[0]}</span><span><b>{review.name}</b><small>{review.city}</small></span></div>
        </article>)}
      </div>
    </section>
  )
}