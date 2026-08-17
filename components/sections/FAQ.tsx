"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What kind of events can I host at Primsa Storiesya?",
    answer:
      "Almost anything. We regularly host corporate meetings and retreats, seminars and training programs, podcast recordings, art workshops, sound healing sessions, cultural concerts, special talks, and private celebrations. If you're not sure whether your event fits, just call us — we'll figure it out together.",
  },
  {
    question: "Where exactly are you located?",
    answer:
      "We're in the heart of Koramangala, Bangalore – 560034, Karnataka. Koramangala is well-connected by auto, cab, and metro, making it easy for your guests to reach from any part of the city. Exact directions and parking info are shared upon booking confirmation.",
  },
  {
    question: "Can I rent the Podcast Studio or Art Studio by the hour?",
    answer:
      "Yes, both the Podcast Studio and Art Studio are available for hourly bookings, subject to availability. The Elite Hall and seminar rooms are typically rented by the half-day or full day. Contact us for current rates and packages.",
  },
  {
    question: "Do you provide AV and sound equipment?",
    answer:
      "All our spaces come equipped with professional-grade AV — projectors or screens, microphones, and PA systems as applicable. The Podcast Studio has a dedicated soundboard, condenser microphones, and studio monitors. For cultural concerts, full front-of-house sound can be arranged.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend booking at least 7–14 days in advance for smaller studios and 2–4 weeks ahead for the Elite Hall, especially on weekends. That said, we do accommodate last-minute requests where possible — just reach out directly on WhatsApp for urgent bookings.",
  },
  {
    question: "Is catering available at the venue?",
    answer:
      "We can connect you with our preferred catering partners for full-service catering, tea/coffee setups, or snack packages. Catering is billed separately. Alternatively, you're welcome to arrange your own caterer — we'll coordinate access and setup logistics with them.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const halfLength = Math.ceil(faqs.length / 2);
  const leftColFaqs = faqs.slice(0, halfLength);
  const rightColFaqs = faqs.slice(halfLength);

  const renderFaqItem = (faq: (typeof faqs)[number], globalIndex: number) => {
    const isOpen = openIndex === globalIndex;
    return (
      <div key={globalIndex} className="border-b border-line/40 py-2.5">
        <button
          onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
          className="w-full flex items-start text-left py-3.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded transition-colors group"
          aria-expanded={isOpen}
        >
          <span className="font-display text-lg font-semibold text-gold mr-3 shrink-0 select-none">
            {isOpen ? "−" : "+"}
          </span>
          <span className="font-display text-base md:text-[1.125rem] text-ink font-semibold group-hover:text-primary transition-colors duration-200 leading-snug">
            {faq.question}
          </span>
        </button>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="pl-6 pr-2 pb-5 pt-1 font-sans text-stone text-sm md:text-[0.9375rem] leading-relaxed text-justify mb-0">
                {faq.answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <section
      id="faq"
      className="bg-warm-white py-20 md:py-28"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        {/* Section header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display italic text-gold text-lg md:text-xl mb-4 text-center">Common Questions</p>
          <h2
            id="faq-heading"
            className="font-display text-display-lg text-ink text-center [&>em]:text-gold [&>em]:not-italic"
          >
            Venue <em>FAQs</em>
          </h2>
        </motion.div>

        {/* 2-Column Accordion Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {/* Left Column */}
          <div className="border-t border-line/40 flex flex-col">
            {leftColFaqs.map((faq, i) => renderFaqItem(faq, i))}
          </div>

          {/* Right Column */}
          <div className="border-t border-line/40 lg:border-t border-line/40 flex flex-col mt-0 lg:mt-0">
            {rightColFaqs.map((faq, i) => renderFaqItem(faq, i + halfLength))}
          </div>
        </motion.div>

        {/* Still have questions? */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className="font-sans text-stone text-center text-sm mb-4">
            Still have questions? We&apos;re just a message away.
          </p>
          <a
            href="https://wa.me/919157373317"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-gold hover:text-gold/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
            aria-label="WhatsApp Primsa Storiesya with your question"
          >
            Start the Conversation →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
