import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { businessContact } from "@/data/business";

export default function Footer() {
  return <footer className="site-footer"><div className="footer-main wrap">
    <div className="footer-brand"><Link href="/" className="brand brand-light" aria-label="JP Glass Balustrades home"><Image className="brand-logo" src="/images/jp-glass-logo.png" alt="JP Glass Balustrades" width={2172} height={724}/></Link><p>Thoughtful glass solutions for considered spaces.</p></div>
    <div><p className="footer-label">Explore</p><div className="footer-links"><Link href="/services">Services</Link><Link href="/gallery">Gallery</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></div></div>
    <div className="footer-contact"><p className="footer-label">Start a conversation</p><a className="footer-detail" href={businessContact.phoneHref}><Phone size={14}/>{businessContact.phoneDisplay}</a><a className="footer-detail" href={`mailto:${businessContact.email}`}><Mail size={14}/>{businessContact.email}</a><Link className="footer-quote" href="/contact">Request a quote <ArrowUpRight size={16}/></Link></div>
  </div><div className="footer-bottom wrap"><span>© 2026 JP Glass Balustrades</span><span>New Zealand</span></div></footer>;
}
