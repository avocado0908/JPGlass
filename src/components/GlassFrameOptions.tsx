"use client";

import Image from "next/image";
import { useState } from "react";
import type { ServiceOption } from "@/data/services";
import styles from "@/app/services/[slug]/service-detail.module.css";

type FrameOption = ServiceOption & {
  clearImage: string;
  euroBlackImage: string;
};

export default function GlassFrameOptions({ options }: { options: FrameOption[] }) {
  const [glassByFrame, setGlassByFrame] = useState<Record<string, "Clear" | "Euro Black">>({});

  return (
    <div className={styles.finishGrid}>
      {options.map((option) => {
        const glass = glassByFrame[option.name] ?? "Clear";
        const image = glass === "Clear" ? option.clearImage : option.euroBlackImage;
        const glassName = glass === "Clear" ? "clear" : "Euro Black";

        return (
          <article className={`${styles.finish} ${styles.frameOption}`} key={option.name}>
            <span className={styles.optionImage}>
              <Image
                key={image}
                src={image}
                alt={`${glassName} glass balustrade panel with ${option.name.replace("Glass Balustrade Panel — ", "").toLowerCase()}`}
                fill
                sizes="(max-width: 700px) 100vw, 25vw"
              />
            </span>
            <span className={styles.swatch} style={{ backgroundColor: option.tone }} aria-hidden="true" />
            <span className={styles.finishName}>{option.name}</span>
            <span className={styles.finishNote}>{option.note}</span>
            <span className={styles.glassChoiceLabel}>Glass</span>
            <div className={styles.glassChoice} role="group" aria-label={`Choose glass for ${option.name}`}>
              {(["Clear", "Euro Black"] as const).map((choice) => (
                <button
                  type="button"
                  key={choice}
                  className={styles.glassChoiceButton}
                  aria-pressed={glass === choice}
                  onClick={() => setGlassByFrame((current) => ({ ...current, [option.name]: choice }))}
                >
                  {choice}
                </button>
              ))}
            </div>
          </article>
        );
      })}
    </div>
  );
}
