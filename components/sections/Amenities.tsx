"use client";

import { useEffect, useRef } from "react";
import { Wifi, Video, Grid, Sliders, Coffee, Wind } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const amenities = [
  {
    icon: Wifi,
    title: "High-Speed Fiber Internet",
    description:
      "Seamless, high-speed connectivity to support presentations, live streaming, virtual meetings, and every digital event requirement.",
  },
  {
    icon: Video,
    title: "Professional AV & Visuals",
    description:
      "State-of-the-art sound, lighting, and visual solutions designed to create engaging and memorable event experiences.",
  },
  {
    icon: Grid,
    title: "Flexible Seating Configurations",
    description:
      "Customizable seating layouts designed to accommodate every event style, from corporate gatherings to cultural performances and celebrations.",
  },
  {
    icon: Sliders,
    title: "Dedicated Sound Systems & Acoustics",
    description:
      "Professionally designed acoustics and advanced sound systems delivering exceptional audio clarity for performances, conferences, and memorable events.",
  },
  {
    icon: Coffee,
    title: "Hospitality & Dining Area",
    description:
      "Elegant dining spaces and exceptional hospitality designed to provide comfort, convenience, and a memorable experience for every guest.",
  },
  {
    icon: Wind,
    title: "Climate Controlled Comfort",
    description:
      "Fully air-conditioned spaces with advanced ventilation systems, maintaining a fresh and comfortable atmosphere for your guests all day.",
  },
];

function GoldOrnament() {
  return (
    <div className="flex items-center justify-center gap-0 mb-6" aria-hidden="true">
      <svg width="64" height="12" viewBox="0 0 64 12" fill="none">
        <line x1="0" y1="6" x2="26" y2="6" stroke="#B7902F" strokeWidth="1" />
        <rect
          x="29"
          y="3"
          width="6"
          height="6"
          transform="rotate(45 32 6)"
          fill="#B7902F"
          opacity="0.85"
        />
        <line x1="38" y1="6" x2="64" y2="6" stroke="#B7902F" strokeWidth="1" />
      </svg>
    </div>
  );
}

export default function Amenities() {
  const gridRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
          },
        }
      );
    }

    if (gridRef.current) {
      const cards = gridRef.current.querySelectorAll(".amenity-card");

      cards.forEach((card) => {
        const iconWrapper = card.querySelector(".amenity-icon-wrapper");
        const title = card.querySelector(".amenity-title");
        const desc = card.querySelector(".amenity-desc");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 92%",
            toggleActions: "play none none none",
          },
        });

        // Stagger reveal of card wrapper, icon circle, title, then description
        tl.fromTo(
          card,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          }
        );

        if (iconWrapper) {
          tl.fromTo(
            iconWrapper,
            { scale: 0, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.6,
              ease: "back.out(1.7)",
            },
            "-=0.5"
          );
        }

        if (title) {
          tl.fromTo(
            title,
            { y: 10, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
              ease: "power3.out",
            },
            "-=0.4"
          );
        }

        if (desc) {
          tl.fromTo(
            desc,
            { y: 10, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
              ease: "power3.out",
            },
            "-=0.4"
          );
        }
      });
    }
  }, []);

  return (
    <>
      <section
        id="amenities"
        className="bg-ivory py-20 md:py-28 overflow-hidden animate-gpu"
        aria-labelledby="amenities-heading"
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          {/* Header block */}
          <div
            ref={headingRef}
            className="text-center max-w-2xl mx-auto mb-14 md:mb-16"
          >
            <GoldOrnament />
            <h2
              id="amenities-heading"
              className="font-display text-display-lg text-ink mb-4"
            >
              Premium <em>Amenities</em>
            </h2>
            <p className="font-sans text-stone text-base md:text-[1.0625rem] leading-relaxed text-center">
             Modern facilities, advanced technology, and thoughtful services designed to create exceptional event experiences.
            </p>
          </div>

          {/* Grid of amenities */}
          <div
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            role="list"
            aria-label="Venue amenities"
          >
            {amenities.map((amenity) => (
              <div
                key={amenity.title}
                role="listitem"
                className="amenity-card opacity-0 bg-warm-white border border-line rounded-xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(74,27,34,0.06)] hover:-translate-y-1.5 hover:border-gold/30 transition-all duration-500 ease-out group"
              >
                {/* Icon wrapper */}
                <div className="amenity-icon-wrapper p-3 rounded-xl bg-gold/10 text-gold w-fit mb-5 transition-colors duration-300 group-hover:bg-gold group-hover:text-white">
                  <amenity.icon size={22} aria-hidden="true" />
                </div>

                <h3 className="amenity-title font-display text-xl text-ink mb-3">
                  {amenity.title}
                </h3>
                <p className="amenity-desc font-sans text-stone text-sm leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hairline separator */}
      <div className="w-full h-px bg-line" aria-hidden="true" />
    </>
  );
}
