"use client";

import { motion } from "framer-motion";
import {
  Video,
  Palette,
  HeartPulse,
  Building2,
  Mic,
  Lightbulb,
  BookOpen,
  Music2,
  Users2,
} from "lucide-react";

const audiences = [
  { icon: Mic, label: "Podcasters & Creators" },
  { icon: BookOpen, label: "Trainers & Educators" },
  { icon: Palette, label: "Artists & Makers" },
  { icon: HeartPulse, label: "Wellness Practitioners" },
  { icon: Building2, label: "Corporates & Teams" },
  { icon: Music2, label: "Musicians & Performers" },
  { icon: Lightbulb, label: "Thought Leaders" },
  { icon: Video, label: "Filmmakers & Shooters" },
  { icon: Users2, label: "Communities & Groups" },
];

// Duplicate for seamless loop
const marqueeItems = [...audiences, ...audiences];

export default function PerfectFor() {
  return (
    <section
      id="perfect-for"
      className="bg-warm-white py-20 md:py-28"
      aria-labelledby="perfect-for-heading"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        {/* Section header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow mb-4 text-center">WHO WE SERVE</p>
          <h2
            id="perfect-for-heading"
            className="font-display text-display-lg text-ink mb-5 text-center"
          >
            Built for{" "}
            <em>creators</em>,<br className="block" /> Made for{" "}
            <em>community</em>.
          </h2>
          <p className="font-sans text-center text-stone text-base md:text-lg leading-relaxed">
            Our spaces are designed to flex around your vision  — whether you&apos;re
            recording your first podcast, hosting a 200-person cultural evening,
            or running a quiet painting session for twelve.
          </p>
        </motion.div>

        {/* Marquee strip */}
        <div
          className="overflow-hidden -mx-5 md:-mx-8 px-0"
          aria-label="Who our spaces are perfect for"
          role="marquee"
        >
          <div className="marquee-track gap-4 py-4">
            {marqueeItems.map((item, i) => (
              <div
                key={`${item.label}-${i}`}
                className="flex-shrink-0 flex items-center gap-3 bg-warm-white border border-line rounded-full px-5 py-3 mx-2 hover:border-gold/50 hover:bg-gold/5 transition-colors cursor-default"
              >
                <div className="text-gold">
                  <item.icon size={16} aria-hidden="true" />
                </div>
                <span className="font-display text-sm font-semibold text-ink whitespace-nowrap">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
          {[
            {
              title: "Adaptable Layouts",
              description:
                "Theatre, banquet, boardroom, or open-floor  —  every space reconfigures to suit your event format without hidden charges.",
            },
            {
              title: "Professional Infrastructure",
              description:
                "AV systems, podcast gear, art supplies, meditation props  —  the right equipment is already in the room.",
            },
            {
              title: "Zero Friction Booking",
              description:
                "A quick enquiry, a brief chat, a confirmed date. We keep the process simple so you can focus on the event.",
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              className="bg-warm-white border border-line rounded-2xl p-7 hover:border-gold/30 hover:shadow-card-hover transition-all duration-300 group"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -4 }}
            >
              <div className="w-8 h-0.5 bg-gold mb-5 transition-all duration-300 group-hover:w-12" aria-hidden="true" />
              <h3 className="font-display text-xl text-ink mb-3">
                {card.title}
              </h3>
              <p className="font-sans text-stone text-sm leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
