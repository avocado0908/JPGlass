"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Check, Pause, Play } from "lucide-react";

const slides = [
  {
    image: "/images/hero-balcony-sunset.jpg",
    label: "Modern glass balcony at sunset",
    note: "Glass balcony balustrade",
  },
  {
    image: "/images/hero-hillside-balustrade-sunset.jpg",
    label: "Glass balustrade overlooking hills",
    note: "Sunset hillside view",
  },
  {
    image: "/images/hero-glass-stairwell.jpg",
    label: "Modern glass stairwell",
    note: "Suburban views",
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isPaused || isHovered || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6500);

    return () => window.clearInterval(interval);
  }, [isPaused, isHovered]);

  function showSlide(direction: -1 | 1) {
    setActiveSlide((current) => (current + direction + slides.length) % slides.length);
  }

  return (
    <section className="hero">
      <div
        className="hero-slides"
        aria-label="Featured glass imagery"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {slides.map((slide, index) => (
          <div
            className={index === activeSlide ? "hero-slide is-active" : "hero-slide"}
            key={slide.image}
            aria-hidden="true"
          >
            <Image
              src={slide.image}
              alt=""
              fill
              priority={index === 0}
              sizes="100vw"
              className="hero-slide-image"
            />
          </div>
        ))}
      </div>
      <div className="hero-shade" aria-hidden="true" />

      <div className="hero-grid wrap">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> Custom glass solutions in Auckland</p>
          <h1>Auckland&apos;s <span>Glass Installation</span> Specialists.</h1>
          <p className="hero-lede">Expert glass installation across Auckland, from frameless showers and glass balustrades to pool fencing and custom glass solutions.</p>
          <div className="hero-actions">
            <Link href="/contact" className="button button-white">Get a Free Quote <ArrowRight size={17} /></Link>
            <Link href="/services" className="text-link">View Our Services <ArrowRight size={15} /></Link>
          </div>
          <div className="hero-note"><span className="note-icon"><Check size={15} /></span><span>Made to measure <i /> Professionally installed</span></div>
        </div>
      </div>

      <div className="hero-bottom wrap">
        <span>JP GLASS · AUCKLAND</span>
        <span className="hero-slide-caption" aria-live="polite">{slides[activeSlide].label} · {slides[activeSlide].note}</span>
        <div className="hero-slider-controls" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <button type="button" className="hero-slider-button" aria-label="Previous hero image" onClick={() => showSlide(-1)}><ArrowLeft size={15} /></button>
          <span className="hero-slide-count">{String(activeSlide + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span>
          <button type="button" className="hero-slider-button" aria-label="Next hero image" onClick={() => showSlide(1)}><ArrowRight size={15} /></button>
          <button
            type="button"
            className="hero-slider-button hero-slider-pause"
            aria-label={isPaused ? "Play hero image slideshow" : "Pause hero image slideshow"}
            onClick={() => setIsPaused((paused) => !paused)}
          >
            {isPaused ? <Play size={13} /> : <Pause size={13} />}
          </button>
        </div>
      </div>
    </section>
  );
}
