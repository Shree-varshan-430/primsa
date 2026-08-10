"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Building, Mic, Palette, BookOpen, GraduationCap, Users, Sparkles, MessageSquare, Music } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const iconMap: Record<string, React.ComponentType<any>> = {
  "elite-hall": Building,
  "podcast-studio": Mic,
  "art-studio": Palette,
  "seminars": BookOpen,
  "training": GraduationCap,
  "corporate": Users,
  "sound-healing": Sparkles,
  "talks": MessageSquare,
  "concerts": Music,
};

const spaces = [
  {
    id: "elite-hall",
    title: "Elite Hall",
    description:
      "Designed to host unforgettable celebrations, business gatherings, and cultural events with style and comfort.",
    image: "/images/elite-hall.jpg",
    alt: "Elite Hall interior with chandelier lighting and elegant banquet seating",
  },
  {
    id: "podcast-studio",
    title: "Podcast Studio",
    description:
      "Record high-quality podcasts, interviews, and video content in a purpose-built studio designed for creators, businesses, and professionals.",
    image: "/images/podcast-studio.jpg",
    alt: "Professional podcast studio with acoustic panels and microphone setup",
  },
  {
    id: "art-studio",
    title: "Art Studio",
    description:
      "A vibrant studio where creativity flourishes, perfect for art classes, exhibitions, painting sessions, and cultural workshops.",
    image: "/images/art-studio.jpg",
    alt: "Bright art studio with natural light, easels, and creative supplies",
  },
  {
    id: "seminars",
    title: "Seminars & Workshops",
    description:
      "A modern, flexible venue designed for seminars, workshops, training sessions, and professional development programs, equipped with essential presentation and collaboration facilities.",
    image: "/images/seminar-room.jpg",
    alt: "Professional seminar room with rows of chairs and presentation screen",
  },
  {
    id: "training",
    title: "Training Programs",
    description:
      "A dedicated space designed for impactful training programs, skill development sessions, and learning experiences that inspire growth and collaboration.",
    image: "/images/training-program.jpg",
    alt: "Training workshop with professionals learning around collaborative tables",
  },
  {
    id: "corporate",
    title: "Corporate Events",
    description:
      "A premium space designed for meetings, conferences, workshops, and unforgettable corporate experiences.",
    image: "/images/corporate-event.jpg",
    alt: "Elegant corporate boardroom setup with polished conference table",
  },
  {
    id: "sound-healing",
    title: "Sound Healing Sessions",
    description:
      "A serene space designed for sound healing, meditation, and wellness experiences that restore balance and harmony.",
    image: "/images/sound-healing.jpg",
    alt: "Serene sound healing room with singing bowls and meditation cushions",
  },
  {
    id: "talks",
    title: "Special Talks & Lectures",
    description:
      "A refined space for inspiring talks, meaningful ceremonies, and unforgettable occasions.",
    image: "/images/special-talks.jpg",
    alt: "Special guest talk with speaker on stage and engaged audience",
  },
  {
    id: "concerts",
    title: "Cultural Concerts",
    description:
      "An acoustically refined space for cultural concerts, live performances, and unforgettable artistic experiences.",
    image: "/images/cultural-concert.jpg",
    alt: "Cultural concert with traditional Indian musicians in an elegant venue",
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

function SpaceCard({
  space,
  index,
}: {
  space: (typeof spaces)[number];
  index: number;
}) {
  const IconComponent = iconMap[space.id] || Building;
  const formattedIndex = String(index + 1).padStart(2, "0");

  return (
    <div
      className="space-card-wrapper opacity-0 group flex flex-col cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold bg-white border border-line/30 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(74,27,34,0.06)] hover:-translate-y-1.5 transition-all duration-500 ease-out h-full"
      onClick={() =>
        document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
      }
      role="button"
      tabIndex={0}
      aria-label={`${space.title} — click to check availability`}
      onKeyDown={(e) => {
        if (e.key === "Enter")
          document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      {/* Photo with index badge */}
      <div 
        className="card-image-wrapper relative w-full overflow-hidden" 
        style={{ aspectRatio: "4/3", clipPath: "inset(100% 0% 0% 0%)" }}
      >
        {/* Badge */}
        <div className="absolute top-4 left-4 bg-white/95 border border-gold/20 text-gold text-[10px] tracking-widest font-display py-0.5 px-2 rounded z-10 shadow-sm font-semibold">
          {formattedIndex}
        </div>
        <Image
          src={space.image}
          alt={space.alt}
          fill
          className="card-image object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={index < 3}
        />
      </div>

      {/* Details Box */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Header: Icon + Title */}
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-gold/10 text-gold rounded-full p-2.5 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-gold group-hover:text-white">
            <IconComponent size={18} />
          </div>
          <h3 className="font-display text-2xl text-ink font-semibold group-hover:text-primary transition-colors duration-200">
            {space.title}
          </h3>
        </div>

        {/* Description */}
        <p className="font-sans text-[0.875rem] leading-[1.6] text-stone line-clamp-3 mb-6">
          {space.description}
        </p>

        {/* Action Row */}
        <div className="flex items-center justify-between pt-4 border-t border-line/40 mt-auto">
          <span className="font-sans text-[10px] text-stone/60 tracking-widest font-semibold uppercase">
            KORAMANGALA, BLR
          </span>
          <span className="relative font-display text-[11px] text-gold font-semibold tracking-wider flex items-center gap-1 group-hover:text-gold-soft transition-colors duration-300 uppercase py-0.5">
            CHECK AVAILABILITY ↗
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Offerings() {
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
      const cards = gridRef.current.querySelectorAll(".space-card-wrapper");

      cards.forEach((card) => {
        const imgWrapper = card.querySelector(".card-image-wrapper");
        const img = card.querySelector(".card-image");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 92%",
            toggleActions: "play none none none",
          },
        });

        tl.fromTo(
          card,
          { opacity: 0, y: 70, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
          }
        );

        if (imgWrapper && img) {
          tl.fromTo(
            imgWrapper,
            { clipPath: "inset(100% 0% 0% 0%)" },
            {
              clipPath: "inset(0% 0% 0% 0%)",
              duration: 1.1,
              ease: "power3.out",
            },
            "-=0.75"
          );
          tl.fromTo(
            img,
            { scale: 1.1 },
            {
              scale: 1,
              duration: 1.1,
              ease: "power3.out",
            },
            "-=1.1"
          );
        }
      });
    }
  }, []);

  return (
    <>
      {/* Top hairline */}
      <div className="w-full h-px bg-line" aria-hidden="true" />

      <section
        id="spaces"
        className="bg-warm-white py-24 md:py-28 lg:py-32 overflow-hidden animate-gpu"
        aria-labelledby="spaces-heading"
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          {/* Heading block */}
          <div
            ref={headingRef}
            className="text-center max-w-2xl mx-auto mb-14 md:mb-16"
          >
            <GoldOrnament />
            <h2
              id="spaces-heading"
              className="font-display text-display-lg text-ink mb-4"
            >
              Our <em>Event</em> Spaces
            </h2>
            <p className="font-sans text-stone text-base md:text-[1.0625rem] leading-relaxed text-center">
              From elegant weddings and corporate meetings to cultural performances and private celebrations, explore thoughtfully designed venues tailored to create unforgettable experiences.
            </p>
          </div>

          {/* 3 × 3 uniform grid */}
          <div
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10"
            role="list"
            aria-label="All event spaces at Primsa Storiesya"
          >
            {spaces.map((space, index) => (
              <div key={space.id} role="listitem">
                <SpaceCard space={space} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom hairline */}
      <div className="w-full h-px bg-line" aria-hidden="true" />
    </>
  );
}
