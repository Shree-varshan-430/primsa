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
  // In the dark footer (noBg = false), it wraps it in an elegant white badge to blend the PNG cleanly.
  // Uses /images/Primsa_logo.png which matches the latest brand asset file.
  if (noBg) {
    return (
      <div className={`inline-flex items-center justify-center transition-all duration-300 group-hover:scale-[1.02] ${className}`}>
        <Image
          src="/images/Primsa_logo.png"
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
        src="/images/Primsa_logo.png"
        alt="Primsa Storiesya Logo"
        width={240}
        height={60}
        priority
        className="h-11 md:h-14 w-auto object-contain"
      />
    </div>
  );
}
