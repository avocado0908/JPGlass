"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [{ href: "/", label: "Home" }, { href: "/services", label: "Services" }, { href: "/gallery", label: "Gallery" }, { href: "/about", label: "About" }, { href: "/contact", label: "Contact" }];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><nav className="nav-shell" aria-label="Main navigation">
    <Link href="/" className="brand" aria-label="JP Glass Balustrades home"><Image className="brand-logo" src="/images/jp-glass-logo.png" alt="JP Glass Balustrades" width={2172} height={724} priority/></Link>
    <div className="desktop-nav">{links.map(link => <Link key={link.href} href={link.href}>{link.label}</Link>)}</div>
    <Link href="/contact" className="button button-primary nav-cta">Get a quote <ArrowUpRight size={16}/></Link>
    <button className="menu-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
  </nav>{open && <div className="mobile-nav">{links.map(link => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}<Link href="/contact" className="button button-primary" onClick={() => setOpen(false)}>Get a quote <ArrowUpRight size={16}/></Link></div>}</header>;
}
