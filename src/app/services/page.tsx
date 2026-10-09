import Services from "@/components/Services";
import CTA from "@/components/CTA";

export const metadata = {
  title: "Services | JP Glass Balustrades",
  description: "Explore shower boxes, fence glass, handrails, pool fence glass, and outside base and glass options from JP Glass.",
};

export default function ServicesPage() {
  return (
    <main id="main-content">
      <section className="page-hero wrap">
        <p className="eyebrow">What we do</p>
        <h1>Glass solutions<br /><span>for your space.</span></h1>
        <p>Explore shower boxes, fence glass, handrails, pool fence glass, and outside base and glass options.</p>
      </section>
      <Services />
      <CTA />
    </main>
  );
}
