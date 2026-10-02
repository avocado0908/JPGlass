import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CTA from "@/components/CTA";

export const metadata = { title: "About | JP Glass Balustrades", description: "Learn about JP Glass Balustrades and our approach to custom glass solutions." };

export default function AboutPage() {
  return <main id="main-content"><section className="page-hero wrap"><p className="eyebrow">The people behind the glass</p><h1>Thoughtful work.<br/><span>Considered spaces.</span></h1><p>JP Glass Balustrades creates custom glass solutions for residential spaces, with a focus on quality workmanship and a smooth project experience.</p></section><section className="section about-detail"><div className="wrap about-layout"><div className="about-image"><Image src="/images/custom-placeholder.svg" alt="Illustrative placeholder for architectural glass" fill sizes="(max-width: 800px) 100vw, 46vw"/><span className="image-tag">Project imagery placeholder</span></div><div className="about-copy"><p className="eyebrow">Our approach</p><h2>Designed around the way you live.</h2><p>From the first conversation to installation, our aim is to understand what your space needs and create a glass solution that feels like it belongs.</p><p>We specialise in glass balustrades, shower screens and custom glass. Business history, confirmed service area and team details can be added here when supplied.</p><Link href="/contact" className="text-link">Start a conversation <ArrowRight size={16}/></Link></div></div></section><CTA/></main>;
}
