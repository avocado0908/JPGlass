import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CTA() {
  return <section className="cta-section"><div className="wrap cta-inner"><div><p className="eyebrow eyebrow-light">Have a project in mind?</p><h2>Let’s make space<br/>for something clear.</h2></div><div className="cta-action"><p>Tell us what you’re planning. We’ll help you explore the right glass solution for your space.</p><Link href="/contact" className="button button-white">Request a quote <ArrowUpRight size={17}/></Link></div><span className="cta-orbit" aria-hidden="true"/></div></section>;
}
