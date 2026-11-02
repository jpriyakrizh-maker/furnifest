import { Armchair, ArrowUpRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-main">
        <div className="footer-brand">
          <a className="brand brand-footer" href="#home"><span className="brand-mark"><Armchair size={23} /></span><span>furni<span>fest.</span><small>YOUR CHOICE, YOUR COMFORT</small></span></a>
          <p>Furniture for the life you live, and the moments you make.</p>
        </div>
        <div className="footer-column"><h4>EXPLORE</h4><a href="#shop">Shop all</a><a href="#categories">Collections</a><a href="#offers">Diwali offers</a><a href="#about">Our story</a></div>
        <div className="footer-column"><h4>NEED HELP?</h4><a href="mailto:hello@furnifest.123">Email us</a><a href="#contact">Delivery & returns</a><a href="#contact">FAQs</a><a href="#contact">Contact</a></div>
        <div className="footer-contact"><span>LET’S MAKE YOUR SPACE</span><a href="mailto:hello@furnifest.123">A little more you. </a></div>
      </div>
    </footer>
  )
}