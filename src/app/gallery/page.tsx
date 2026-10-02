import Image from "next/image";
import { projects } from "@/data/projects";
import CTA from "@/components/CTA";

export const metadata = { title: "Gallery | JP Glass Balustrades", description: "View glass project concepts and installations by JP Glass Balustrades." };
export default function GalleryPage() {
  return <main id="main-content"><section className="page-hero wrap"><p className="eyebrow">Selected work</p><h1>Glass in<br/><span>good company.</span></h1><p>Explore project concepts and return soon for approved JP Glass project photography.</p></section><section className="section gallery-section"><div className="wrap gallery-grid gallery-page-grid">{projects.map((project, index) => <article className={`gallery-item gallery-item-${index + 1}`} key={project.title}><div className="gallery-image"><Image src={project.image} alt={project.alt} fill sizes="(max-width: 700px) 100vw, 50vw"/><span className="image-tag">Illustrative placeholder</span></div><div className="gallery-caption"><span>{project.title}</span><span>{project.category}</span></div></article>)}</div><p className="wrap placeholder-note">These illustrations are placeholders, not photographs of JP Glass projects.</p></section><CTA/></main>;
}
