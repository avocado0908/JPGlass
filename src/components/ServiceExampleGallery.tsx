"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { ServiceExample } from "@/data/services";
import styles from "./service-example-gallery.module.css";

type ServiceExampleGalleryProps = { examples: ServiceExample[] };

export default function ServiceExampleGallery({ examples }: ServiceExampleGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const lastTriggerIndex = useRef<number | null>(null);
  const dialogRef = useRef<HTMLElement>(null);
  const touchStartX = useRef<number | null>(null);
  const isOpen = activeIndex !== null;

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActiveIndex(null);
      else if (event.key === "ArrowLeft") setActiveIndex((i) => i === null ? null : (i - 1 + examples.length) % examples.length);
      else if (event.key === "ArrowRight") setActiveIndex((i) => i === null ? null : (i + 1) % examples.length);
      else if (event.key === "Tab") {
        const buttons = dialogRef.current?.querySelectorAll<HTMLButtonElement>("button");
        if (!buttons?.length) return;
        const first = buttons[0];
        const last = buttons[buttons.length - 1];
        if (event.shiftKey && (document.activeElement === first || document.activeElement === dialogRef.current)) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      if (lastTriggerIndex.current !== null) triggerRefs.current[lastTriggerIndex.current]?.focus();
    };
  }, [isOpen, examples.length]);

  const move = (direction: -1 | 1) => {
    setActiveIndex((i) => i === null ? null : (i + direction + examples.length) % examples.length);
  };
  const activeExample = activeIndex === null ? null : examples[activeIndex];
  const exampleGroups = examples.some((example) => example.category)
    ? Array.from(examples.reduce((groups, example) => {
      const category = example.category ?? "Other examples";
      const group = groups.get(category) ?? [];
      group.push(example);
      groups.set(category, group);
      return groups;
    }, new Map<string, ServiceExample[]>()))
    : null;

  const renderExamples = (groupExamples: ServiceExample[]) => groupExamples.map((example) => {
    const index = examples.indexOf(example);
    return (
      <figure className={styles.example} key={example.image}>
        <button
          ref={(element) => { triggerRefs.current[index] = element; }}
          type="button"
          className={styles.thumbnail}
          onClick={() => {
            lastTriggerIndex.current = index;
            setActiveIndex(index);
          }}
          aria-label={`View ${example.title}`}
        >
          <Image src={example.image} alt={example.alt} fill sizes="(max-width: 700px) 100vw, 50vw" />
        </button>
        <figcaption><span>{String(index + 1).padStart(2, "0")}</span>{example.title}</figcaption>
      </figure>
    );
  });

  return (
    <>
      {exampleGroups ? exampleGroups.map(([category, groupExamples]) => (
        <section className={styles.exampleGroup} id={`example-category-${category.toLowerCase().replaceAll(" ", "-")}`} key={category}>
          <h3 className={styles.groupTitle}>{category}</h3>
          <div className={styles.grid}>{renderExamples(groupExamples)}</div>
        </section>
      )) : (
        <div className={styles.grid}>{renderExamples(examples)}</div>
      )}

      {activeExample && activeIndex !== null && (
        <div className={styles.backdrop} onClick={(event) => {
          if (event.target === event.currentTarget) setActiveIndex(null);
        }}>
          <section
            ref={dialogRef}
            tabIndex={-1}
            className={styles.dialog}
            role="dialog"
            aria-modal="true"
            aria-label={`${activeExample.title}, image ${activeIndex + 1} of ${examples.length}`}
            onTouchStart={(event) => { touchStartX.current = event.changedTouches[0]?.clientX ?? null; }}
            onTouchEnd={(event) => {
              if (touchStartX.current === null) return;
              const endX = event.changedTouches[0]?.clientX;
              if (endX === undefined) return;
              const distance = endX - touchStartX.current;
              if (Math.abs(distance) > 45) move(distance < 0 ? 1 : -1);
              touchStartX.current = null;
            }}
          >
            <button type="button" className={styles.closeButton} onClick={() => setActiveIndex(null)} aria-label="Close image gallery">×</button>
            <div className={styles.imageViewport}>
              <Image src={activeExample.image} alt={activeExample.alt} fill sizes="100vw" className={styles.largeImage} priority />
              {examples.length > 1 && <>
                <button type="button" className={`${styles.navButton} ${styles.previous}`} onClick={() => move(-1)} aria-label="Previous image"><ChevronLeft aria-hidden="true" /></button>
                <button type="button" className={`${styles.navButton} ${styles.next}`} onClick={() => move(1)} aria-label="Next image"><ChevronRight aria-hidden="true" /></button>
              </>}
            </div>
            <p className={styles.caption} aria-live="polite">
              <span>{String(activeIndex + 1).padStart(2, "0")}</span>{activeExample.title}
            </p>
            <div className={styles.thumbnailViewport} aria-label="All example images">
              <div className={styles.thumbnails}>
                {examples.map((example, index) => (
                  <button
                    type="button"
                    key={example.image}
                    className={`${styles.popupThumbnail} ${index === activeIndex ? styles.popupThumbnailSelected : ""}`}
                    aria-label={`Show ${example.title}`}
                    aria-pressed={index === activeIndex}
                    onClick={() => setActiveIndex(index)}
                  >
                    <span className={styles.thumbnailImage}>
                      <Image src={example.image} alt="" fill sizes="100px" />
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
