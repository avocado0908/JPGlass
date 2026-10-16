"use client";

import Image from "next/image";
import { useState } from "react";
import type { ServiceOption, ShowerBoxShape } from "@/data/services";
import styles from "./frameless-shower-selector.module.css";

type FramelessShowerSelectorProps = {
  shapes: ShowerBoxShape[];
  colours: ServiceOption[];
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

const straightExamples: Record<string, string> = {
  Silver: "/images/shower-boxes/frameless-shower-box-straight-silver.png",
  Black: "/images/shower-boxes/frameless-shower-box-straight-black.png",
  Gunmetal: "/images/shower-boxes/frameless-shower-box-straight-gunmetal.png",
  "Brushed Nickel": "/images/shower-boxes/frameless-shower-box-straight-brushed-nickel.png",
  Gold: "/images/shower-boxes/frameless-shower-box-straight-gold.png",
};

export default function FramelessShowerSelector({ shapes, colours }: FramelessShowerSelectorProps) {
  const [selectedColours, setSelectedColours] = useState<Record<string, string>>({});

  return (
    <div className={styles.selector}>
      <div className={styles.shapeGrid}>
        {shapes.map((shape, index) => {
          const selectedColour = selectedColours[shape] ?? "Silver";
          const images = temporaryExamples[selectedColour] ?? temporaryExamples.Silver;
          const image = shape === "Diamond"
            ? diamondExamples[selectedColour]
            : shape === "Rectangular"
              ? rectangularExamples[selectedColour]
              : shape === "Straight"
                ? straightExamples[selectedColour]
                : images[index] ?? images[0];

          return (
            <article className={styles.shapeCard} key={shape}>
              <div className={styles.shapeImage}>
                <Image
                  key={`${shape}-${selectedColour}`}
                  src={image}
                  alt={`Temporary ${selectedColour} finish example for a ${shape.toLowerCase()} frameless shower box`}
                  fill
                  sizes="(max-width: 760px) 100vw, 33vw"
                  className={styles.fadeImage}
                />
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
                      onClick={() => setSelectedColours((current) => ({ ...current, [shape]: colour.name }))}
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
