"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";

const serviceLinks = [
  { href: "/services/glass-balustrades", label: "Glass Balustrades" },
  { href: "/services/pool-fencing", label: "Pool Fence Glass" },
  { href: "/services/shower-boxes", label: "Shower Boxes" },
  { href: "/services/custom-stairs-glass", label: "Custom Stairs Glass" },
  { href: "/services/handrails", label: "Handrails" },
];

const pageLinks = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const desktopServicesRef = useRef<HTMLButtonElement>(null);
  const mobileServicesRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!servicesOpen) return;

    function closeOnOutsideClick(event: PointerEvent) {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) {
        setServicesOpen(false);
      }
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setServicesOpen(false);
      if (window.matchMedia("(max-width: 760px)").matches) {
        mobileServicesRef.current?.focus();
      } else {
        desktopServicesRef.current?.focus();
      }
    }

    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [servicesOpen]);

  function closeMenus() {
    setServicesOpen(false);
    setOpen(false);
  }

  function toggleMobileMenu() {
    setOpen((isOpen) => !isOpen);
    setServicesOpen(false);
  }

  return (
    <header className="site-header" ref={headerRef}>
      <nav className="nav-shell" aria-label="Main navigation">
        <Link href="/" className="brand" aria-label="JP Glass Balustrades home">
          <Image
            className="brand-logo"
            src="/images/jp-glass-logo.png"
            alt="JP Glass Balustrades"
            width={2172}
            height={724}
            priority
          />
        </Link>

        <div className="desktop-nav">
          <Link href="/">Home</Link>
          <div className="nav-services-dropdown">
            <button
              className="nav-services-trigger"
              type="button"
              aria-expanded={servicesOpen}
              aria-controls="desktop-services-menu"
              ref={desktopServicesRef}
              onClick={() => setServicesOpen((isOpen) => !isOpen)}
            >
              Services <ChevronDown size={14} aria-hidden="true" />
            </button>
            <div
              className="nav-services-menu"
              id="desktop-services-menu"
              hidden={!servicesOpen}
            >
              <Link href="/services" className="nav-services-overview" onClick={closeMenus}>
                All services
              </Link>
              {serviceLinks.map((link) => (
                <Link href={link.href} key={link.href} onClick={closeMenus}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          {pageLinks.slice(1).map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>

        <Link href="/contact" className="button button-primary nav-cta">
          Get a quote <ArrowUpRight size={16} />
        </Link>
        <button
          className="menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          ref={menuToggleRef}
          onClick={toggleMobileMenu}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="mobile-nav" id="mobile-navigation">
          <Link href="/" onClick={closeMenus}>Home</Link>
          <div className="mobile-services-dropdown">
            <button
              className="mobile-services-trigger"
              type="button"
              aria-expanded={servicesOpen}
              aria-controls="mobile-services-menu"
              ref={mobileServicesRef}
              onClick={() => setServicesOpen((isOpen) => !isOpen)}
            >
              Services <ChevronDown size={16} aria-hidden="true" />
            </button>
            <div
              className="mobile-services-menu"
              id="mobile-services-menu"
              hidden={!servicesOpen}
            >
              <Link href="/services" className="mobile-services-overview" onClick={closeMenus}>
                All services
              </Link>
              {serviceLinks.map((link) => (
                <Link href={link.href} key={link.href} onClick={closeMenus}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          {pageLinks.slice(1).map((link) => (
            <Link key={link.href} href={link.href} onClick={closeMenus}>
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="button button-primary" onClick={closeMenus}>
            Get a quote <ArrowUpRight size={16} />
          </Link>
        </div>
      )}
    </header>
  );
}
