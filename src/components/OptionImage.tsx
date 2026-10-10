"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./option-image.module.css";

type OptionImageProps = {
  src: string;
  alt: string;
  className: string;
};

export default function OptionImage({ src, alt, className }: OptionImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      } else if (event.key === "Tab") {
        event.preventDefault();
        dialogRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      triggerRef.current?.focus();
    };
  }, [isOpen]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className={`${className} ${styles.thumbnail}`}
        onClick={() => setIsOpen(true)}
        aria-label={`Open larger image: ${alt}`}
      >
        <Image src={src} alt={alt} fill sizes="(max-width: 460px) 50vw, (max-width: 900px) 45vw, 30vw" />
      </button>

      {isOpen && (
        <div
          className={styles.backdrop}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsOpen(false);
          }}
        >
          <section
            ref={dialogRef}
            tabIndex={-1}
            className={styles.dialog}
            role="dialog"
            aria-modal="true"
            aria-label={alt}
          >
            <div className={styles.imageViewport}>
              <Image src={src} alt={alt} fill sizes="100vw" className={styles.largeImage} priority />
            </div>
          </section>
        </div>
      )}
    </>
  );
}
