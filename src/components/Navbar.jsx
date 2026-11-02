import { useState } from 'react'
import { Menu, X, ShoppingBag, Armchair } from 'lucide-react'

export default function Navbar({ cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const links = [['Home', '#home'], ['Shop', '#shop'], ['Collections', '#categories'], ['Our story', '#about'], ['Contact', '#contact']]

  return (
    <header className="site-header">
      <div className="announcement-bar"  style={{
    backgroundColor: '#3b2118',
    color: '#f7dfb6',
    width: '100%',
    minHeight: '36px'
  }}
>
  <marquee behavior="scroll" direction="left" scrollamount="5">
    ✦ THE FESTIVE EDIT IS HERE ✦
    DIWALI MEGA SALE – UP TO 50% OFF ✦
    EXTRA 10% OFF ON YOUR FIRST ORDER ✦
    FREE DELIVERY ON ALL ORDERS ✦
    LIMITED PERIOD OFFER ✦ SHOP NOW ✦
  </marquee>
</div>
      <nav className="navbar container">
        <a className="brand" href="#home" aria-label="FurniFest home">
          <span className="brand-mark"><Armchair size={23} strokeWidth={1.7} /></span>
          <span>furni<span>fest.</span><small>YOUR CHOICE, YOUR COMFORT</small></span>
        </a>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {links.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
        </div>
        <div className="nav-actions">
          <a className="cart-button" href="#shop" aria-label={`Shopping cart with ${cartCount} items`}>
            <ShoppingBag size={19} /><span>Bag</span><b>{cartCount}</b>
          </a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
    </header>
  )
}