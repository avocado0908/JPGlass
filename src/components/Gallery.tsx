import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import SectionHeading from "@/components/SectionHeading";

export default function Gallery() {
  return <section className="section gallery-section"><div className="wrap"><div className="section-top"><SectionHeading eyebrow="Selected examples" title="A clearer view." description="Explore glass balustrades, pool fencing and shower screens in a range of spaces."/><Link href="/gallery" className="text-link desktop-more">View full gallery <ArrowRight size={16}/></Link></div><div className="gallery-grid">{projects.map((project, index) => <Link className={`gallery-item gallery-item-${index + 1}`} href="/gallery" key={project.title}><div className="gallery-image"><Image src={project.image} alt={project.alt} fill sizes="(max-width: 700px) 100vw, 50vw"/></div><div className="gallery-caption"><span>{project.title}</span><span>{project.category}</span></div></Link>)}</div><Link href="/gallery" className="button button-outline mobile-more">View gallery <ArrowRight size={16}/></Link></div></section>;
}
