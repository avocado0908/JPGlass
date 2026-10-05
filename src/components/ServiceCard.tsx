import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/data/services";

export default function ServiceCard({ service }: { service: Service }) {
  const href = `/services/${service.slug}`;

  return (
    <article className="service-card">
      <Link href={href} className="service-image" aria-label={`Explore ${service.title}`}>
        <Image src={service.image} alt={service.alt} fill sizes="(max-width: 700px) 100vw, 33vw" />
        <span className="image-tag">Illustrative concept</span>
      </Link>
      <div className="service-copy">
        <span className="service-number">{service.number}</span>
        <div><h3><Link href={href}>{service.cardTitle}</Link></h3><p>{service.description}</p></div>
        <Link className="icon-link" href={href} aria-label={`View ${service.title} examples and colour options`}><ArrowUpRight size={19} /></Link>
      </div>
    </article>
  );
}
