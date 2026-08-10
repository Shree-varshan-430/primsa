import React from "react";
import Image from "next/image";

interface LogoProps {
  scrolled?: boolean;
  className?: string;
  isLight?: boolean;
}

export default function Logo({ scrolled = false, className = "", isLight = false }: LogoProps) {
  // Renders the official brand logo image inside an elegant white badge.
  // This ensures 100% color accuracy, retaining the custom typography details (such as the stylized arrow in "PRIMSA")
  // and providing excellent contrast against transparent, dark, or light background sections.
  return (
    <div className={`inline-flex items-center justify-center bg-white px-4 py-2 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.06)] border border-line/10 transition-all duration-300 group-hover:scale-[1.02] ${className}`}>
      <Image
        src="/images/Primsa_logo.png"
        alt="Primsa Storiesya Logo"
        width={160}
        height={40}
        priority
        className="h-7 md:h-8 w-auto object-contain"
      />
    </div>
  );
}
