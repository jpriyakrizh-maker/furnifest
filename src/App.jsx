import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import SaleBanner from './components/SaleBanner'
import Products from './components/Products'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  const [cart, setCart] = useState([])
  const addToCart = product => setCart(current => [...current, product])
  const selectCategory = category => {
    document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })
    window.setTimeout(() => window.dispatchEvent(new CustomEvent('furnifest-filter', { detail: category })), 350)
  }

  return (
    <>
      <Navbar cartCount={cart.length} />
      <main>
        <Hero />
        <Categories onSelect={selectCategory} />
        <SaleBanner />
        <Products onAdd={addToCart} />
        <WhyChooseUs />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}