"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";

const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .min(10, "Enter a valid phone number")
    .max(13, "Enter a valid phone number")
    .regex(/^[0-9+\s-]+$/, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email address"),
  eventType: z.string().min(1, "Please select an event type"),
  preferredDate: z.string().min(1, "Please select a preferred date"),
  message: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

const eventTypes = [
  { value: "elite-hall", label: "Elite Hall" },
  { value: "podcast-studio", label: "Podcast Studio" },
  { value: "art-studio", label: "Art Studio" },
  { value: "seminar", label: "Seminar / Workshop" },
  { value: "training", label: "Training Program" },
  { value: "corporate", label: "Corporate Event" },
  { value: "sound-healing", label: "Sound Healing Session" },
  { value: "talk", label: "Special Talk / Lecture" },
  { value: "concert", label: "Cultural Concert" },
  { value: "other", label: "Other" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async (data: BookingFormData) => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
        reset();
      }
    } catch (err) {
      console.error("Form submission error:", err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-charcoal-navy py-20 md:py-28"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow text-gold-soft mb-4 text-center">GET IN TOUCH</p>
          <h2
            id="contact-heading"
            className="font-display text-display-lg text-ivory text-center"
            style={{ fontVariationSettings: "'opsz' 56, 'SOFT' 20" }}
          >
            Let&apos;s plan your{" "}
            <em>next</em> event.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left  —  Contact details */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-5">
              <a
                href="tel:9157373317"
                className="flex items-start gap-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded p-1"
                aria-label="Call Primsa Storiesya at 9157373317"
              >
                <div className="p-2.5 rounded-xl bg-gold/10 text-gold group-hover:bg-gold group-hover:text-white transition-colors mt-0.5 shrink-0">
                  <Phone size={18} aria-hidden="true" />
                </div>
                <div>
                  <p className="font-sans text-xs text-gold-soft/80 uppercase tracking-widest mb-1">Phone</p>
                  <p className="font-display text-xl text-ivory group-hover:text-gold-soft transition-colors"
                     style={{ fontVariationSettings: "'opsz' 24" }}>
                    9157373317
                  </p>
                </div>
              </a>

              <a
                href="mailto:primsastoriesya@gmail.com"
                className="flex items-start gap-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded p-1"
                aria-label="Email Primsa Storiesya"
              >
                <div className="p-2.5 rounded-xl bg-gold/10 text-gold group-hover:bg-gold group-hover:text-white transition-colors mt-0.5 shrink-0">
                  <Mail size={18} aria-hidden="true" />
                </div>
                <div>
                  <p className="font-sans text-xs text-gold-soft/80 uppercase tracking-widest mb-1">Email</p>
                  <p className="font-display text-lg text-ivory group-hover:text-gold-soft transition-colors break-all"
                     style={{ fontVariationSettings: "'opsz' 20" }}>
                    primsastoriesya@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-1">
                <div className="p-2.5 rounded-xl bg-gold/10 text-gold shrink-0">
                  <MapPin size={18} aria-hidden="true" />
                </div>
                <div>
                  <p className="font-sans text-xs text-gold-soft/80 uppercase tracking-widest mb-1">Address</p>
                  <address className="font-sans text-ivory/80 text-sm leading-relaxed not-italic">
                    Primsa Storiesya<br />
                    Koramangala<br />
                    Bangalore – 560034<br />
                    Karnataka, India
                  </address>
                </div>
              </div>
            </div>

            {/* Google Maps embed */}
            <div className="rounded-2xl overflow-hidden border border-white/10 h-64">
              {/* Google Maps embed for Koramangala, Bangalore */}
              <iframe
                title="Primsa Storiesya location on Google Maps  —   Koramangala, Bangalore"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15555.50836498539!2d77.61679799999999!3d12.9352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1440ef888cf7%3A0x5f4d4d0f1e9c0e34!2sKoramangala%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1720000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919157373317"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#25D366] text-white font-display font-semibold text-sm px-6 py-3.5 rounded-full hover:bg-[#1ebe5a] transition-colors w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
              aria-label="Chat with Primsa Storiesya on WhatsApp"
            >
              <MessageCircle size={18} aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Right  —   Booking form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {submitted ? (
              <div className="bg-gold/10 border border-gold/30 rounded-2xl p-10 text-center h-full flex flex-col items-center justify-center">
                <div className="text-4xl mb-4" aria-hidden="true">❖</div>
                <h3 className="font-display text-2xl text-ivory mb-3"
                    style={{ fontVariationSettings: "'opsz' 28" }}>
                  Enquiry Received!
                </h3>
                <p className="font-sans text-gold-soft/80 text-sm leading-relaxed">
                  Thank you for reaching out. We&apos;ll get back to you within 24 hours to
                  discuss your event and availability.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4"
                aria-label="Booking enquiry form"
                noValidate
              >
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="font-sans text-xs text-gold-soft/80 uppercase tracking-widest block mb-1.5">
                    Full Name *
                  </label>
                  <input
                    id="contact-name"
                    {...register("name")}
                    placeholder="Your full name"
                    className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 font-sans text-sm text-ivory placeholder:text-ivory/40 focus:outline-none focus:border-gold/60 focus:bg-white/8 transition-colors"
                    aria-required="true"
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="font-sans text-terracotta text-xs mt-1.5" role="alert">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Phone + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-phone" className="font-sans text-xs text-gold-soft/80 uppercase tracking-widest block mb-1.5">
                      Phone / WhatsApp *
                    </label>
                    <input
                      id="contact-phone"
                      {...register("phone")}
                      placeholder="9XXXXXXXXX"
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 font-sans text-sm text-ivory placeholder:text-ivory/40 focus:outline-none focus:border-gold/60 transition-colors"
                      aria-required="true"
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                    />
                    {errors.phone && (
                      <p id="phone-error" className="font-sans text-terracotta text-xs mt-1.5" role="alert">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="font-sans text-xs text-gold-soft/80 uppercase tracking-widest block mb-1.5">
                      Email *
                    </label>
                    <input
                      id="contact-email"
                      {...register("email")}
                      type="email"
                      placeholder="you@email.com"
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 font-sans text-sm text-ivory placeholder:text-ivory/40 focus:outline-none focus:border-gold/60 transition-colors"
                      aria-required="true"
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="font-sans text-terracotta text-xs mt-1.5" role="alert">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Event type + Date row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-event-type" className="font-sans text-xs text-gold-soft/80 uppercase tracking-widest block mb-1.5">
                      Event Type *
                    </label>
                    <select
                      id="contact-event-type"
                      {...register("eventType")}
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 font-sans text-sm text-ivory focus:outline-none focus:border-gold/60 transition-colors appearance-none cursor-pointer"
                      aria-required="true"
                      aria-describedby={errors.eventType ? "event-type-error" : undefined}
                      style={{ colorScheme: "dark" }}
                    >
                      <option value="" className="bg-charcoal-navy">Select type...</option>
                      {eventTypes.map((et) => (
                        <option key={et.value} value={et.value} className="bg-charcoal-navy">
                          {et.label}
                        </option>
                      ))}
                    </select>
                    {errors.eventType && (
                      <p id="event-type-error" className="font-sans text-terracotta text-xs mt-1.5" role="alert">
                        {errors.eventType.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="contact-date" className="font-sans text-xs text-gold-soft/80 uppercase tracking-widest block mb-1.5">
                      Preferred Date *
                    </label>
                    <input
                      id="contact-date"
                      {...register("preferredDate")}
                      type="date"
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 font-sans text-sm text-ivory focus:outline-none focus:border-gold/60 transition-colors cursor-pointer"
                      aria-required="true"
                      style={{ colorScheme: "dark" }}
                      aria-describedby={errors.preferredDate ? "date-error" : undefined}
                    />
                    {errors.preferredDate && (
                      <p id="date-error" className="font-sans text-terracotta text-xs mt-1.5" role="alert">
                        {errors.preferredDate.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="font-sans text-xs text-gold-soft/80 uppercase tracking-widest block mb-1.5">
                    Tell us more (optional)
                  </label>
                  <textarea
                    id="contact-message"
                    {...register("message")}
                    rows={4}
                    placeholder="Expected guests, special requirements, layout preferences..."
                    className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 font-sans text-sm text-ivory placeholder:text-ivory/40 focus:outline-none focus:border-gold/60 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-gold text-warm-white font-display font-semibold text-sm py-4 rounded-xl hover:bg-gold/90 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal-navy mt-2"
                  aria-label="Submit booking enquiry"
                >
                  {submitting ? "Sending..." : "Send Enquiry →"}
                </button>

                <p className="font-sans text-xs text-ivory/60 text-center">
                  We&apos;ll respond within 24 hours. For urgent bookings, reach us on WhatsApp.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* Floating WhatsApp FAB */}
      <a
        href="https://wa.me/919157373317"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
        aria-label="Chat with Primsa Storiesya on WhatsApp"
      >
        <MessageCircle size={24} aria-hidden="true" />
      </a>
    </section>
  );
}
