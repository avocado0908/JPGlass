import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function About() {
  return <section className="section about-section"><div className="wrap about-layout"><div className="about-image"><Image src="/images/hero-balcony-sunset.jpg" alt="Glass balustrade along a residential balcony" fill sizes="(max-width: 800px) 100vw, 46vw"/><span className="image-tag">Residential glass solutions</span><span className="about-image-index">JP / GLASS</span></div><div className="about-copy"><p className="eyebrow">A little about us</p><h2>Glass that belongs in your home.</h2><p>JP Glass Balustrades provides custom glass solutions for homes throughout Auckland, including balustrades, pool fencing, shower boxes, stair glass, and handrails.</p><p>From your first enquiry through installation, we help you understand the available options and plan the next steps for your project.</p><Link className="text-link" href="/about">More about JP Glass <ArrowRight size={16}/></Link></div></div></section>;
}
