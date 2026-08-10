"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const categories = ["All", "Halls", "Studios", "Events"];

const galleryItems = [
  {
    src: "/images/elite-hall.jpg",
    alt: "Elite Hall interior with chandelier and elegant banquet seating",
    caption: "Elite Hall · Corporate Gala",
    span: "col-span-2 row-span-2",
    category: "Halls",
  },
  {
    src: "/images/podcast-studio.jpg",
    alt: "Professional podcast studio with microphones and acoustic treatment",
    caption: "Podcast Studio · Recording Session",
    span: "",
    category: "Studios",
  },
  {
    src: "/images/art-studio.jpg",
    alt: "Bright art studio with natural light, easels and paint supplies",
    caption: "Art Studio · Open Creative Session",
    span: "",
    category: "Studios",
  },
  {
    src: "/images/seminar-room.jpg",
    alt: "Professional seminar room with rows of chairs and presentation screen",
    caption: "Elite Hall · Seminar Setup",
    span: "",
    category: "Events",
  },
  {
    src: "/images/training-program.jpg",
    alt: "Training program with professionals learning in a modern space",
    caption: "Training Studio · Intensive Workshop",
    span: "",
    category: "Events",
  },
  {
    src: "/images/corporate-event.jpg",
    alt: "Elegant corporate boardroom event with polished table and executive setup",
    caption: "Elite Hall · Corporate Summit",
    span: "col-span-2",
    category: "Events",
  },
  {
    src: "/images/sound-healing.jpg",
    alt: "Serene sound healing room with singing bowls and meditation cushions",
    caption: "Studio · Sound Healing Circle",
    span: "",
    category: "Events",
  },
  {
    src: "/images/special-talks.jpg",
    alt: "Special talk event with speaker on stage and engaged audience",
    caption: "Elite Hall · Special Lecture Series",
    span: "",
    category: "Events",
  },
  {
    src: "/images/cultural-concert.jpg",
    alt: "Cultural concert with traditional Indian musicians in an elegant hall",
    caption: "Elite Hall · Cultural Evening",
    span: "col-span-2",
    category: "Events",
  },
];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const filteredItems = filter === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === filter);

  const navigate = (dir: 1 | -1) => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      (lightboxIndex + dir + filteredItems.length) % filteredItems.length
    );
  };

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
  }, []);

  // Set parallax triggers on layout renders
  useEffect(() => {
    if (gridRef.current) {
      const cards = gridRef.current.querySelectorAll(".gallery-card");

      cards.forEach((card, idx) => {
        const img = card.querySelector(".gallery-image");

        // Staggered card fade-in
        gsap.fromTo(
          card,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 95%",
              toggleActions: "play none none none",
            },
          }
        );

        // Slow parallax scroll effect
        if (img) {
          const travelDistance = 6 + (idx % 3) * 5; // 6%, 11%, 16% translation ranges
          
          gsap.fromTo(
            img,
            { yPercent: -travelDistance },
            {
              yPercent: travelDistance,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        }
      });
    }
  }, [filter]); // run whenever filters change to re-attach triggers to matches

  return (
    <section
      id="gallery"
      className="bg-warm-white py-20 md:py-28 lg:py-36 overflow-hidden animate-gpu"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        {/* Section header */}
        <div
          ref={headingRef}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <p className="eyebrow mb-4 text-center">OUR SPACES</p>
          <h2
            id="gallery-heading"
            className="font-display text-display-lg text-primary text-center"
          >
            Spaces in <em>action</em>.
          </h2>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center flex-wrap gap-2.5 md:gap-3.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat);
                setTimeout(() => ScrollTrigger.refresh(), 100);
              }}
              className={`font-display text-xs md:text-sm font-semibold px-5 py-2.5 rounded-full border transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                filter === cat
                  ? "bg-gold text-white border-gold shadow-md"
                  : "border-line text-stone hover:border-gold/50 hover:text-gold bg-transparent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-style grid */}
        <div
          ref={gridRef}
          key={filter} // Forces clean DOM layout updates when filtering
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[220px]"
        >
          {filteredItems.map((item, index) => (
            <div
              key={item.src}
              className={`gallery-card opacity-0 relative overflow-hidden rounded-xl group cursor-pointer ${item.span}`}
              onClick={() => openLightbox(index)}
              role="button"
              tabIndex={0}
              aria-label={`View ${item.caption} in full screen`}
              onKeyDown={(e) => e.key === "Enter" && openLightbox(index)}
            >
              <div className="absolute inset-0 w-full h-full scale-[1.25]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="gallery-image object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  priority={index < 4}
                />
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-charcoal-navy/0 group-hover:bg-charcoal-navy/50 transition-colors duration-300 flex flex-col justify-end p-4 md:p-5">
                <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <ZoomIn size={20} className="text-white/70 mb-2" aria-hidden="true" />
                  <p className="font-sans text-xs text-white/90 font-medium">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[100] bg-ink/95 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label={`Lightbox: ${filteredItems[lightboxIndex].caption}`}
          >
            <motion.div
              className="relative max-w-5xl max-h-[85vh] w-full"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
                <Image
                  src={filteredItems[lightboxIndex].src}
                  alt={filteredItems[lightboxIndex].alt}
                  fill
                  className="object-contain rounded-lg"
                  sizes="90vw"
                  priority
                />
              </div>

              {/* Caption */}
              <p className="font-sans text-white/90 text-sm text-center mt-4">
                {filteredItems[lightboxIndex].caption}
              </p>

              {/* Close */}
              <button
                onClick={closeLightbox}
                className="absolute -top-4 -right-4 bg-warm-white rounded-full p-2 shadow-lg hover:bg-gold hover:text-warm-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                aria-label="Close lightbox"
              >
                <X size={18} />
              </button>

              <button
                onClick={() => navigate(-1)}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-warm-white/90 rounded-full p-3 shadow-md hover:bg-gold hover:text-warm-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                aria-label="Previous image"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => navigate(1)}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-warm-white/90 rounded-full p-3 shadow-md hover:bg-gold hover:text-warm-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                aria-label="Next image"
              >
                <ChevronRight size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
