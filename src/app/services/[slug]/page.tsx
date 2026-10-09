import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import CTA from "@/components/CTA";
import { getService, services } from "@/data/services";
import styles from "./service-detail.module.css";

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service not found | JP Glass Balustrades" };
  return {
    title: `${service.title} | JP Glass Balustrades`,
    description: service.intro,
  };
}

export default async function ServiceDetailPage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <main id="main-content">
      <section className={`${styles.hero} wrap`}>
        <div className={styles.copy}>
          <Link href="/services" className={styles.back}><ArrowLeft size={15} /> All services</Link>
          <p className="eyebrow">Service {service.number}</p>
          <h1>{service.title}</h1>
          <p className={styles.intro}>{service.intro}</p>
          <Link href="/contact" className="button button-primary">Discuss your project <ArrowUpRight size={17} /></Link>
        </div>
        <figure className={styles.heroImage}>
          <Image src={service.image} alt={service.alt} fill priority sizes="(max-width: 760px) 100vw, 58vw" />
          <figcaption>Illustrative concept · Not a JP Glass project photograph</figcaption>
        </figure>
      </section>

      <section className={styles.examples}>
        <div className="wrap">
          <div className={styles.sectionHeading}>
            <div><p className="eyebrow">Style references</p><h2>Example looks</h2></div>
            <p>Project photos and illustrations to help start a conversation about your space and preferred style.</p>
          </div>
          <div className={styles.exampleGrid}>
            {service.examples.map((example, index) => (
              <figure className={styles.example} key={example.title}>
                <div className={styles.exampleImage}>
                  <Image src={example.image} alt={example.alt} fill sizes="(max-width: 700px) 100vw, 50vw" />
                  <span>{example.isIllustrative === false ? "Project photo" : "Illustrative concept"}</span>
                </div>
                <figcaption><span>0{index + 1}</span>{example.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.finishes} wrap`}>
        <div className={styles.sectionHeading}>
          <div><p className="eyebrow">Colour & finish ideas</p><h2>Explore the tones</h2></div>
          <p>These swatches are visual references only. Please ask JP Glass to confirm available glass, hardware and finish options for your project.</p>
        </div>
        <div className={styles.finishGrid}>
          {service.finishes.map((finish) => (
            <div className={styles.finish} key={finish.name}>
              <span className={styles.swatch} style={{ backgroundColor: finish.tone }} aria-hidden="true" />
              <span className={styles.finishName}>{finish.name}</span>
              <span className={styles.finishNote}>{finish.note}</span>
            </div>
          ))}
        </div>
        <p className={styles.note}>Illustrative colour references only · Confirm suitability and availability with JP Glass.</p>
        <Link href="/contact" className={styles.contactLink}>Ask about colours and finishes <ArrowUpRight size={16} /></Link>
      </section>

      <CTA />
    </main>
  );
}
