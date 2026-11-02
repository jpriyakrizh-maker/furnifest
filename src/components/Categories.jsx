import { ArrowUpRight } from 'lucide-react'

const categories = [
  { name: 'Sofas & Loungers', count: '12 designs', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=85', filter: 'Sofas' },
  { name: 'Bedroom', count: '08 designs', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=85', filter: 'Beds' },
  { name: 'Dining', count: '10 designs', image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=900&q=85', filter: 'Dining' },
  { name: 'Chairs & accents', count: '15 designs', image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=900&q=85', filter: 'Chairs' }
]

export default function Categories({ onSelect }) {
  return (
    <section className="section container" id="categories">
      <div className="section-heading">
        <div><div className="eyebrow">FIND YOUR FAVOURITE</div><h2>Spaces that feel <em>like you.</em></h2></div>
        <p>From slow mornings to festive evenings, find pieces that make every moment at home feel special.</p>
      </div>
      <div className="category-grid">
        {categories.map((item, i) => (
          <button className={`category-card category-${i + 1}`} key={item.name} onClick={() => onSelect(item.filter)}>
            <img src={item.image} alt={item.name} loading="lazy" />
            <span className="category-overlay" />
            <span className="category-info"><small>{item.count}</small><strong>{item.name}</strong></span>
            <span className="round-arrow"><ArrowUpRight size={19} /></span>
          </button>
        ))}
      </div>
    </section>
  )
}