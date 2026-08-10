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
  if (noBg) {
    return (
      <div className={`inline-flex items-center justify-center transition-all duration-300 group-hover:scale-[1.02] ${className}`}>
        <Image
          src="/images/Primsa_logo.jpeg"
          alt="Primsa Storiesya Logo"
          width={160}
          height={40}
          priority
          className="h-7 md:h-8 w-auto object-contain"
        />
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center justify-center bg-white px-4 py-2 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.06)] border border-line/10 transition-all duration-300 group-hover:scale-[1.02] ${className}`}>
      <Image
        src="/images/Primsa_logo.jpeg"
        alt="Primsa Storiesya Logo"
        width={160}
        height={40}
        priority
        className="h-7 md:h-8 w-auto object-contain"
      />
    </div>
  );
}
