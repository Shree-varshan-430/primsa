"use client";

import { motion } from "framer-motion";
import { Sparkles, MapPin, Clock, Phone, Mail } from "lucide-react";
import Contact from "@/components/sections/Contact";

export default function ContactPage() {
  return (
    <div className="pt-24 md:pt-32 bg-ivory">
      {/* Editorial Title Block */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 text-center mb-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 eyebrow text-gold mb-4"
        >
          <Sparkles size={12} />
          GET IN TOUCH
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="font-display text-display-xl text-ink max-w-4xl mx-auto mb-6"
        >
          Let&apos;s plan your <em>next</em> event.
        </motion.h1>
        <div className="section-divider max-w-sm mx-auto my-6" aria-hidden="true">❖</div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-sans text-stone text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Have questions about capacities, layouts, or pricing packages? Drop us a line below or visit our Koramangala studio.
        </motion.p>
      </div>

      {/* Main Contact Form & Location Details Split Section */}
      <Contact />

      {/* Additional Location & Operating Hours Highlights */}
      <section className="py-16 bg-warm-white border-t border-line">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            
            {/* Box 1 */}
            <div className="p-6 bg-ivory border border-line rounded-lg space-y-3">
              <div className="flex justify-center md:justify-start">
                <MapPin className="text-gold" size={24} />
              </div>
              <h3 className="font-display text-xl text-ink font-semibold">Location</h3>
              <p className="font-sans text-stone text-sm leading-relaxed">
                Koramangala, Bangalore – 560034,<br />
                Karnataka, India. Located in the prime creative district.
              </p>
            </div>

            {/* Box 2 */}
            <div className="p-6 bg-ivory border border-line rounded-lg space-y-3">
              <div className="flex justify-center md:justify-start">
                <Clock className="text-gold" size={24} />
              </div>
              <h3 className="font-display text-xl text-ink font-semibold">Hours</h3>
              <p className="font-sans text-stone text-sm leading-relaxed">
                Monday – Sunday: 8:00 AM – 10:00 PM<br />
                Available for early setups & late night wraps on request.
              </p>
            </div>

            {/* Box 3 */}
            <div className="p-6 bg-ivory border border-line rounded-lg space-y-3">
              <div className="flex justify-center md:justify-start">
                <Mail className="text-gold" size={24} />
              </div>
              <h3 className="font-display text-xl text-ink font-semibold">Direct</h3>
              <p className="font-sans text-stone text-sm leading-relaxed">
                Phone: <a href="tel:9157373317" className="hover:text-gold transition-colors">+91 91573 73317</a><br />
                Email: <a href="mailto:primsastoriesya@gmail.com" className="hover:text-gold transition-colors break-all">primsastoriesya@gmail.com</a>
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
