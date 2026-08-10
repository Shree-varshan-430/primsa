"use client";

import { motion } from "framer-motion";
import StatsStrip from "@/components/sections/StatsStrip";
import StatementSection from "@/components/sections/StatementSection";
import { Sparkles, Diamond, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const values = [
  {
    title: "Uncompromising Versatility",
    description: "Every corner of Primsa Storiesya is built to change. From the layout configurations of our Elite Hall to the acoustic panels of our Podcast Studio, we design for adaptive flow.",
  },
  {
    title: "Aesthetic Excellence",
    description: "We believe beautiful environments yield beautiful work. Drawing inspiration from modern high-end architectural design, our spaces utilize soft luxury palettes and premium materials.",
  },
  {
    title: "Seamless Support",
    description: "Our dedicated concierge and on-site technical support ensure you focus entirely on your delivery while we handle setup logistics, AV, lighting, and hospitality.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 md:pt-32 bg-ivory">
      {/* Editorial Title Block */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 text-center mb-16 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 eyebrow text-gold mb-4"
        >
          <Sparkles size={12} />
          OUR STORY
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="font-display text-display-xl text-ink max-w-4xl mx-auto mb-6 [&>em]:text-gold [&>em]:not-italic"
        >
          A space that <em>adapts</em>. An experience that <em>lasts</em>.
        </motion.h1>
        <div className="section-divider max-w-sm mx-auto my-6" aria-hidden="true">❖</div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-sans text-stone text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Primsa Storiesya was founded in Koramangala with a simple vision: to build a premium, multi-functional hub where creators, artists, and teams can gather without creative limits.
        </motion.p>
      </div>

      {/* Stats Counter Strip */}
      <StatsStrip />

      {/* Two-Column Editorial Narrative */}
      <section className="py-20 md:py-28 bg-warm-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Image display */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 relative aspect-4/3 rounded-lg overflow-hidden border border-line shadow-sm"
            >
              <Image
                src="/images/about-space.jpg"
                alt="Primsa Storiesya modern studio interior foyer design"
                fill
                className="object-cover"
                sizes="(max-w-1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-charcoal-navy/10" aria-hidden="true" />
            </motion.div>

            {/* Narrative text copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="lg:col-span-6 space-y-6"
            >
              <h2 className="font-display text-3xl md:text-4xl text-ink font-semibold [&>em]:text-gold [&>em]:not-italic">
                Designed for those who <em>create</em>, <em>teach</em>, and <em>transform</em>.
              </h2>
              <p className="font-sans text-stone text-sm md:text-base leading-relaxed">
                Nestled in the bustling creative heart of Koramangala, Bangalore, Primsa Storiesya bridges the gap between cold corporate boardrooms and unequipped local studio rentals. We offer a curated, premium environment matching the highest international styling standards.
              </p>
              <p className="font-sans text-stone text-sm md:text-base leading-relaxed">
                Whether you are hosting a delicate sound healing meditation session, a high-stakes executive offsite workshop, or an intimate cultural concert with live acoustics, our layouts reconfigure seamlessly to align with your aesthetic and technical needs.
              </p>
              
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gold text-warm-white font-display text-sm font-semibold px-6 py-3 rounded-full hover:bg-gold/90 transition-colors"
                >
                  Plan Your Visit
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 md:py-28 bg-ivory border-t border-line">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <p className="eyebrow text-gold mb-3">OUR CORE VALUES</p>
            <h2 className="font-display text-display-md text-ink">
              The principles behind our <em>aesthetic</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {values.map((val, idx) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="space-y-4 border-l border-gold/30 pl-6"
              >
                <div className="flex items-center gap-2 text-gold font-display text-lg font-bold">
                  <Diamond size={8} className="fill-gold text-gold" />
                  {val.title}
                </div>
                <p className="font-sans text-stone text-sm md:text-base leading-relaxed">
                  {val.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial dark quote statement block */}
      <StatementSection />
    </div>
  );
}
