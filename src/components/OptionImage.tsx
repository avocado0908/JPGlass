"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./option-image.module.css";

export type OptionGalleryImage = { src: string; alt: string };

type OptionImageProps = {
  src: string;
  alt: string;
  className: string;
  gallery?: OptionGalleryImage[];
};

export default function OptionImage({ src, alt, className, gallery }: OptionImageProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLElement>(null);
  const touchStartX = useRef<number | null>(null);
  const images = useMemo(() => gallery?.length ? gallery : [{ src, alt }], [alt, gallery, src]);
  const isOpen = activeIndex !== null;
  const activeImage = activeIndex === null ? null : images[activeIndex];

  const move = (direction: -1 | 1) => {
    setActiveIndex((current) => current === null ? null : (current + direction + images.length) % images.length);
  };

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveIndex(null);
      } else if (event.key === "ArrowLeft" && images.length > 1) {
        event.preventDefault();
        setActiveIndex((current) => current === null ? null : (current - 1 + images.length) % images.length);
      } else if (event.key === "ArrowRight" && images.length > 1) {
        event.preventDefault();
        setActiveIndex((current) => current === null ? null : (current + 1) % images.length);
      } else if (event.key === "Tab") {
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
      triggerRef.current?.focus();
    };
  }, [isOpen, images.length]);

  const openGallery = () => {
    const initialIndex = images.findIndex((image) => image.src === src && image.alt === alt);
    setActiveIndex(initialIndex < 0 ? 0 : initialIndex);
  };

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className={`${className} ${styles.thumbnail}`}
        onClick={openGallery}
        aria-label={`Open larger image: ${alt}`}
      >
        <Image src={src} alt={alt} fill sizes="(max-width: 460px) 50vw, (max-width: 900px) 45vw, 30vw" />
      </button>

      {activeImage && activeIndex !== null && (
        <div
          className={styles.backdrop}
          role="presentation"
          onClick={(event) => {
            if (event.target === event.currentTarget) setActiveIndex(null);
          }}
          onTouchStart={(event) => { touchStartX.current = event.changedTouches[0]?.clientX ?? null; }}
          onTouchEnd={(event) => {
            if (touchStartX.current === null) return;
            const endX = event.changedTouches[0]?.clientX;
            if (endX === undefined) return;
            const distance = endX - touchStartX.current;
            if (Math.abs(distance) > 45 && images.length > 1) move(distance < 0 ? 1 : -1);
            touchStartX.current = null;
          }}
        >
          <section
            ref={dialogRef}
            tabIndex={-1}
            className={styles.dialog}
            role="dialog"
            aria-modal="true"
            aria-label={`${activeImage.alt}, image ${activeIndex + 1} of ${images.length}`}
          >
            <button type="button" className={styles.closeButton} onClick={() => setActiveIndex(null)} aria-label="Close image gallery">×</button>
            <div className={styles.imageViewport}>
              {images.length > 1 && <button type="button" className={`${styles.navButton} ${styles.previous}`} onClick={() => move(-1)} aria-label="Previous image"><ChevronLeft aria-hidden="true" /></button>}
              <Image key={activeImage.src} src={activeImage.src} alt={activeImage.alt} fill sizes="85vw" className={styles.largeImage} priority />
              {images.length > 1 && <button type="button" className={`${styles.navButton} ${styles.next}`} onClick={() => move(1)} aria-label="Next image"><ChevronRight aria-hidden="true" /></button>}
            </div>
            <p className={styles.caption} aria-live="polite">
              <span>{String(activeIndex + 1).padStart(2, "0")}</span>{activeImage.alt}
            </p>
            <div className={styles.thumbnailViewport} aria-label="Related option images">
              <div className={styles.thumbnails}>
                {images.map((image, index) => (
                  <button
                    key={`${image.src}-${index}`}
                    type="button"
                    className={`${styles.galleryThumbnail} ${index === activeIndex ? styles.galleryThumbnailSelected : ""}`}
                    aria-label={`Show image ${index + 1}: ${image.alt}`}
                    aria-pressed={index === activeIndex}
                    onClick={() => setActiveIndex(index)}
                  >
                    <span className={styles.thumbnailImage}><Image src={image.src} alt="" fill sizes="100px" /></span>
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
