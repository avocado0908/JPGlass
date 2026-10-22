"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { ServiceOption, ShowerBoxShape } from "@/data/services";
import styles from "./frameless-shower-selector.module.css";

type FramelessShowerSelectorProps = {
  shapes: ShowerBoxShape[];
  colours: ServiceOption[];
  variant?: "frameless" | "sliding" | "noDoor" | "showerSet";
};

const temporaryExamples: Record<string, string[]> = {
  Silver: [
    "/images/shower-grey-glass-corner.jpg",
    "/images/shower-marble-bathroom.jpg",
    "/images/shower-grey-walk-in.jpg",
  ],
  Black: [
    "/images/shower-black-framed-marble.jpg",
    "/images/shower-black-framed-glass.jpg",
    "/images/shower-geometric-tile.jpg",
  ],
  Gunmetal: [
    "/images/frameless-box-gunmetal.jpg",
    "/images/shower-marble-frosted-window.jpg",
    "/images/shower-stone-spa.jpg",
  ],
  "Brushed Nickel": [
    "/images/frameless-box-brushed-nickel.jpg",
    "/images/shower-marble-walk-in.jpg",
    "/images/shower-attic-glass.jpg",
  ],
  Gold: [
    "/images/shower-brass-framed-glass.jpg",
    "/images/shower-frameless-gold-custom.jpg",
    "/images/frameless-box-gold.jpg",
  ],
};

const diamondExamples: Record<string, string> = {
  Silver: "/images/shower-boxes/frameless-shower-box-diamond-silver.png",
  Black: "/images/shower-boxes/frameless-shower-box-diamond-black.png",
  Gunmetal: "/images/shower-boxes/frameless-shower-box-diamond-gunmetal.png",
  "Brushed Nickel": "/images/shower-boxes/frameless-shower-box-diamond-brushed-nickel.png",
  Gold: "/images/shower-boxes/frameless-shower-box-diamond-gold.png",
};

const rectangularExamples: Record<string, string> = {
  Silver: "/images/shower-boxes/frameless-shower-box-rectangular-silver.png",
  Black: "/images/shower-boxes/frameless-shower-box-rectangular-black.png",
  Gunmetal: "/images/shower-boxes/frameless-shower-box-rectangular-gunmetal.png",
  "Brushed Nickel": "/images/shower-boxes/frameless-shower-box-rectangular-brushed-nickel.png",
  Gold: "/images/shower-boxes/frameless-shower-box-rectangular-gold.png",
};

const rectangularAdditionalExamples: Record<string, string[]> = {
  Silver: ["/images/shower-boxes/frameless-rectangular-showerbox-silver-01.png"],
  Black: ["/images/shower-boxes/frameless-rectangular-showerbox-black.png"],
  "Brushed Nickel": ["/images/shower-boxes/frameless-rectangular-showerbox-brushed-nickel.png"],
  Gunmetal: [
    "/images/shower-boxes/frameless-rectangular-showerbox-gunmetal.png",
    "/images/shower-boxes/frameless-rectangular-showerbox-gunmetal-01.png",
    "/images/shower-boxes/frameless-rectangular-showerbox-gunmetal-02.png",
  ],
  Gold: ["/images/shower-boxes/frameless-rectangular-showerbox-gold.png"],
};

const straightExamples: Record<string, string> = {
  Silver: "/images/shower-boxes/frameless-shower-box-straight-silver.png",
  Black: "/images/shower-boxes/frameless-shower-box-straight-black.png",
  Gunmetal: "/images/shower-boxes/frameless-shower-box-straight-gunmetal.png",
  "Brushed Nickel": "/images/shower-boxes/frameless-shower-box-straight-brushed-nickel.png",
  Gold: "/images/shower-boxes/frameless-shower-box-straight-gold.png",
};

const straightAdditionalExamples: Record<string, string[]> = {
  Silver: ["/images/shower-boxes/frameless-straight-showerbox-silver-02.jpg"],
  Black: [
    "/images/shower-boxes/frameless-straight-showerbox-black-02.jpg",
    "/images/shower-boxes/frameless-straight-showerbox-black-03.png",
  ],
  Gunmetal: ["/images/shower-boxes/frameless-straight-showerbox-gunmetal.jpg"],
  Gold: [
    "/images/shower-boxes/frameless-straight-showerbox-gold.png",
    "/images/shower-boxes/frameless-straight-showerbox-gold-02.png",
  ],
};

const slidingStraightExamples: Record<string, string> = {
  Silver: "/images/shower-boxes/sliding-shower-straight-silver.png",
  Black: "/images/shower-boxes/sliding-shower-straight-black.png",
  Gunmetal: "/images/shower-boxes/sliding-shower-straight-gunmetal.png",
  "Brushed Nickel": "/images/shower-boxes/sliding-shower-straight-brushed-nickel.png",
  Gold: "/images/shower-boxes/sliding-shower-straight-gold.png",
};

const slidingRectangularExamples: Record<string, string> = {
  Silver: "/images/shower-boxes/sliding-shower-rectangular-silver.png",
  Black: "/images/shower-boxes/sliding-shower-rectangular-black.png",
  Gunmetal: "/images/shower-boxes/sliding-shower-rectangular-gunmetal.png",
  "Brushed Nickel": "/images/shower-boxes/sliding-shower-rectangular-brushed-nickel.png",
  Gold: "/images/shower-boxes/sliding-shower-rectangular-gold.png",
};

const slidingRectangularAdditionalExamples: Record<string, string[]> = {
  Silver: ["/images/shower-boxes/sliding-rectangular-shower-silver.png"],
  Gunmetal: ["/images/shower-boxes/sliding-rectangular-shower-gunmetal.png"],
  Black: [
    "/images/shower-boxes/sliding-rectangular-shower-black-01.png",
    "/images/shower-boxes/sliding-rectangular-shower-black-02.png",
    "/images/shower-boxes/sliding-rectangular-shower-black-03.png",
  ],
};

const slidingAdditionalExamples: Record<string, string[]> = {
  Silver: ["/images/shower-boxes/sliding-straight-shower-silver.png"],
  Black: ["/images/shower-boxes/sliding-shower-straight-black-02.jpg"],
  "Brushed Nickel": ["/images/shower-boxes/sliding-shower-straight-brushed-nickel-02.png"],
  Gold: ["/images/shower-boxes/sliding-straight-shower-gold.png"],
};

const noDoorImages: Record<string, string> = {
  Silver: "/images/shower-boxes/walkin-shower-box-silver.png",
  Black: "/images/shower-boxes/walkin-shower-box-black.png",
  Gunmetal: "/images/shower-boxes/walkin-shower-box-gunmetal.png",
  "Brushed Nickel": "/images/shower-boxes/walkin-shower-box-brushed-nickel.png",
  Gold: "/images/shower-boxes/walkin-shower-box-gold.png",
};

const showerSetImages: Record<string, string> = {
  Silver: "/images/shower-boxes/shower-set-box-silver.png",
  Black: "/images/shower-boxes/shower-set-box-black.png",
};

const showerSetAdditionalImages: Record<string, string[]> = {
  Silver: ["/images/shower-boxes/shower-set-box-silver-02.png"],
  Black: ["/images/shower-boxes/shower-set-box-black-02.png"],
};

type ShowerGalleryImage = {
  colour: string;
  src: string;
  imageIndex: number;
};

function getShapeImages(shape: ShowerBoxShape, colour: string, variant: "frameless" | "sliding" | "noDoor" | "showerSet", shapeIndex: number) {
  const images = temporaryExamples[colour] ?? temporaryExamples.Silver;
  if (variant === "noDoor") return [noDoorImages[colour] ?? noDoorImages.Silver];
  if (variant === "showerSet") {
    return [showerSetImages[colour] ?? showerSetImages.Silver, ...(showerSetAdditionalImages[colour] ?? [])];
  }
  const slidingPrimaryImage = shape === "Rectangular"
    ? slidingRectangularExamples[colour]
    : slidingStraightExamples[colour] ?? images[shapeIndex % images.length];
  const primaryImage = variant === "sliding"
    ? slidingPrimaryImage
    : shape === "Diamond"
      ? diamondExamples[colour] ?? images[shapeIndex % images.length]
      : shape === "Rectangular"
        ? rectangularExamples[colour] ?? images[shapeIndex % images.length]
        : shape === "Straight"
          ? straightExamples[colour] ?? images[shapeIndex % images.length]
          : images[shapeIndex] ?? images[0];

  if (variant === "sliding") {
    if (shape === "Rectangular" && slidingRectangularAdditionalExamples[colour]) {
      return [primaryImage, ...slidingRectangularAdditionalExamples[colour]];
    }
    if (shape === "Straight" && slidingAdditionalExamples[colour]) {
      return [primaryImage, ...slidingAdditionalExamples[colour]];
    }
    return [primaryImage];
  }

  if (shape === "Diamond" && colour === "Silver") {
    return [primaryImage, "/images/shower-marble-bathroom.jpg", "/images/shower-boxes/frameless-diamond-corner-showerbox-silver-03.png"];
  }
  if (shape === "Diamond" && colour === "Black") {
    return [primaryImage, "/images/shower-boxes/frameless-diamond-corner-showerbox-black-01.jpg"];
  }
  if (shape === "Diamond" && colour === "Gold") {
    return [primaryImage, "/images/shower-boxes/frameless-diamond-corner-showerbox-gold-03.png"];
  }
  if (shape === "Diamond" && colour === "Gunmetal") {
    return [primaryImage, "/images/shower-boxes/frameless-diamond-corner-showerbox-gunmetal.png"];
  }
  if (shape === "Rectangular" && rectangularAdditionalExamples[colour]) {
    return [primaryImage, ...rectangularAdditionalExamples[colour]];
  }
  if (shape === "Straight" && straightAdditionalExamples[colour]) {
    return [primaryImage, ...straightAdditionalExamples[colour]];
  }
  return [primaryImage];
}

export default function FramelessShowerSelector({ shapes, colours, variant = "frameless" }: FramelessShowerSelectorProps) {
  const [selectedColours, setSelectedColours] = useState<Record<string, string>>({});
  const [imageIndexes, setImageIndexes] = useState<Record<string, number>>({});
  const [lightboxShape, setLightboxShape] = useState<ShowerBoxShape | null>(null);
  const [lightboxColour, setLightboxColour] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const lightboxImages: ShowerGalleryImage[] = useMemo(() => lightboxShape && lightboxColour
    ? getShapeImages(lightboxShape, lightboxColour, variant, shapes.indexOf(lightboxShape))
      .map((src, imageIndex) => ({ colour: lightboxColour, src, imageIndex }))
    : [], [lightboxColour, lightboxShape, shapes, variant]);
  const activeLightboxImage = lightboxImages[lightboxIndex];

  const selectLightboxImage = useCallback((index: number) => {
    if (!lightboxShape || !lightboxColour || lightboxImages.length === 0) return;
    const nextIndex = (index + lightboxImages.length) % lightboxImages.length;
    const nextImage = lightboxImages[nextIndex];
    setLightboxIndex(nextIndex);
    setSelectedColours((current) => ({ ...current, [lightboxShape]: lightboxColour }));
    setImageIndexes((current) => ({ ...current, [lightboxShape]: nextImage.imageIndex }));
  }, [lightboxColour, lightboxImages, lightboxShape]);

  useEffect(() => {
    if (!lightboxShape) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightboxShape(null);
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        selectLightboxImage(lightboxIndex - 1);
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        selectLightboxImage(lightboxIndex + 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxShape, lightboxIndex, lightboxImages, selectLightboxImage]);

  const openLightbox = (shape: ShowerBoxShape, colour: string, imageIndex: number, shapeIndex: number) => {
    const imageCount = getShapeImages(shape, colour, variant, shapeIndex).length;
    setLightboxShape(shape);
    setLightboxColour(colour);
    setLightboxIndex(Math.min(imageIndex, imageCount - 1));
  };

  return (
    <div className={styles.selector}>
      <div className={`${styles.shapeGrid} ${variant === "sliding" ? styles.twoShapeGrid : ""}`}>
        {shapes.map((shape, index) => {
          const selectedColour = selectedColours[shape] ?? "Silver";
          const boxLabel = variant === "noDoor"
            ? "Walk In Shower Box"
            : variant === "showerSet"
              ? "Shower Set Shower Box"
            : `${shape} ${variant === "sliding" ? "Sliding" : "Frameless"} Shower Box`;
          const imageSet = getShapeImages(shape, selectedColour, variant, index);
          const imageIndex = Math.min(imageIndexes[shape] ?? 0, imageSet.length - 1);
          const image = imageSet[imageIndex];

          return (
            <article className={styles.shapeCard} key={shape}>
              <div className={styles.shapeImage}>
                <button
                  className={styles.openLightboxButton}
                  type="button"
                  aria-label={`Open ${selectedColour} ${boxLabel.toLowerCase()} image gallery`}
                  onClick={() => openLightbox(shape, selectedColour, imageIndex, index)}
                >
                  <Image
                    key={`${shape}-${selectedColour}-${imageIndex}`}
                    src={image}
                    alt={variant === "noDoor"
                      ? `${selectedColour} colour option for an open walk-in shower screen`
                      : variant === "showerSet"
                        ? `${selectedColour} finish for a shower set shower box`
                        : `${selectedColour} finish example for a ${shape.toLowerCase()} ${variant} shower box`}
                    fill
                    sizes="(max-width: 760px) 100vw, 33vw"
                    className={styles.fadeImage}
                  />
                </button>
                {imageSet.length > 1 && (
                  <div className={styles.carouselControls} aria-label={`${shape} ${selectedColour} image gallery`}>
                    <button
                      className={styles.carouselButton}
                      type="button"
                      aria-label="Show previous image"
                      onClick={() => setImageIndexes((current) => ({
                        ...current,
                        [shape]: (imageIndex - 1 + imageSet.length) % imageSet.length,
                      }))}
                    >
                      ‹
                    </button>
                    <span className={styles.carouselCount} aria-live="polite">{imageIndex + 1} / {imageSet.length}</span>
                    <button
                      className={styles.carouselButton}
                      type="button"
                      aria-label="Show next image"
                      onClick={() => setImageIndexes((current) => ({
                        ...current,
                        [shape]: (imageIndex + 1) % imageSet.length,
                      }))}
                    >
                      ›
                    </button>
                  </div>
                )}
              </div>
            <h4 className={styles.shapeName}>{variant === "noDoor" ? "Walk In Shower Box" : variant === "showerSet" ? "Shower Set Shower Box" : shape}</h4>
              <div className={styles.cardColourSection}>
                <div className={styles.cardColourHeading}>
                  <h5>Colour Options</h5>
                  <p aria-live="polite">Selected: <strong>{selectedColour}</strong></p>
                </div>
                <div className={styles.colourOptions} role="group" aria-label={`Choose colour for ${shape} shower box`}>
                  {colours.map((colour) => (
                    <button
                      className={`${styles.colourOption} ${selectedColour === colour.name ? styles.selectedColour : ""}`}
                      key={colour.name}
                      type="button"
                      aria-pressed={selectedColour === colour.name}
                      onClick={() => {
                        setSelectedColours((current) => ({ ...current, [shape]: colour.name }));
                        setImageIndexes((current) => ({ ...current, [shape]: 0 }));
                      }}
                    >
                      <span className={styles.colourSwatch} style={{ backgroundColor: colour.tone }} aria-hidden="true" />
                      <span>{colour.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
      <p className={styles.temporaryNote}>Example images show available shower box shapes and finishes.</p>

      {lightboxShape && activeLightboxImage && (
        <div
          className={styles.lightboxOverlay}
          role="presentation"
          onClick={(event) => {
            if (event.target === event.currentTarget) setLightboxShape(null);
          }}
          onTouchStart={(event) => setTouchStartX(event.touches[0]?.clientX ?? null)}
          onTouchEnd={(event) => {
            if (touchStartX === null) return;
            const touchEndX = event.changedTouches[0]?.clientX;
            if (touchEndX === undefined) return;
            const deltaX = touchEndX - touchStartX;
            if (deltaX > 55) selectLightboxImage(lightboxIndex - 1);
            if (deltaX < -55) selectLightboxImage(lightboxIndex + 1);
            setTouchStartX(null);
          }}
        >
          <section className={styles.lightboxDialog} role="dialog" aria-modal="true" aria-label={variant === "noDoor" ? "Walk In Shower Box image gallery" : variant === "showerSet" ? "Shower Set Shower Box image gallery" : `${lightboxShape} ${variant === "frameless" ? "Frameless" : "Sliding"} Shower Box image gallery`}>
            <button className={styles.lightboxClose} type="button" aria-label="Close image gallery" onClick={() => setLightboxShape(null)}>×</button>
            <div className={styles.lightboxStage}>
              <button className={`${styles.lightboxArrow} ${styles.lightboxPrevious}`} type="button" aria-label="Previous image" onClick={() => selectLightboxImage(lightboxIndex - 1)}>‹</button>
              <div className={styles.lightboxMainImage}>
                <Image
                  key={`${activeLightboxImage.colour}-${activeLightboxImage.src}`}
                  src={activeLightboxImage.src}
                  alt={variant === "noDoor"
                    ? `${activeLightboxImage.colour} colour option for an open walk-in shower screen`
                    : variant === "showerSet"
                      ? `${activeLightboxImage.colour} finish for a shower set shower box`
                      : `${activeLightboxImage.colour} finish for ${lightboxShape.toLowerCase()} shower box`}
                  fill
                  sizes="85vw"
                  className={styles.lightboxImage}
                  priority
                />
              </div>
              <button className={`${styles.lightboxArrow} ${styles.lightboxNext}`} type="button" aria-label="Next image" onClick={() => selectLightboxImage(lightboxIndex + 1)}>›</button>
            </div>
            <p className={styles.lightboxColour} aria-live="polite">{variant === "noDoor" ? "Walk In Shower Box" : variant === "showerSet" ? "Shower Set Shower Box" : `${lightboxShape} ${variant === "frameless" ? "Frameless" : "Sliding"} Shower Box`} - {activeLightboxImage.colour}</p>
            <div className={styles.lightboxThumbnailViewport} aria-label="All shower box colours and images">
              <div className={styles.lightboxThumbnails}>
                {lightboxImages.map((item, index) => (
                  <button
                    className={`${styles.lightboxThumbnail} ${index === lightboxIndex ? styles.lightboxThumbnailSelected : ""}`}
                    type="button"
                    key={`${item.colour}-${item.src}`}
                    aria-label={`${item.colour} image ${item.imageIndex + 1}`}
                    aria-pressed={index === lightboxIndex}
                    onClick={() => selectLightboxImage(index)}
                  >
                    <span className={styles.lightboxThumbnailImage}>
                      <Image src={item.src} alt="" fill sizes="100px" />
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
