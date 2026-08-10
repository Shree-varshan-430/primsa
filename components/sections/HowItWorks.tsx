"use client";

import { motion } from "framer-motion";
import { Lightbulb, LayoutPanelLeft, Settings2, Star } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Tell Us Your Vision",
    description:
      "Share your event type, preferred date, expected headcount, and any specific requirements. No commitment needed  —  just a conversation.",
  },
  {
    number: "02",
    icon: LayoutPanelLeft,
    title: "Choose Your Space",
    description:
      "We'll recommend the right hall, studio, or setup for your event  —  or walk you through the options if you'd like to choose for yourself.",
  },
  {
    number: "03",
    icon: Settings2,
    title: "Confirm & Customise",
    description:
      "Lock in your layout, AV requirements, seating arrangement, and any catering or décor add-ons. We confirm the booking within 24 hours.",
  },
  {
    number: "04",
    icon: Star,
    title: "Host Your Event",
    description:
      "Walk in on the day. We handle the space  —  setup, AV check, and on-site coordination  —  so you can focus entirely on your audience.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-ivory py-20 md:py-28 lg:py-36"
      aria-labelledby="how-it-works-heading"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        {/* Section header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow mb-4 text-center">HOW WE WORK</p>
          <h2
            id="how-it-works-heading"
            className="font-display text-display-lg text-primary"
          >
            Four steps to your{" "}
            <em>next</em> event.
          </h2>
        </motion.div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="relative group"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: "easeOut" }}
            >
              {/* Connector line (desktop only) */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-8 left-full w-full h-px bg-line z-0"
                  style={{ width: "calc(100% - 4rem)" }}
                  aria-hidden="true"
                />
              )}

              <div className="relative z-10 bg-warm-white border border-line rounded-2xl p-7 md:p-8 h-full hover:border-gold/30 hover:shadow-card transition-all duration-300">
                {/* Large faint number */}
                <div
                  className="font-display text-7xl md:text-8xl font-bold text-gold/10 leading-none mb-4 select-none"
                  aria-hidden="true"
                >
                  {step.number}
                </div>

                {/* Icon */}
                <div className="p-2.5 rounded-xl bg-gold/10 text-gold w-fit mb-5">
                  <step.icon size={22} aria-hidden="true" />
                </div>

                <h3
                  className="font-display text-xl text-ink mb-3"
                >
                  {step.title}
                </h3>
                <p className="font-sans text-stone text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <button
            onClick={() =>
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-gold text-warm-white font-display font-semibold px-8 py-4 rounded-full text-sm md:text-base hover:bg-gold/90 hover:shadow-gold hover:shadow-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
            aria-label="Start your booking process"
          >
            Start the Conversation →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
