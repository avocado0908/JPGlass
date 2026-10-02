import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return <footer className="site-footer"><div className="footer-main wrap">
    <div className="footer-brand"><Link href="/" className="brand brand-light"><span className="brand-mark">JP<span>.</span></span><span className="brand-name">GLASS<br/>BALUSTRADES</span></Link><p>Thoughtful glass solutions for considered spaces.</p></div>
    <div><p className="footer-label">Explore</p><div className="footer-links"><Link href="/services">Services</Link><Link href="/gallery">Gallery</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></div></div>
    <div className="footer-contact"><p className="footer-label">Start a conversation</p><p>Tell us a little about your project and we’ll be in touch.</p><Link className="footer-quote" href="/contact">Request a quote <ArrowUpRight size={16}/></Link></div>
  </div><div className="footer-bottom wrap"><span>© 2026 JP Glass Balustrades</span><span>New Zealand</span></div></footer>;
}
