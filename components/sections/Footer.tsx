"use client";

import { useEffect, useRef } from "react";
import { Diamond, Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { gsap } from "gsap";
import Logo from "../Logo";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const InstagramIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const spaceLinks = [
  { label: "Elite Hall", href: "/spaces" },
  { label: "Podcast Studio", href: "/spaces" },
  { label: "Art Studio", href: "/spaces" },
  { label: "Seminar Rooms", href: "/spaces" },
  { label: "Corporate Events", href: "/spaces" },
  { label: "Cultural Concerts", href: "/spaces" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (footerRef.current) {
      const columns = footerRef.current.querySelectorAll(".footer-column");
      const bottomBar = footerRef.current.querySelector(".footer-bottom");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 95%",
          toggleActions: "play none none none",
        },
      });

      tl.fromTo(
        columns,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
        }
      );

      if (bottomBar) {
        tl.fromTo(
          bottomBar,
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4"
        );
      }
    }
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-charcoal-navy border-t border-white/10 overflow-hidden animate-gpu"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12">
          {/* Brand column */}
          <div className="footer-column lg:col-span-1 space-y-4 opacity-0">
            <Logo noBg={true} />
            <p className="font-sans text-ivory/70 text-sm leading-relaxed">
              Premium, versatile event spaces in the heart of Koramangala,
              Bangalore. For creators, organisations, and everyone in between.
            </p>
            <p className="font-display italic text-gold-soft text-lg">
              Inspire. Create. Transform.
            </p>
            {/* Social */}
            <div className="flex gap-3 pt-1">
              <a
                href="https://instagram.com/primsastoriesya"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-white/15 text-ivory/60 hover:border-gold/50 hover:text-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                aria-label="Primsa Storiesya on Instagram"
              >
                <InstagramIcon size={16} />
              </a>
            </div>
          </div>

          {/* Spaces links */}
          <div className="footer-column opacity-0">
            <h3 className="font-display text-xs text-gold-soft uppercase tracking-widest mb-5 font-semibold">
              Spaces
            </h3>
            <ul className="space-y-3">
              {spaceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-ivory/70 hover:text-gold-soft transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div className="footer-column opacity-0">
            <h3 className="font-display text-xs text-gold-soft uppercase tracking-widest mb-5 font-semibold">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-ivory/70 hover:text-gold-soft transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-column opacity-0">
            <h3 className="font-display text-xs text-gold-soft uppercase tracking-widest mb-5 font-semibold">
              Contact
            </h3>
            <div className="space-y-4">
              <a
                href="tel:9157373317"
                className="flex items-center gap-2.5 font-sans text-sm text-ivory/70 hover:text-gold-soft transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
                aria-label="Call us at 9157373317"
              >
                <Phone size={14} className="text-gold flex-shrink-0" aria-hidden="true" />
                <span>+91 91573 73317</span>
              </a>
              <a
                href="mailto:primsastoriesya@gmail.com"
                className="flex items-center gap-2.5 font-sans text-sm text-ivory/70 hover:text-gold-soft transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded break-all"
                aria-label="Email us at primsastoriesya@gmail.com"
              >
                <Mail size={14} className="text-gold flex-shrink-0" aria-hidden="true" />
                <span>primsastoriesya@gmail.com</span>
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="text-gold mt-1 flex-shrink-0" aria-hidden="true" />
                <address className="font-sans text-sm text-ivory/70 not-italic leading-relaxed">
                  Koramangala,<br />
                  Bangalore – 560034,<br />
                  Karnataka, India
                </address>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-6" aria-hidden="true" />

        {/* Bottom bar */}
        <div className="footer-bottom opacity-0 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs text-ivory/50">
            &copy; 2026 Primsa Storiesya. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="font-sans text-xs text-ivory/50 hover:text-ivory/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="font-sans text-xs text-ivory/50 hover:text-ivory/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
