import Services from "@/components/Services";
import CTA from "@/components/CTA";

export const metadata = {
  title: "Services | JP Glass Balustrades",
  description: "Explore glass balustrades, frameless and sliding shower boxes, pool fence glass, handrails, and custom stairs glass from JP Glass.",
};

export default function ServicesPage() {
  return (
    <main id="main-content">
      <section className="page-hero wrap">
        <p className="eyebrow">What we do</p>
        <h1>Glass solutions<br /><span>for your space.</span></h1>
        <p>Explore glass balustrades, frameless and sliding shower boxes, pool fence glass, handrails, and custom stairs glass options.</p>
      </section>
      <Services order={["glass-balustrades", "pool-fencing", "shower-boxes", "custom-stairs-glass", "handrails"]} />
      <CTA />
    </main>
  );
}
