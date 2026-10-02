import { services } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";
import CTA from "@/components/CTA";

export const metadata = { title: "Services | JP Glass Balustrades", description: "Explore glass balustrade, shower screen and custom glass solutions." };
export default function ServicesPage() {
  return <main id="main-content"><section className="page-hero wrap"><p className="eyebrow">What we do</p><h1>Glass solutions<br/><span>for your space.</span></h1><p>Explore our current service offering. Get in touch to discuss the right approach for your project.</p></section><section className="section services-section"><div className="wrap"><div className="services-grid">{services.map(service => <ServiceCard key={service.title} service={service}/>)}</div><p className="placeholder-note">Service offering shown here is a draft. Please confirm services with JP Glass before publishing.</p></div></section><CTA/></main>;
}
