"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function StatementSection() {
  return (
    <section
      className="bg-ivory py-20 md:py-32 relative overflow-hidden"
      aria-labelledby="statement-heading"
    >
      {/* Subtle background image overlay */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        {/* TODO: Replace with an atmospheric Elite Hall photo from client for subtle texture */}
        <Image
          src="/images/cultural-concert.jpg"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Gold top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" aria-hidden="true" />

      <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-8 text-center">
        <motion.p
          className="eyebrow text-gold mb-6 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          OUR PROMISE
        </motion.p>

        <motion.h2
          id="statement-heading"
          className="font-display text-display-xl text-charcoal-navy mb-10 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
        >
          Premium spaces.
          <br className="block" />
          <em>Endless</em> possibilities.
        </motion.h2>

        {/* Pull-quote divider */}
        <motion.div
          className="flex items-center justify-center gap-4 text-center mb-8"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          aria-hidden="true"
        >
          <div className="h-px w-16 bg-gold/40" />
          <span className="text-gold text-lg"> ❖ </span>
          <div className="h-px w-16 bg-gold/40" />
        </motion.div>

        {/* Pull-quote */}
        <motion.blockquote
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          {/* Large decorative quote marks */}
          <span
            className="font-display text-7xl md:text-9xl text-gold/20 absolute -top-6 -left-2 md:-left-8 leading-none select-none"
            aria-hidden="true"
          >
            &ldquo;
          </span>
          <p
            className="font-accent text-2xl text-center md:text-4xl text-stone italic leading-relaxed max-w-3xl mx-auto"
          >
            &ldquo;Every celebration deserves a space that feels unforgettable.&rdquo;
          </p>
          <span
            className="font-display text-7xl md:text-9xl text-gold/20 absolute -bottom-12 -right-2 md:-right-8 leading-none select-none"
            aria-hidden="true"
          >
            &rdquo;
          </span>
        </motion.blockquote>

        <motion.p
          className="font-sans text-stone text-sm mt-10 text-center tracking-widest uppercase"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
           —  Primsa Storiesya  ·  Koramangala, Bangalore
        </motion.p>
      </div>

      {/* Gold bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" aria-hidden="true" />
    </section>
  );
}
