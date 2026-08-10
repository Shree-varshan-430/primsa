"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, Diamond } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Spaces", href: "/spaces" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

import { useRef } from "react";

function useMagnetic() {
  const ref = useRef<HTMLElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const moveX = (clientX - centerX) * 0.25;
    const moveY = (clientY - centerY) * 0.25;

    ref.current.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) scale(1.03)`;
    ref.current.style.transition = "transform 0.1s ease-out";
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = `translate3d(0, 0, 0) scale(1)`;
    ref.current.style.transition = "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)";
  };

  return { ref, onMouseMove: handleMouseMove, onMouseLeave: handleMouseLeave };
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const ctaMagnetic = useMagnetic();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Ensure scroll is reset on page navigate, and close mobile menu
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || pathname !== "/"
            ? "bg-ivory/80 backdrop-blur-md shadow-sm border-b border-line/20"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 h-16 md:h-20 flex items-center justify-between">
          {/* Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded group"
            aria-label="Primsa Storiesya  —   Home"
          >
            <span
              className="font-display text-gold text-lg md:text-xl font-semibold tracking-tight transition-transform duration-300 group-hover:scale-105"
            >
              PRIMSA
            </span>
            <Diamond
              size={8}
              className="fill-gold text-gold opacity-80 transition-transform duration-500 group-hover:rotate-45"
              aria-hidden="true"
            />
            <span
              className={`font-display text-lg md:text-xl font-semibold tracking-tight transition-colors transition-transform duration-300 group-hover:scale-105 ${
                scrolled || pathname !== "/" ? "text-ink" : "text-white"
              }`}
            >
              Storiesya
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-display text-sm font-medium transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded px-1 py-1.5 group ${
                    active
                      ? "text-gold font-semibold"
                      : scrolled || pathname !== "/"
                      ? "text-stone"
                      : "text-white/80"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[1.5px] bg-gold origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100 ${
                      active ? "scale-x-100" : ""
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:9157373317"
              className={`flex items-center gap-2 font-display text-sm font-medium transition-colors hover:text-gold ${
                scrolled || pathname !== "/" ? "text-stone" : "text-white/80"
              }`}
              aria-label="Call Primsa Storiesya"
            >
              <Phone size={14} aria-hidden="true" />
              <span>9157373317</span>
            </a>
            <div
              ref={ctaMagnetic.ref as any}
              onMouseMove={ctaMagnetic.onMouseMove}
              onMouseLeave={ctaMagnetic.onMouseLeave}
              className="inline-block"
            >
              <Link
                href="/contact"
                className="bg-primary text-white font-display text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-primary-dark hover:shadow-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 inline-block"
              >
                Book Your Space
              </Link>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden p-2 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
              scrolled || pathname !== "/" ? "text-ink hover:bg-line" : "text-white hover:bg-white/10"
            }`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-label="Navigation menu"
            className="fixed inset-0 z-40 bg-charcoal-navy flex flex-col"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
          >
            <div className="flex-1 flex flex-col justify-center px-10 gap-8">
              {navLinks.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-display text-4xl md:text-5xl text-left hover:text-gold-soft transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded ${
                    isActive(link.href) ? "text-gold font-semibold" : "text-ivory"
                  }`}
                >
                  <motion.span
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.07, duration: 0.4, ease: "easeOut" }}
                    onClick={() => setMenuOpen(false)}
                    className="block"
                  >
                    {link.label}
                  </motion.span>
                </Link>
              ))}
            </div>
            <div className="px-10 pb-12 flex flex-col gap-4">
              <a
                href="tel:9157373317"
                className="flex items-center gap-2 text-ivory font-display text-sm"
              >
                <Phone size={14} />
                9157373317
              </a>
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="bg-primary text-white font-display text-sm font-semibold px-6 py-3 rounded-full self-start hover:bg-primary-dark transition-colors"
              >
                Book Your Space
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
