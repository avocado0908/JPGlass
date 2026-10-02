import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { services } from "@/data/services";

export default function ServiceCard({ service }: { service: (typeof services)[number] }) {
  return <article className="service-card"><Link href="/services" className="service-image"><Image src={service.image} alt={service.alt} fill sizes="(max-width: 700px) 100vw, 33vw"/><span className="image-tag">Project imagery placeholder</span></Link><div className="service-copy"><span className="service-number">{service.number}</span><div><h3>{service.title}</h3><p>{service.description}</p></div><Link className="icon-link" href="/services" aria-label={`Learn more about ${service.title}`}><ArrowUpRight size={19}/></Link></div></article>;
}
