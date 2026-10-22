import CTA from "@/components/CTA";
import { services } from "@/data/services";
import GalleryContent from "./GalleryContent";
import styles from "./gallery.module.css";

export const metadata = {
  title: "Gallery | JP Glass Balustrades",
  description:
    "Browse glass balustrade, pool fence, shower box, stair, and handrail examples from JP Glass.",
};

export default function GalleryPage() {
  const servicesWithExamples = services
    .map((service) => ({
      slug: service.slug,
      title: service.title,
      description: service.description,
      items: service.examples
        .filter((example) => !example.isIllustrative)
        .map((example) => ({
          title: example.title,
          image: example.image,
          alt: example.alt,
          category: example.category ?? service.cardTitle,
        })),
    }))
    .filter((service) => service.items.length > 0);

  const totalExamples = servicesWithExamples.reduce(
    (total, service) => total + service.items.length,
    0,
  );

  return (
    <main id="main-content">
      <section className={`page-hero wrap ${styles.hero}`}>
        <p className="eyebrow">Project gallery</p>
        <h1>
          Glass in
          <br />
          <span>good company.</span>
        </h1>
        <p>
          Browse {totalExamples} examples across our glass services, from pool
          fencing and balustrades to shower boxes and stair glass.
        </p>
      </section>

      <GalleryContent sections={servicesWithExamples} />
      <CTA />
    </main>
  );
}
