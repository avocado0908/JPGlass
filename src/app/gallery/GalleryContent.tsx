"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
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
  const items = sections.flatMap((section) => section.items);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeItem = activeIndex === null ? null : items[activeIndex];

  const closeDialog = () => {
    if (dialogRef.current?.open) dialogRef.current.close();
  };

  const openDialog = (index: number, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger;
    setActiveIndex(index);
    dialogRef.current?.showModal();
  };

  const move = useCallback((direction: -1 | 1) => {
    setActiveIndex((current) => {
      if (current === null) return current;
      return (current + direction + items.length) % items.length;
    });
  }, [items.length]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!dialogRef.current?.open) return;
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        move(-1);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        move(1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [move]);

  return (
    <>
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
              </div>
              <div className={styles.grid}>
                {section.items.map((item) => {
                  const itemIndex = items.indexOf(item);
                  return (
                    <figure className={styles.card} key={`${item.image}-${itemIndex}`}>
                      <button
                        className={styles.thumbnailButton}
                        type="button"
                        aria-label={`View larger image: ${item.title}`}
                        onClick={(event) => openDialog(itemIndex, event.currentTarget)}
                      >
                        <span className={styles.image}>
                          <Image
                            src={item.image}
                            alt={item.alt}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw"
                          />
                          <span className={styles.zoomHint} aria-hidden="true">View</span>
                        </span>
                      </button>
                      <figcaption>
                        <span>{item.title}</span>
                        <span>{item.category}</span>
                      </figcaption>
                    </figure>
                  );
                })}
              </div>
            </div>
          </section>
        ))}
      </div>

      <dialog
        className={styles.lightbox}
        ref={dialogRef}
        aria-label="Gallery image viewer"
        onClose={() => {
          setActiveIndex(null);
          triggerRef.current?.focus();
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeDialog();
        }}
      >
        {activeItem && activeIndex !== null && (
          <div className={styles.lightboxContent}>
            <div className={styles.lightboxTop}>
              <p>
                <span>{activeItem.title}</span>
                <span>{activeItem.category}</span>
              </p>
              <button
                className={styles.closeButton}
                type="button"
                aria-label="Close image viewer"
                onClick={closeDialog}
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className={styles.lightboxImage}>
              <Image src={activeItem.image} alt={activeItem.alt} fill sizes="95vw" />
            </div>
            <div className={styles.lightboxBottom}>
              <button type="button" onClick={() => move(-1)} aria-label="Previous image">
                <span aria-hidden="true">←</span> Previous
              </button>
              <span>{activeIndex + 1} / {items.length}</span>
              <button type="button" onClick={() => move(1)} aria-label="Next image">
                Next <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
