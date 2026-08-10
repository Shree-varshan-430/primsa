"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

// Real client-type badges
const clientBadges = [
  "Creative Studios",
  "Wellness Circles",
  "Startup Teams",
  "Cultural Organisations",
  "Training Academies",
  "Recording Artists",
  "Corporate Retreats",
  "Community Groups",
];

const duplicatedBadges = [...clientBadges, ...clientBadges];

const testimonials = [
  {
    name: "Arundhati Rao",
    role: "Classical Vocalist",
    organisation: "Hindustani Music Collective",
    rating: 5,
    quote: "The acoustics in the Elite Hall are magical. The resonance and stage presence match world-class concert halls. Our audience was spellbound.",
    initials: "AR",
    bgGradient: "from-gold/30 to-gold-soft/10",
  },
  {
    name: "Vikram Aditya",
    role: "Host & Producer",
    organisation: "The Indie Podcast",
    rating: 5,
    quote: "A fully treated setup with flawless microphone rigs and studio monitors. We just plugged in our laptops and hit record. Hands down the best studio in Koramangala.",
    initials: "VA",
    bgGradient: "from-charcoal-navy/40 to-gold/20",
  },
  {
    name: "Meera Nair",
    role: "Fine Art Educator",
    organisation: "Art & Soul Studio",
    rating: 5,
    quote: "Naturally lit, wide open, and stocked with sturdy easel supports. Our weekend oil painting workshop felt like home. The space naturally inspires creativity.",
    initials: "MN",
    bgGradient: "from-terracotta/20 to-gold/20",
  },
  {
    name: "Siddharth Mehta",
    role: "HR Director",
    organisation: "Apex Tech Labs",
    rating: 5,
    quote: "Excellent modular seating configurations and reliable projector setups. Our leadership training program went off without a single technical hitch.",
    initials: "SM",
    bgGradient: "from-stone/30 to-gold/15",
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 150 : -150,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 150 : -150,
    opacity: 0,
  }),
};

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [current]);

  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      className="bg-charcoal-navy py-20 md:py-28 overflow-hidden border-t border-white/5"
      aria-label="Client trust and testimonials"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 mb-12 text-center">
        <motion.p
          className="eyebrow text-gold-soft mb-3"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          TRUSTED BY
        </motion.p>
        <motion.h2
          className="font-display text-display-md text-ivory"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          Creators & organisations across <em>Bangalore</em>.
        </motion.h2>
      </div>

      {/* Marquee badges strip */}
      <div
        className="overflow-hidden mb-16"
        aria-label="Client types marquee"
        role="marquee"
      >
        <div className="marquee-track-slow gap-4 py-3">
          {duplicatedBadges.map((badge, i) => (
            <span
              key={`${badge}-${i}`}
              className="flex-shrink-0 font-sans text-sm text-gold-soft/80 border border-gold/15 rounded-full px-5 py-2.5 mx-2 whitespace-nowrap"
              aria-hidden={i >= clientBadges.length}
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* Testimonials moving carousel */}
      <div className="relative max-w-4xl mx-auto px-5 md:px-12 flex flex-col items-center">
        
        {/* Navigation arrows (desktop only) */}
        <button
          onClick={handlePrev}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full border border-white/10 text-ivory/60 hover:text-gold hover:border-gold/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold z-10"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={handleNext}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full border border-white/10 text-ivory/60 hover:text-gold hover:border-gold/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold z-10"
          aria-label="Next testimonial"
        >
          <ChevronRight size={20} />
        </button>

        {/* Carousel slide container */}
        <div className="w-full min-h-[300px] flex items-center justify-center relative overflow-hidden px-2 md:px-12">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              className="w-full flex flex-col items-center text-center"
            >
              {/* Profile image / Avatar container */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-tr ${testimonials[current].bgGradient} border border-gold/30 flex items-center justify-center text-gold font-display text-xl font-bold tracking-wider shadow-lg`}
                  aria-hidden="true"
                >
                  {testimonials[current].initials}
                </div>
                <div className="text-left">
                  <p className="font-display font-semibold text-ivory text-lg leading-tight mb-0 text-left">
                    {testimonials[current].name}
                  </p>
                  <p className="font-sans text-xs text-stone mt-0 mb-0 text-left">
                    {testimonials[current].role}  ·  <span className="text-gold-soft/80 font-medium">{testimonials[current].organisation}</span>
                  </p>
                </div>
              </div>

              {/* Star Ratings */}
              <div className="flex justify-center gap-1 mb-5" aria-label="5 star rating">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-gold text-gold" />
                ))}
              </div>

              {/* Quote text */}
              <blockquote className="relative max-w-2xl">
                <span
                  className="font-display text-5xl text-gold/15 absolute -top-4 -left-6 leading-none select-none"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <p className="font-accent italic text-xl md:text-2xl text-ivory/90 leading-relaxed mb-0">
                  {testimonials[current].quote}
                </p>
                <span
                  className="font-display text-5xl text-gold/15 absolute -bottom-8 -right-6 leading-none select-none"
                  aria-hidden="true"
                >
                  &rdquo;
                </span>
              </blockquote>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicator dots */}
        <div className="flex gap-2.5 mt-8 z-10" aria-label="Carousel navigation dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "w-8 bg-gold" : "w-2 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
