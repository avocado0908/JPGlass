import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import CTA from "@/components/CTA";
import OptionImage from "@/components/OptionImage";
import ServiceExampleGallery from "@/components/ServiceExampleGallery";
import { getService, services, type ServiceOption } from "@/data/services";
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

  const renderOptionCards = (options: ServiceOption[]) => options.map((option) => (
    <div className={styles.finish} key={option.name}>
      {option.image ? (
        <OptionImage src={option.image} alt={option.imageAlt ?? option.name} className={styles.optionImage} />
      ) : (
        <div className={styles.optionImagePlaceholder} aria-label={`Example photo needed for ${option.name}`}>
          <span>Photo coming soon</span>
        </div>
      )}
      <span className={styles.swatch} style={{ backgroundColor: option.tone }} aria-hidden="true" />
      <span className={styles.finishName}>{option.name}</span>
      <span className={styles.finishNote}>{option.note}</span>
    </div>
  ));

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
        <div className={styles.heroVisual}>
          <figure className={styles.heroImage}>
            <Image src={service.image} alt={service.alt} fill priority sizes="(max-width: 760px) 100vw, 58vw" />
          </figure>
          <Link href="#example-looks" className={`text-link ${styles.viewExamples}`}>
            View example looks <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      <section className={`${styles.finishes} wrap`}>
        <div className={styles.sectionHeading}>
          <div><p className="eyebrow">Product options</p><h2>Available options</h2></div>
          <p>The options listed here are supplied by JP Glass. Contact the team to discuss the right configuration for your project.</p>
        </div>
        {service.optionGroups ? service.optionGroups.map((group) => (
          <div className={styles.subOptionGroup} key={group.title}>
            <h3 className={styles.subOptionHeading}>{group.title}</h3>
            <div className={styles.finishGrid}>{renderOptionCards(group.options)}</div>
          </div>
        )) : <div className={styles.finishGrid}>{renderOptionCards(service.options)}</div>}
        {service.showerSets && (
          <div className={styles.subOptionGroup}>
            <h3 className={styles.subOptionHeading}>Shower set options</h3>
            <div className={styles.finishGrid}>
              {service.showerSets.map((option) => (
                <div className={styles.finish} key={option.name}>
                  <span className={styles.swatch} style={{ backgroundColor: option.tone }} aria-hidden="true" />
                  <span className={styles.finishName}>{option.name}</span>
                  <span className={styles.finishNote}>{option.note}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        {service.glassSupports && (
          <div className={styles.subOptionGroup}>
            <h3 className={styles.subOptionHeading}>Glass support options</h3>
            <div className={styles.finishGrid}>
              {service.glassSupports.map((option) => (
                <div className={styles.finish} key={option.name}>
                  {option.image ? (
                    <OptionImage
                      src={option.image}
                      alt={option.imageAlt ?? option.name}
                      className={styles.optionImage}
                    />
                  ) : null}
                  <span className={styles.swatch} style={{ backgroundColor: option.tone }} aria-hidden="true" />
                  <span className={styles.finishName}>{option.name}</span>
                  <span className={styles.finishNote}>{option.note}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        {service.handrails && (
          <div className={styles.subOptionGroup}>
            <h3 className={styles.subOptionHeading}>Handrail options</h3>
            <div className={styles.finishGrid}>{renderOptionCards(service.handrails)}</div>
          </div>
        )}
        <p className={styles.note}>Colour swatches are visual guides. Contact JP Glass to discuss your project requirements.</p>
        <Link href="/contact" className={styles.contactLink}>Ask about these options <ArrowUpRight size={16} /></Link>
      </section>


      <section id="example-looks" className={styles.examples}>
        <div className="wrap">
          <div className={styles.sectionHeading}>
            <div><p className="eyebrow">Style references</p><h2>Example looks</h2></div>
            <p>Project photos and illustrations to help start a conversation about your space and preferred style.</p>
          </div>
          <ServiceExampleGallery examples={service.examples} />
        </div>
      </section>

      <CTA />
    </main>
  );
}
