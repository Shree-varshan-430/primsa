"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const heroContent = [
  {
    src: "/images/elite-hall.jpg",
    alt: "Elite Hall — Chandelier lighting and elegant banquet seating at Primsa Storiesya",
    eyebrow: "PREMIUM EVENT SPACES · KORAMANGALA, BANGALORE",
    h1Words: [
      { text: "Premium", type: "normal" },
      { text: "Spaces.", type: "italic" },
      { text: "break", type: "break" },
      { text: "Unforgettable", type: "normal" },
      { text: "Experiences.", type: "italic" },
    ],
    subhead: "A luxury multi-purpose sanctuary offering bespoke event halls, recording studios, and collaborative spaces in Bangalore.",
  },
  {
    src: "/images/cultural-concert.jpg",
    alt: "Cultural concert performance at Primsa Storiesya stage",
    eyebrow: "CREATIVE STUDIOS & RECORDING · KORAMANGALA",
    h1Words: [
      { text: "Acoustic", type: "normal" },
      { text: "Podcast", type: "normal" },
      { text: "Booths.", type: "italic" },
      { text: "break", type: "break" },
      { text: "And", type: "normal" },
      { text: "Sunlit", type: "normal" },
      { text: "Art", type: "normal" },
      { text: "Studios.", type: "italic" },
    ],
    subhead: "State-of-the-art recording facilities and naturally lit creative studios designed to bring your artistic visions to life.",
  },
  {
    src: "/images/corporate-event.jpg",
    alt: "Corporate boardroom setup at Primsa Storiesya",
    eyebrow: "CORPORATE SUMMITS & WORKSHOPS · BANGALORE",
    h1Words: [
      { text: "Corporate", type: "normal" },
      { text: "Meeting", type: "normal" },
      { text: "Hubs.", type: "italic" },
      { text: "break", type: "break" },
      { text: "Designed", type: "normal" },
      { text: "for", type: "normal" },
      { text: "Team", type: "normal" },
      { text: "Success.", type: "italic" },
    ],
    subhead: "Premium boardrooms, seminar halls, and town hall spaces fully equipped for strategic offsites and corporate training.",
  },
];

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    }
  }
};

const wordRevealVariants = {
  hidden: { y: "110%" },
  visible: {
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as any, // out-expo
    }
  }
};

const fadeUpVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as any,
    }
  }
};

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const cta1 = useMagnetic();
  const cta2 = useMagnetic();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroContent.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!heroRef.current || !bgRef.current) return;

    // Slow zoom & vertical parallax on background image
    const trigger = ScrollTrigger.create({
      trigger: heroRef.current,
      start: "top top",
      end: "bottom top",
      scrub: true,
      animation: gsap.fromTo(
        bgRef.current,
        { scale: 1, yPercent: 0 },
        { scale: 1.12, yPercent: 12, ease: "none" }
      ),
    });

    return () => {
      trigger.kill();
    };
  }, []);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative w-full h-screen min-h-[640px] overflow-hidden"
      aria-label="Hero section — Primsa Storiesya"
    >
      {/* Zooming parallax background wrapper */}
      <div ref={bgRef} className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="sync">
          <motion.div
            key={current}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <Image
              src={heroContent[current].src}
              alt={heroContent[current].alt}
              fill
              priority={current === 0}
              className="object-cover object-center"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dark gradient and solid overlay layers */}
      <div className="absolute inset-0 bg-charcoal-navy/45 z-10" aria-hidden="true" />
      <div
        className="absolute inset-0 z-10 bg-gradient-to-b from-charcoal-navy/75 via-charcoal-navy/20 to-charcoal-navy/85"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-5 md:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="flex flex-col items-center justify-center max-w-5xl"
          >
            {/* Eyebrow */}
            <motion.p
              variants={fadeUpVariants}
              className="eyebrow text-gold-soft mb-6"
              style={{ textShadow: "0 2px 12px rgba(0,0,0,0.6)" }}
            >
              {heroContent[current].eyebrow}
            </motion.p>

            {/* H1 word-by-word reveal */}
            <motion.h1
              className="font-display text-display-lg text-white mb-6 leading-tight flex flex-wrap justify-center gap-x-[0.25em] gap-y-[0.05em]"
              style={{ textShadow: "0 4px 20px rgba(0,0,0,0.65)" }}
            >
              {heroContent[current].h1Words.map((word, idx) => {
                if (word.type === "break") {
                  return <div key={idx} className="w-full h-0" />;
                }
                return (
                  <span key={idx} className="inline-block overflow-hidden py-[0.1em] -my-[0.1em]">
                    <motion.span
                      variants={wordRevealVariants}
                      className="inline-block origin-bottom"
                    >
                      {word.type === "italic" ? <em>{word.text}</em> : word.text}
                    </motion.span>
                  </span>
                );
              })}
            </motion.h1>

            {/* Subhead */}
            <motion.p
              variants={fadeUpVariants}
              className="font-sans text-ivory text-base md:text-lg max-w-2xl leading-relaxed mb-10 text-center"
              style={{ textShadow: "0 2px 14px rgba(0,0,0,0.5)" }}
            >
              {heroContent[current].subhead}
            </motion.p>
          </motion.div>
        </AnimatePresence>

        {/* CTAs (kept static outside active rotation so buttons stay consistently interactive) */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 items-center z-30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <div
            ref={cta1.ref as any}
            onMouseMove={cta1.onMouseMove}
            onMouseLeave={cta1.onMouseLeave}
            className="inline-block"
          >
            <button
              onClick={() => scrollTo("#contact")}
              className="bg-primary text-white font-display font-semibold text-sm md:text-base px-7 py-3.5 rounded-full hover:bg-primary-dark transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent shadow-[0_4px_20px_rgba(122,14,23,0.15)]"
              aria-label="Book your event space at Primsa Storiesya"
            >
              Book Your Space Today
            </button>
          </div>
          <div
            ref={cta2.ref as any}
            onMouseMove={cta2.onMouseMove}
            onMouseLeave={cta2.onMouseLeave}
            className="inline-block"
          >
            <button
              onClick={() => scrollTo("#spaces")}
              className="border border-ivory text-white font-display font-semibold text-sm md:text-base px-7 py-3.5 rounded-full hover:bg-white/10 hover:border-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              aria-label="Explore our event spaces"
            >
              Explore Our Spaces
            </button>
          </div>
        </motion.div>

        {/* Slide Indicators */}
        <motion.div
          className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          aria-hidden="true"
        >
          {heroContent.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === current ? "w-8 bg-gold" : "w-2 bg-white/40"
              }`}
              aria-label={`View hero image ${i + 1}`}
            />
          ))}
        </motion.div>

        {/* Scroll cue */}
        <motion.button
          onClick={() => scrollTo("#stats")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/60 font-sans text-xs tracking-widest uppercase hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded z-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          aria-label="Scroll down"
        >
          <span>Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ChevronDown size={16} aria-hidden="true" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
