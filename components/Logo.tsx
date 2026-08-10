import React from "react";
import Image from "next/image";

interface LogoProps {
  scrolled?: boolean;
  className?: string;
  isLight?: boolean;
  noBg?: boolean;
}

export default function Logo({ scrolled = false, className = "", isLight = false, noBg = false }: LogoProps) {
  // Renders the official brand logo image.
  // In the navbar (noBg = true), it renders directly without any extra background wrapper.
  // In the dark footer (noBg = false), it wraps it in an elegant white badge to blend the JPEG cleanly.
  // Height is set to h-11 (44px) on mobile and h-14 (56px) on desktop to be highly prominent and clear.
  if (noBg) {
    return (
      <div className={`inline-flex items-center justify-center transition-all duration-300 group-hover:scale-[1.02] ${className}`}>
        <Image
          src="/images/Primsa_logo.jpeg"
          alt="Primsa Storiesya Logo"
          width={240}
          height={60}
          priority
          className="h-11 md:h-14 w-auto object-contain"
        />
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center justify-center bg-white px-5 py-2.5 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.06)] border border-line/10 transition-all duration-300 group-hover:scale-[1.02] ${className}`}>
      <Image
        src="/images/Primsa_logo.jpeg"
        alt="Primsa Storiesya Logo"
        width={240}
        height={60}
        priority
        className="h-11 md:h-14 w-auto object-contain"
      />
    </div>
  );
}
