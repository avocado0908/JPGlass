import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./gallery.module.css";

type GalleryItem = {
  title: string;
  image: string;
  alt: string;
  category: string;
};

type GallerySection = {
  slug: string;
  title: string;
  description: string;
  items: GalleryItem[];
};

export default function GalleryContent({
  sections,
}: {
  sections: GallerySection[];
}) {
  return (
    <div className={styles.gallery}>
      {sections.map((section) => (
        <section
          className={styles.serviceSection}
          key={section.slug}
          aria-labelledby={`gallery-${section.slug}`}
        >
          <div className={`wrap ${styles.sectionInner}`}>
            <div className={styles.sectionHeading}>
              <p className="eyebrow">Gallery</p>
              <h2 id={`gallery-${section.slug}`}>{section.title}</h2>
              <p>{section.description}</p>
              <Link className={`text-link ${styles.serviceLink}`} href={`/services/${section.slug}`}>
                View service <ArrowRight size={15} />
              </Link>
            </div>
            <div className={styles.grid}>
              {section.items.map((item) => (
                <figure className={styles.card} key={item.image}>
                  <div className={styles.image}>
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw"
                    />
                  </div>
                  <figcaption>
                    <span>{item.title}</span>
                    <span>{item.category}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
