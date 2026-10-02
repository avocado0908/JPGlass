import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";
import SectionHeading from "@/components/SectionHeading";

export default function Services() {
  return <section className="section services-section" id="services"><div className="wrap"><div className="section-top"><SectionHeading eyebrow="What we do" title="Glass, made personal." description="A considered approach to glass, with each solution tailored to its setting."/><Link href="/services" className="text-link desktop-more">All services <ArrowRight size={16}/></Link></div><div className="services-grid">{services.map(service => <ServiceCard key={service.title} service={service}/>)}</div><Link href="/services" className="button button-outline mobile-more">Explore services <ArrowRight size={16}/></Link></div></section>;
}
