"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const diamondRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const mottoRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Prevent preloader showing on repeat navigation within the session
    const hasLoaded = sessionStorage.getItem("hasLoadedBefore");
    if (hasLoaded) {
      setVisible(false);
      return;
    }

    // Lock page scroll during load
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      onComplete: () => {
        sessionStorage.setItem("hasLoadedBefore", "true");
        document.body.style.overflow = "";
        setVisible(false);
      },
    });

    // 1. Initial State
    gsap.set([diamondRef.current, titleRef.current, mottoRef.current, lineRef.current], {
      opacity: 0,
    });
    gsap.set(diamondRef.current, { scale: 0.8, rotation: -45 });

    // 2. Animate Diamond (scale & spin)
    tl.to(diamondRef.current, {
      scale: 1,
      rotation: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power4.out",
    });

    // 3. Fade in title
    tl.to(
      titleRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.4"
    );

    // 4. Expand line
    tl.fromTo(
      lineRef.current,
      { width: "0%", opacity: 0 },
      {
        width: "60px",
        opacity: 1,
        duration: 0.6,
        ease: "power3.inOut",
      },
      "-=0.3"
    );

    // 5. Reveal Motto words
    tl.to(
      mottoRef.current,
      {
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
      },
      "-=0.1"
    );

    // 6. Hold for a moment, then slide the screen up
    tl.to(containerRef.current, {
      yPercent: -100,
      duration: 1.1,
      ease: "power4.inOut",
      delay: 0.6,
    });

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-[#4A1B22] flex flex-col items-center justify-center text-white"
    >
      <div className="flex flex-col items-center max-w-md px-6 text-center select-none">
        {/* Diamond ornament badge */}
        <div
          ref={diamondRef}
          className="text-4xl md:text-5xl text-[#D4AF37] mb-6 font-display"
        >
          ❖
        </div>

        {/* Brand Title */}
        <h2
          ref={titleRef}
          className="font-display text-3xl md:text-4xl tracking-[0.15em] uppercase font-semibold text-white mb-4"
        >
          PRIMSA
        </h2>

        {/* Decorative Divider */}
        <div
          ref={lineRef}
          className="h-[1px] bg-[#D4AF37]/60 mb-5"
          style={{ width: 0 }}
        />

        {/* Business Motto */}
        <div
          ref={mottoRef}
          className="font-display italic text-[#E5C573] text-base md:text-lg tracking-wider"
        >
          Inspire. Create. Transform.
        </div>
      </div>
    </div>
  );
}
