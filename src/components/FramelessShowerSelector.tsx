"use client";

import Image from "next/image";
import { useState } from "react";
import type { ServiceOption, ShowerBoxShape } from "@/data/services";
import styles from "./frameless-shower-selector.module.css";

type FramelessShowerSelectorProps = {
  shapes: ShowerBoxShape[];
  colours: ServiceOption[];
  variant?: "frameless" | "sliding";
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

const rectangularAdditionalExamples: Record<string, string> = {
  Gunmetal: "/images/shower-boxes/frameless-rectangular-showerbox-gunmetal.png",
  Gold: "/images/shower-boxes/frameless-rectangular-showerbox-gold.png",
};

const straightExamples: Record<string, string> = {
  Silver: "/images/shower-boxes/frameless-shower-box-straight-silver.png",
  Black: "/images/shower-boxes/frameless-shower-box-straight-black.png",
  Gunmetal: "/images/shower-boxes/frameless-shower-box-straight-gunmetal.png",
  "Brushed Nickel": "/images/shower-boxes/frameless-shower-box-straight-brushed-nickel.png",
  Gold: "/images/shower-boxes/frameless-shower-box-straight-gold.png",
};

const straightAdditionalExamples: Record<string, string> = {
  Silver: "/images/shower-boxes/frameless-straight-showerbox-silver-02.jpg",
  Black: "/images/shower-boxes/frameless-straight-showerbox-black-02.jpg",
  Gold: "/images/shower-boxes/frameless-straight-showerbox-gold.png",
};

export default function FramelessShowerSelector({ shapes, colours, variant = "frameless" }: FramelessShowerSelectorProps) {
  const [selectedColours, setSelectedColours] = useState<Record<string, string>>({});
  const [imageIndexes, setImageIndexes] = useState<Record<string, number>>({});

  return (
    <div className={styles.selector}>
      <div className={`${styles.shapeGrid} ${variant === "sliding" ? styles.twoShapeGrid : ""}`}>
        {shapes.map((shape, index) => {
          const selectedColour = selectedColours[shape] ?? "Silver";
          const images = temporaryExamples[selectedColour] ?? temporaryExamples.Silver;
          const slidingImages = [images[index % images.length], images[(index + 1) % images.length]];
          const primaryImage = variant === "sliding"
            ? slidingImages[0]
            : shape === "Diamond"
            ? diamondExamples[selectedColour]
            : shape === "Rectangular"
              ? rectangularExamples[selectedColour]
              : shape === "Straight"
                ? straightExamples[selectedColour]
                : images[index] ?? images[0];
          const imageSet = variant === "sliding"
            ? slidingImages
            : shape === "Diamond" && selectedColour === "Silver"
            ? [primaryImage, "/images/shower-marble-bathroom.jpg"]
            : shape === "Diamond" && selectedColour === "Black"
              ? [primaryImage, "/images/shower-boxes/frameless-diamond-corner-showerbox-black-01.jpg"]
              : shape === "Diamond" && selectedColour === "Gold"
                ? [primaryImage, "/images/shower-boxes/frameless-diamond-corner-showerbox-gold-03.png"]
                : shape === "Rectangular" && rectangularAdditionalExamples[selectedColour]
                  ? [primaryImage, rectangularAdditionalExamples[selectedColour]]
                : shape === "Straight" && straightAdditionalExamples[selectedColour]
                  ? [primaryImage, straightAdditionalExamples[selectedColour]]
                  : [primaryImage];
          const imageIndex = Math.min(imageIndexes[shape] ?? 0, imageSet.length - 1);
          const image = imageSet[imageIndex];

          return (
            <article className={styles.shapeCard} key={shape}>
              <div className={styles.shapeImage}>
                <Image
                  key={`${shape}-${selectedColour}-${imageIndex}`}
                  src={image}
                  alt={`${selectedColour} finish example for a ${shape.toLowerCase()} ${variant} shower box`}
                  fill
                  sizes="(max-width: 760px) 100vw, 33vw"
                  className={styles.fadeImage}
                />
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
              <h4 className={styles.shapeName}>{shape}</h4>
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
    </div>
  );
}
