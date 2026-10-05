import Services from "@/components/Services";
import CTA from "@/components/CTA";

export const metadata = {
  title: "Services | JP Glass Balustrades",
  description: "Explore glass balustrades, frameless shower screens, custom-made glass, pool fencing and handrail solutions.",
};

export default function ServicesPage() {
  return (
    <main id="main-content">
      <section className="page-hero wrap">
        <p className="eyebrow">What we do</p>
        <h1>Glass solutions<br /><span>for your space.</span></h1>
        <p>Explore our glass services, browse illustrative styles and discuss a solution for your project.</p>
      </section>
      <Services />
      <CTA />
    </main>
  );
}
