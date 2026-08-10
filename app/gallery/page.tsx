"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import Image from "next/image";

const categories = ["All", "Halls", "Studios", "Events"];

const galleryImages = [
  {
    src: "/images/elite-hall.jpg",
    alt: "Elite Hall  —  Grand chandelier and banquet layout",
    category: "Halls",
  },
  {
    src: "/images/podcast-studio.jpg",
    alt: "Podcast Studio  —  Acoustic recording booth with pro mics",
    category: "Studios",
  },
  {
    src: "/images/art-studio.jpg",
    alt: "Art Studio  —  Natural daylit painting panels",
    category: "Studios",
  },
  {
    src: "/images/seminar-room.jpg",
    alt: "Seminar Room  —  Academic setup with presentation boards",
    category: "Events",
  },
  {
    src: "/images/sound-healing.jpg",
    alt: "Sound Healing  —  Calm candle-lit meditation circle",
    category: "Events",
  },
  {
    src: "/images/cultural-concert.jpg",
    alt: "Cultural Concert  —  Traditional musical performance stage",
    category: "Events",
  },
  {
    src: "/images/corporate-event.jpg",
    alt: "Corporate Event  —  Boardroom offsite seating arrangement",
    category: "Events",
  },
  {
    src: "/images/special-talks.jpg",
    alt: "Special Talks  —  TED-style presentation podium",
    category: "Events",
  },
  {
    src: "/images/training-program.jpg",
    alt: "Training Program  —  Team collaboration workshop setting",
    category: "Events",
  },
  {
    src: "/images/about-space.jpg",
    alt: "Welcoming Entrance Foyer  —  Premium design details",
    category: "Halls",
  },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const filteredImages = filter === "All"
    ? galleryImages
    : galleryImages.filter((img) => img.category === filter);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIdx !== null) {
      setLightboxIdx((lightboxIdx + 1) % filteredImages.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIdx !== null) {
      setLightboxIdx((lightboxIdx - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <div className="pt-24 md:pt-32 bg-ivory min-h-screen">
      {/* Editorial Title Block */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 text-center mb-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 eyebrow text-gold mb-4"
        >
          <Sparkles size={12} />
          MEDIA JOURNAL
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="font-display text-display-xl text-primary max-w-4xl mx-auto mb-6"
        >
          Spaces in <em>action</em>.
        </motion.h1>
        <div className="section-divider max-w-sm mx-auto my-6" aria-hidden="true">❖</div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-sans text-stone text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Take a visual tour through our versatile studios, modular event layouts, and clean creative corners in Koramangala.
        </motion.p>
      </div>

      {/* Category Filters */}
      <div className="flex justify-center gap-3 md:gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`font-display text-xs md:text-sm font-semibold px-5 py-2.5 rounded-full border transition-all duration-300 ${
              filter === cat
                ? "bg-gold text-white border-gold shadow-md"
                : "border-line text-stone hover:border-gold/50 hover:text-gold"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry-Style Responsive Grid */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 pb-24">
        <motion.div 
          layout
          className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6"
        >
          {filteredImages.map((img, idx) => (
            <motion.div
              layout
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onClick={() => setLightboxIdx(idx)}
              className="relative rounded-lg overflow-hidden border border-line shadow-sm cursor-pointer group break-inside-avoid"
            >
              <div className="relative w-full aspect-4/3 sm:aspect-auto">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={450}
                  className="object-cover w-full h-auto group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-w-768px) 100vw, (max-w-1024px) 50vw, 33vw"
                />
              </div>

              {/* Hover overlay with maximize icon */}
              <div className="absolute inset-0 bg-charcoal-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 z-10">
                <div className="self-end p-2 bg-warm-white/10 rounded-full text-warm-white backdrop-blur-sm">
                  <Maximize2 size={16} />
                </div>
                <div className="text-left">
                  <p className="font-sans font-semibold text-warm-white text-sm">
                    {img.alt.split("  —  ")[0]}
                  </p>
                  <p className="font-sans text-xs text-gold-soft mt-0.5">
                    {img.category}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Lightbox Portal */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIdx(null)}
            className="fixed inset-0 bg-charcoal-navy/95 z-50 flex items-center justify-center p-4 md:p-10 select-none"
          >
            {/* Close */}
            <button
              onClick={() => setLightboxIdx(null)}
              className="absolute top-6 right-6 p-2 text-ivory/60 hover:text-white transition-colors focus-visible:outline-none z-10"
              aria-label="Close Lightbox"
            >
              <X size={28} />
            </button>

            {/* Left Nav */}
            <button
              onClick={handlePrev}
              className="absolute left-4 p-3 rounded-full border border-white/10 text-ivory/60 hover:text-white hover:border-white/30 transition-colors z-10 focus-visible:outline-none"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Image display */}
            <div className="relative max-w-5xl max-h-[80vh] w-full h-full flex items-center justify-center">
              <motion.div
                key={lightboxIdx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full flex flex-col items-center justify-center"
              >
                <div className="relative w-full h-[70vh]">
                  <Image
                    src={filteredImages[lightboxIdx].src}
                    alt={filteredImages[lightboxIdx].alt}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                  />
                </div>
                {/* Caption */}
                <p className="font-display italic text-lg text-ivory/90 text-center mt-4 max-w-xl">
                  {filteredImages[lightboxIdx].alt}
                </p>
              </motion.div>
            </div>

            {/* Right Nav */}
            <button
              onClick={handleNext}
              className="absolute right-4 p-3 rounded-full border border-white/10 text-ivory/60 hover:text-white hover:border-white/30 transition-colors z-10 focus-visible:outline-none"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
