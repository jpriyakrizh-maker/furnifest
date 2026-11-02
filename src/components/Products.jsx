import { useEffect, useMemo, useState } from 'react'
import { ShoppingBag, ArrowUpRight, Check } from 'lucide-react'
import { products } from '../data/products'

const categories = ['All', 'Sofas', 'Beds', 'Dining', 'Chairs', 'Tables', 'Storage']
const money = value => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value)

export default function Products({ onAdd }) {
  const [active, setActive] = useState('All')
  const [added, setAdded] = useState(null)
  useEffect(() => {
    const handler = event => setActive(event.detail)
    window.addEventListener('furnifest-filter', handler)
    return () => window.removeEventListener('furnifest-filter', handler)
  }, [])
  const filtered = useMemo(() => active === 'All' ? products : products.filter(p => p.category === active), [active])

  const add = product => {
    onAdd(product)
    setAdded(product.id)
    setTimeout(() => setAdded(null), 1200)
  }

  return (
    <section className="section products-section container" id="shop">
      <div className="section-heading">
        <div><div className="eyebrow">CURATED FOR YOUR HOME</div><h2>Good design. <em>Good living.</em></h2></div>
      </div>
      <div className="product-toolbar">
        <div className="filter-list">
          {categories.map(category => <button key={category} className={active === category ? 'filter active' : 'filter'} onClick={() => setActive(category)}>{category}</button>)}
        </div>
      </div>
      <div className="product-grid">
        {filtered.map((product, index) => (
          <article className="product-card" key={product.id}>
            <div className="product-image-wrap">
              <img src={product.image} alt={product.name} loading="lazy" />
              <span className="product-tag">{product.tag}</span>
              <button className="quick-add" onClick={() => add(product)} aria-label={`Add ${product.name} to cart`}>
                {added === product.id ? <Check size={17} /> : <ShoppingBag size={17} />}
                <span>{added === product.id ? 'Added' : 'Add to bag'}</span>
              </button>
            </div>
            <div className="product-meta"><span>{product.category}</span></div>
            <h3>{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <div className="price-row"><strong>{money(product.price)}</strong><del>{money(product.oldPrice)}</del><span>{Math.round((1 - product.price / product.oldPrice) * 100)}% off</span></div>
          </article>
        ))}
      </div>
      <div className="center-action"><a href="#contact" className="text-link">Need help choosing? Talk to our team </a></div>
    </section>
  )
}