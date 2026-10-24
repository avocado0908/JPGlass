import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import CTA from "@/components/CTA";
import { services } from "@/data/services";
import styles from "./about.module.css";

export const metadata = {
  title: "About | JP Glass Balustrades",
  description:
    "Learn about JP Glass Balustrades and our custom glass services for homes throughout Auckland.",
};

const process = [
  {
    number: "01",
    title: "Talk through your project",
    description:
      "Share your plans, location, and what you want the glass to do in your space.",
  },
  {
    number: "02",
    title: "Explore the right options",
    description:
      "Compare configurations, glass styles, hardware, and finishes for your project.",
  },
  {
    number: "03",
    title: "Plan the installation",
    description:
      "We work through the project details with you and arrange the next steps.",
  },
];

export default function AboutPage() {
  return (
    <main id="main-content">
      <section className={styles.hero}>
        <div className={`wrap ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <p className="eyebrow">About JP Glass</p>
            <h1>
              Glass solutions
              <br />
              <span>made for your space.</span>
            </h1>
            <p>
              JP Glass Balustrades provides custom glass solutions for homes
              throughout Auckland. We help you find an option that suits your
              layout, your needs, and the way you want your space to feel.
            </p>
            <div className={styles.heroActions}>
              <Link className="button button-primary" href="/services">
                Explore our services <ArrowRight size={16} />
              </Link>
              <a className={styles.textLink} href="#our-approach">
                Our approach <ArrowDown size={15} />
              </a>
            </div>
          </div>
          <figure className={styles.heroImage}>
            <Image
              src="/images/hero-timber-glass-balcony.jpg"
              alt="Glass balustrade along a timber balcony overlooking a garden"
              fill
              fetchPriority="high"
              sizes="(max-width: 760px) 100vw, 48vw"
            />
            <figcaption>Custom glass for residential spaces</figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.approach} id="our-approach">
        <div className={`wrap ${styles.approachInner}`}>
          <div className={styles.approachIntro}>
            <p className="eyebrow">Our approach</p>
            <h2>Good glasswork begins with understanding the space.</h2>
            <p>
              Every home and project is different. We start by listening to what
              you need, then help you work through the choices that shape the
              finished result—from panel style to hardware and finish.
            </p>
            <Link className={styles.inlineLink} href="/contact">
              Tell us about your project <ArrowUpRight size={16} />
            </Link>
          </div>
          <ol className={styles.processList}>
            {process.map((step) => (
              <li key={step.number}>
                <span className={styles.stepNumber}>{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                <ArrowRight className={styles.stepArrow} size={17} aria-hidden="true" />
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.services} id="our-services">
        <div className="wrap">
          <div className={styles.servicesHeading}>
            <div>
              <p className="eyebrow">What we do</p>
              <h2>Glass for the details that shape a home.</h2>
            </div>
            <p>
              Explore our residential glass services and see the options
              available for your project.
            </p>
          </div>
          <div className={styles.serviceGrid}>
            {services.map((service) => (
              <Link
                className={styles.serviceCard}
                href={`/services/${service.slug}`}
                key={service.slug}
              >
                <span>{service.number}</span>
                <h3>{service.cardTitle}</h3>
                <p>{service.description}</p>
                <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </main>
  );
}
