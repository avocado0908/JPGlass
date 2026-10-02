import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function About() {
  return <section className="section about-section"><div className="wrap about-layout"><div className="about-image"><Image src="/images/custom-placeholder.svg" alt="Illustrative placeholder for a glass installation detail" fill sizes="(max-width: 800px) 100vw, 46vw"/><span className="image-tag">Project imagery placeholder</span><span className="about-image-index">JP / GLASS</span></div><div className="about-copy"><p className="eyebrow">A little about us</p><h2>Glass that belongs in your home.</h2><p>JP Glass Balustrades creates custom glass solutions for residential spaces. We bring together thoughtful design, careful workmanship and professional installation to help make your project feel complete.</p><p>Based in New Zealand. Add the confirmed service area and business story here when provided.</p><Link className="text-link" href="/about">More about JP Glass <ArrowRight size={16}/></Link></div></div></section>;
}
