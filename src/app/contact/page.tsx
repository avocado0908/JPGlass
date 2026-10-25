import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import QuoteForm from "@/components/QuoteForm";
import { businessContact } from "@/data/business";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contact | JP Glass Balustrades",
  description:
    "Tell JP Glass about your glass balustrade, pool fencing, shower screen, or custom glass project and request a quote.",
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <section className={styles.intro}>
        <div className={`wrap ${styles.introInner}`}>
          <div className={styles.introCopy}>
            <p className="eyebrow">Contact JP Glass</p>
            <h1>
              Let’s talk about
              <br />
              <span>your next glass project.</span>
            </h1>
            <p className={styles.introText}>
              Tell us what you’re planning, where the project is, and what you
              need. We’ll review the details and get back to you about the next
              steps.
            </p>
            <div className={styles.introActions}>
              <a className="button button-primary" href={businessContact.phoneHref}>
                <Phone size={16} />
                Call {businessContact.phoneDisplay}
              </a>
              <a className={styles.quoteLink} href="#quote-form">
                Request a quote <ArrowDown size={15} />
              </a>
            </div>
          </div>
          <div className={styles.introVisual}>
            <Image
              src="/images/hero-balcony-sunset.jpg"
              alt="Glass balustrade on a modern home overlooking the outdoors"
              fill
              fetchPriority="high"
              sizes="(max-width: 760px) 100vw, 48vw"
            />
            <span className={styles.imageCaption}>Custom glass across Auckland</span>
          </div>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={`wrap ${styles.contactLayout}`}>
          <aside className={styles.contactAside} aria-labelledby="contact-details-title">
            <p className="eyebrow">Get in touch</p>
            <h2 id="contact-details-title">A good project starts with a conversation.</h2>
            <p className={styles.asideIntro}>
              Share a few details in the form or contact us directly. Photos of
              the space are helpful, but you can send your enquiry without them.
            </p>

            <div className={styles.contactDetails}>
              <a className={styles.contactDetail} href={businessContact.phoneHref}>
                <span className={styles.detailIcon}><Phone size={18} /></span>
                <span><small>Call us</small>{businessContact.phoneDisplay}</span>
                <ArrowUpRight size={15} />
              </a>
              <a className={styles.contactDetail} href={`mailto:${businessContact.email}`}>
                <span className={styles.detailIcon}><Mail size={18} /></span>
                <span><small>Email</small>{businessContact.email}</span>
                <ArrowUpRight size={15} />
              </a>
              <div className={styles.contactDetail}>
                <span className={styles.detailIcon}><MessageCircle size={18} /></span>
                <span><small>WeChat</small>X-TRS06</span>
              </div>
              <a
                className={styles.contactDetail}
                href="https://www.instagram.com/jp.glass1/"
                target="_blank"
                rel="noreferrer"
              >
                <span className={styles.detailIcon}>
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="18" cy="6" r=".8" fill="currentColor" stroke="none" />
                  </svg>
                </span>
                <span><small>Instagram</small>@jp.glass1</span>
                <ArrowUpRight size={15} />
              </a>
            </div>

            <div className={styles.serviceArea}>
              <MapPin size={17} />
              <span><strong>Service area</strong>All Auckland, New Zealand</span>
            </div>

            <div className={styles.nextSteps}>
              <h3>What happens next</h3>
              <ol>
                <li><span>01</span><span><strong>Tell us about it</strong>Choose a service and describe the space.</span></li>
                <li><span>02</span><span><strong>We review your enquiry</strong>We’ll look over the project details and photos.</span></li>
                <li><span>03</span><span><strong>We’ll be in touch</strong>We’ll discuss suitable options and next steps.</span></li>
              </ol>
            </div>
          </aside>

          <div className={styles.formCard}>
            <div className={styles.formHeading}>
              <p className="eyebrow">Quote enquiry</p>
              <h2>Tell us about your project.</h2>
              <p>Fill in the details below and we’ll follow up with you.</p>
            </div>
            <QuoteForm />
          </div>
        </div>
      </section>
    </main>
  );
}
