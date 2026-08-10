"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, LayoutGrid, Clock } from "lucide-react";

const stats = [
  { icon: LayoutGrid, value: 9, suffix: "", label: "Versatile Spaces" },
  { icon: MapPin, value: 1, suffix: "", label: "Koramangala, Bangalore" },
  { icon: Clock, value: 0, suffix: "min", label: "Book in Minutes" },
];

function CountUp({
  target,
  suffix,
  duration = 1800,
}: {
  target: number;
  suffix: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView || target === 0) {
      if (target === 0) setCount(0);
      return;
    }
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  // Special case for "Book in Minutes"  —  display "Now"
  if (target === 0) {
    return <span ref={ref}>Now</span>;
  }

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsStrip() {
  return (
    <section
      id="stats"
      className="bg-charcoal-navy py-6 md:py-8"
      aria-label="Key statistics"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-3 divide-x divide-white/10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 sm:gap-4 px-1.5 sm:px-6 py-2"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
            >
              <div className="p-1.5 sm:p-2.5 rounded-full border border-gold/30 text-gold shrink-0">
                <stat.icon className="w-3.5 h-3.5 sm:w-[18px] sm:h-[18px]" aria-hidden="true" />
              </div>
              <div className="text-center sm:text-left">
                <p className="font-display text-lg sm:text-2xl md:text-3xl text-ivory font-semibold leading-tight">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="font-sans text-[8px] sm:text-xs text-ivory/60 tracking-wide uppercase leading-tight mt-0.5 sm:mt-1">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
