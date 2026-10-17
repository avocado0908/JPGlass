import Services from "@/components/Services";
import CTA from "@/components/CTA";

export const metadata = {
  title: "Services | JP Glass Balustrades",
  description: "Explore frameless and sliding shower boxes, fence glass, pool fence glass, handrails, custom stairs glass, and outside base and glass from JP Glass.",
};

export default function ServicesPage() {
  return (
    <main id="main-content">
      <section className="page-hero wrap">
        <p className="eyebrow">What we do</p>
        <h1>Glass solutions<br /><span>for your space.</span></h1>
        <p>Explore frameless and sliding shower boxes, fence glass, pool fence glass, handrails, custom stairs glass, and outside base and glass options.</p>
      </section>
      <Services order={["outside-base-glass", "fence-glass", "pool-fencing", "shower-boxes", "custom-stairs-glass", "handrails"]} />
      <CTA />
    </main>
  );
}
