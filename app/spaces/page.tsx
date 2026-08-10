"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Offerings from "@/components/sections/Offerings";
import Amenities from "@/components/sections/Amenities";
import { ArrowRight, Sparkles, Shield, User } from "lucide-react";
import Image from "next/image";

const spaceSpecs = [
  {
    name: "Elite Hall",
    capacity: "Up to 150 guests",
    size: "2,200 sq. ft.",
    description: "Our crown jewel, designed for grand scale gatherings, corporate town halls, product launches, training summits, and acoustic concerts. Features high ceilings, stunning chandelier installations, and flexible modular seating formats.",
    details: ["Professional stage setup & lectern", "Chandelier lighting & ambient presets", "Modular banquets or theater layout", "Dual high-contrast presentation screens"],
    src: "/images/elite-hall.jpg",
  },
  {
    name: "Podcast Studio",
    capacity: "Up to 4 participants",
    size: "350 sq. ft.",
    description: "A fully sound-insulated studio treated for pure acoustic voice capture. Ideal for podcasters, voiceover artists, audio books, and professional interview recordings.",
    details: ["Flawless multi-mic studio setup", "Professional acoustic wall panels", "State-of-the-art interface & monitors", "Direct laptop plug-and-play integrations"],
    src: "/images/podcast-studio.jpg",
  },
  {
    name: "Art Studio",
    capacity: "Up to 30 artists",
    size: "800 sq. ft.",
    description: "Filled with warm, natural daylight, this inspiring art space is optimized for painting workshops, crafting classes, model drawing, and exhibition displays.",
    details: ["Sturdy easel mounts & drawing boards", "Natural north-facing light exposures", "Wash basins & supply utility racks", "Spacious open-floor creative layout"],
    src: "/images/art-studio.jpg",
  },
];

export default function SpacesPage() {
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
          OUR SANCTUARIES
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="font-display text-display-xl text-ink max-w-4xl mx-auto mb-6 [&>em]:text-gold [&>em]:not-italic"
        >
          Versatile spaces built to <em>inspire</em>.
        </motion.h1>
        <div className="section-divider max-w-sm mx-auto my-6" aria-hidden="true">❖</div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-sans text-stone text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Explore our portfolio of premium, modular event spaces in Koramangala, designed with warm aesthetics, high-spec tech, and pristine comfort.
        </motion.p>
      </div>

      {/* Moongate-style Spaces Grid */}
      <Offerings />

      {/* Detailed Spec Showcase Section */}
      <section className="py-20 md:py-28 bg-warm-white border-t border-line">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-display text-display-md text-ink [&>em]:text-gold [&>em]:not-italic">
              Detailed Space <em>Specifications</em>
            </h2>
            <p className="font-sans text-stone text-sm md:text-base mt-3 max-w-xl mx-auto">
              Compare layout capacities, dimensions, and standard amenities for our core space offerings.
            </p>
          </div>

          <div className="space-y-20">
            {spaceSpecs.map((space, idx) => (
              <motion.div
                key={space.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-center ${
                  idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image side */}
                <div className={`relative aspect-4/3 rounded-lg overflow-hidden border border-line shadow-sm lg:col-span-6 ${
                  idx % 2 === 1 ? "lg:order-last" : ""
                }`}>
                  <Image
                    src={space.src}
                    alt={space.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-w-1024px) 100vw, 50vw"
                  />
                </div>

                {/* Details side */}
                <div className="lg:col-span-6 space-y-6">
                  <h3 className="font-display text-3xl md:text-4xl text-ink font-semibold">
                    {space.name}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-xs font-sans text-gold border-y border-line py-3">
                    <span className="flex items-center gap-1.5">
                      <User size={13} />
                      {space.capacity}
                    </span>
                    <span className="text-line">|</span>
                    <span>{space.size}</span>
                  </div>
                  <p className="font-sans text-stone text-sm md:text-base leading-relaxed">
                    {space.description}
                  </p>
                  
                  {/* Bullet points */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {space.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2.5 font-sans text-sm text-ink/80">
                        <Shield size={14} className="text-gold mt-1 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA button */}
                  <div className="pt-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-charcoal-navy text-warm-white font-display text-sm font-semibold px-6 py-3 rounded-full hover:bg-gold hover:text-warm-white transition-all duration-300"
                    >
                      Enquire For {space.name}
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Grid of 6 Premium Amenities */}
      <Amenities />
    </div>
  );
}
