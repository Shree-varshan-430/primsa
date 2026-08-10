"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const stats = [
  { value: "9", label: "Space Types" },
  { value: "1", label: "Prime Location" },
  { value: "100%", label: "Flexible Booking" },
];

export default function AboutUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current) return;

    // Gold divider reveal
    if (dividerRef.current) {
      gsap.fromTo(
        dividerRef.current,
        { width: "0%" },
        {
          width: "100%",
          duration: 1.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: dividerRef.current,
            start: "top 90%",
          },
        }
      );
    }

    // Image reveal using clip-path inset unveil
    if (imgRef.current) {
      gsap.fromTo(
        imgRef.current,
        { clipPath: "inset(100% 0% 0% 0%)", scale: 1.1 },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          scale: 1,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imgRef.current,
            start: "top 85%",
          },
        }
      );
    }

    // Heading letters reveal / motion slide-up
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { y: 35, opacity: 0, letterSpacing: "-0.04em" },
        {
          y: 0,
          opacity: 1,
          letterSpacing: "-0.01em",
          duration: 1.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
          },
        }
      );
    }

    // Description text reveal
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 85%",
          },
        }
      );
    }
  }, []);

  return (
    <section
      ref={containerRef}
      id="about"
      className="bg-ivory py-20 md:py-28 lg:py-36 overflow-hidden animate-gpu"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image column with reveal */}
          <div className="w-full relative max-w-[450px] mx-auto">
            <div
              ref={imgRef}
              className="relative overflow-hidden rounded-2xl aspect-[896/1200] w-full group shadow-sm bg-charcoal-navy/5"
              style={{ clipPath: "inset(100% 0% 0% 0%)" }}
            >
              {/* TODO: Replace with actual Primsa Storiesya foyer photo */}
              <Image
                src="/images/about-space.jpg"
                alt="Primsa Storiesya premium event space interior — warm, welcoming entrance area"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Floating accent card */}
            <motion.div
              className="absolute -bottom-6 -right-4 bg-gold text-warm-white rounded-2xl p-5 md:p-6 shadow-gold z-20"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
            >
              <p className="font-accent italic text-2xl md:text-3xl leading-tight">
                "Inspire.<br /> Create.<br />Transform."
              </p>
            </motion.div>
          </div>

          {/* Content column */}
          <div className="space-y-7">
            <div>
              <p className="eyebrow mb-4">WHO WE ARE</p>
              <h2
                ref={headingRef}
                id="about-heading"
                className="font-display text-display-lg text-primary"
              >
                A space designed{" "}
                <em>first</em>. A studio built
                for <em>you</em> second.
              </h2>
              <div
                ref={dividerRef}
                className="h-[1.5px] bg-gold/45 mt-6 origin-left w-0"
                aria-hidden="true"
              />
            </div>

            <div
              ref={textRef}
              className="font-sans text-stone text-base md:text-lg leading-relaxed text-justify"
            >
              <p>
                Primsa Storiesya is a premium multi-purpose sanctuary in Koramangala designed to elevate creative work. Our light-filled entrance lounge transitions you instantly from the busy streets of Bangalore into custom-designed spaces—ranging from the grand Elite Hall to our quiet podcast recording studio and sunlit art studio. Here, every detail of hospitality and logistics is seamlessly managed, allowing you to focus entirely on your vision.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="text-center md:text-left"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                >
                  <p className="font-display text-3xl md:text-4xl text-ink font-bold">
                    {stat.value}
                  </p>
                  <p className="font-sans text-xs text-stone uppercase tracking-wide mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
