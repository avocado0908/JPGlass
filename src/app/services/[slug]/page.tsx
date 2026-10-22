import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import CTA from "@/components/CTA";
import FramelessShowerSelector from "@/components/FramelessShowerSelector";
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

  const renderOptionCards = (options: ServiceOption[]) => {
    const gallery = options.flatMap((option) => option.image
      ? [{ src: option.image, alt: option.imageAlt ?? option.name }]
      : []);

    return options.map((option) => {
      const isBalustradeOption = service.slug === "glass-balustrades"
        && ["Deck Glass", "Balcony Glass", "Fence Glass", "Outdoor Stair Glass"].includes(option.name);
      const categoryId = `example-category-${option.name.toLowerCase().replaceAll(" ", "-")}`;
      const cardContent = (
        <>
          {option.image ? (
            isBalustradeOption ? (
              <span className={styles.optionImage}>
                <Image src={option.image} alt={option.imageAlt ?? option.name} fill sizes="(max-width: 700px) 100vw, 25vw" />
              </span>
            ) : (
              <OptionImage src={option.image} alt={option.imageAlt ?? option.name} className={styles.optionImage} gallery={gallery} />
            )
          ) : (
            <div className={styles.optionImagePlaceholder} aria-label={`Example photo needed for ${option.name}`}>
              <span>Photo coming soon</span>
            </div>
          )}
          {!isBalustradeOption && <span className={styles.swatch} style={{ backgroundColor: option.tone }} aria-hidden="true" />}
          {isBalustradeOption ? (
            <span className={styles.balustradeCopy}>
              <span className={styles.finishName}>{option.name}</span>
              <span className={styles.finishNote}>{option.note}</span>
            </span>
          ) : (
            <>
              <span className={styles.finishName}>{option.name}</span>
              <span className={styles.finishNote}>{option.note}</span>
            </>
          )}
        </>
      );

      return isBalustradeOption ? (
        <a className={`${styles.finish} ${styles.balustradeOption} ${styles.balustradeOptionLink}`} href={`#${categoryId}`} key={option.name}>
          {cardContent}
        </a>
      ) : (
        <div className={styles.finish} key={option.name}>{cardContent}</div>
      );
    });
  };

  const glassSupportGallery = service.glassSupports?.flatMap((option) => option.image
    ? [{ src: option.image, alt: option.imageAlt ?? option.name }]
    : []);

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
        {service.slug === "shower-boxes" && (
          <nav className={styles.showerOptionCards} aria-label="Available shower box options">
            <a className={styles.showerOptionCard} href="#frameless-shower-box">
              <span className={styles.showerOptionImage}><Image src="/images/shower-boxes/frameless-straight-showerbox-black-02.jpg" alt="Black frameless straight shower box" fill sizes="(max-width: 640px) 100vw, 33vw" /></span>
              <span className={styles.showerOptionTitle}>Frameless Shower Box</span>
            </a>
            <a className={styles.showerOptionCard} href="#sliding-shower-box">
              <span className={styles.showerOptionImage}><Image src="/images/shower-boxes/sliding-straight-shower-silver.png" alt="Silver straight sliding shower box" fill sizes="(max-width: 640px) 100vw, 33vw" /></span>
              <span className={styles.showerOptionTitle}>Sliding Shower Box</span>
            </a>
            <a className={styles.showerOptionCard} href="#no-door-shower-box">
              <span className={styles.showerOptionImage}><Image src="/images/shower-boxes/walkin-shower-box-silver-01.jpg" alt="Silver Walk In Shower Box" fill sizes="(max-width: 640px) 100vw, 33vw" /></span>
              <span className={styles.showerOptionTitle}>Walk In Shower Box</span>
            </a>
            <a className={styles.showerOptionCard} href="#shower-set-options">
              <span className={styles.showerOptionImage}><Image src="/images/shower-boxes/shower-set-box-black-02.png" alt="Black Shower Set Shower Box" fill sizes="(max-width: 640px) 100vw, 25vw" /></span>
              <span className={styles.showerOptionTitle}>Shower Set Shower Box</span>
            </a>
          </nav>
        )}
        {service.slug === "pool-fencing" && (
          <nav className={`${styles.showerOptionCards} ${styles.poolFenceOptionCards}`} aria-label="Available pool fence options">
            <a className={styles.showerOptionCard} href="#example-looks">
              <span className={styles.showerOptionImage}><Image src="/images/pool-fence/01-silver-spigots-pool-fence.png" alt="Glass pool fencing with silver spigots" fill sizes="(max-width: 640px) 100vw, 50vw" /></span>
              <span className={styles.showerOptionTitle}>Glass Pool Fencing</span>
            </a>
            <a className={styles.showerOptionCard} href="#example-looks">
              <span className={styles.showerOptionImage}><Image src="/images/pool-fence/06-silver-spigots-pool-fence-door.png" alt="Glass pool gate with silver spigots" fill sizes="(max-width: 640px) 100vw, 50vw" /></span>
              <span className={styles.showerOptionTitle}>Glass Pool Gates</span>
            </a>
          </nav>
        )}
        {service.optionGroups ? service.optionGroups.map((group) => (
          <div
            className={`${styles.subOptionGroup} ${styles.showerChoiceSection}`}
            id={group.title === "Frameless Shower Boxes" ? "frameless-shower-box" : group.title === "Sliding Shower Boxes" ? "sliding-shower-box" : undefined}
            key={group.title}
          >
            <h3 className={styles.subOptionHeading}>
              {group.title === "Frameless Shower Boxes" ? "Frameless Shower Box" : group.title === "Sliding Shower Boxes" ? "Sliding Shower Box" : group.title}
            </h3>
            {group.shapes && (group.title === "Frameless Shower Boxes" || group.title === "Sliding Shower Boxes") ? (
              <FramelessShowerSelector
                shapes={group.shapes}
                colours={group.options}
                variant={group.title === "Sliding Shower Boxes" ? "sliding" : "frameless"}
              />
            ) : (
              <>
                {group.shapes && (
                  <div className={styles.shapes}>
                    <h4 className={styles.optionLabel}>Available shapes</h4>
                    <div className={styles.shapeGrid}>
                      {group.shapes.map((shape) => (
                        <div className={styles.shapeCard} key={shape}>
                          <svg viewBox="0 0 72 54" aria-hidden="true" className={styles.shapeIcon}>
                            {shape === "Diamond" ? (
                              <path d="M15 44V27L36 8l21 19v17H15Z" />
                            ) : shape === "Rectangular" ? (
                              <path d="M16 9h40v35H16z" />
                            ) : (
                              <path d="M20 9h32v35H20z" />
                            )}
                          </svg>
                          <span>{shape}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <h4 className={styles.optionLabel}>Hardware finishes</h4>
                <div className={styles.finishGrid}>{renderOptionCards(group.options)}</div>
              </>
            )}
          </div>
        )) : service.options.length > 0 ? <div className={styles.finishGrid}>{renderOptionCards(service.options)}</div> : null}
        {service.slug === "shower-boxes" && (
          <div className={`${styles.subOptionGroup} ${styles.showerChoiceSection}`} id="no-door-shower-box">
            <h3 className={styles.subOptionHeading}>Walk In Shower Box</h3>
            <p className={styles.showerChoiceDescription}>Choose a hardware colour for your open walk-in shower screen.</p>
            <FramelessShowerSelector shapes={["No Door"]} colours={service.optionGroups?.[0]?.options.filter((option) => option.name !== "Bronze") ?? []} variant="noDoor" />
          </div>
        )}
        {service.glassPanels && (
          <div className={styles.subOptionGroup}>
            <h3 className={styles.subOptionHeading}>Glass Balustrade Panel options</h3>
            <div className={styles.finishGrid}>{renderOptionCards(service.glassPanels)}</div>
          </div>
        )}
        {service.showerSets && (
          <div className={styles.subOptionGroup} id="shower-set-options">
            <h3 className={styles.subOptionHeading}>Shower Set Shower Box</h3>
            <FramelessShowerSelector shapes={["Straight"]} colours={service.showerSets} variant="showerSet" />
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
                      gallery={glassSupportGallery}
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
