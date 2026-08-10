import React from "react";

interface LogoProps {
  scrolled?: boolean;
  className?: string;
  isLight?: boolean;
}

export default function Logo({ scrolled = false, className = "", isLight = false }: LogoProps) {
  // If transparent navbar at top of home (not scrolled) and not explicitly isLight, render in white/gold
  // If scrolled or isLight, render in official Maroon (#7A0E17) and Gold (#D4AF37)
  const useBrandColors = scrolled || isLight;

  const frameColor = useBrandColors ? "#0D0D0D" : "#FFFFFF";
  const bracketColor = useBrandColors ? "#7A0E17" : "#FFFFFF";
  const goldColor = "#D4AF37";
  const textColorLeft = useBrandColors ? "#7A0E17" : "#FFFFFF";
  const textColorRight = goldColor;

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* SVG Emblem */}
      <svg viewBox="0 0 100 100" className="w-8 h-8 md:w-9 md:h-9 shrink-0 transition-transform duration-300 group-hover:scale-[1.03]">
        {/* Frame */}
        <rect
          x="8"
          y="8"
          width="84"
          height="84"
          fill="none"
          stroke={frameColor}
          strokeWidth="3"
        />
        {/* Left Bracket */}
        <path
          d="M 22 22 H 40 L 30 32 V 68 L 40 78 H 22 Z"
          fill={bracketColor}
        />
        {/* Right Bracket */}
        <path
          d="M 78 22 H 60 L 70 32 V 68 L 60 78 H 78 Z"
          fill={bracketColor}
        />
        {/* Gold Soundwaves */}
        <rect x="35" y="42" width="4" height="16" rx="2" fill={goldColor} />
        <rect x="41.5" y="36" width="4" height="28" rx="2" fill={goldColor} />
        <rect x="48" y="30" width="4" height="40" rx="2" fill={goldColor} />
        <rect x="54.5" y="36" width="4" height="28" rx="2" fill={goldColor} />
        <rect x="61" y="42" width="4" height="16" rx="2" fill={goldColor} />
      </svg>

      {/* Wordmark */}
      <div className="flex flex-col justify-center leading-none text-left">
        <span
          className="font-display text-[13px] md:text-sm font-extrabold tracking-[0.22em] transition-transform duration-300 group-hover:translate-x-0.5"
          style={{ color: textColorLeft }}
        >
          PRIMSA
        </span>
        <span
          className="font-display text-[10px] md:text-xs font-bold tracking-[0.12em] mt-0.5 transition-transform duration-300 group-hover:translate-x-0.5"
          style={{ color: textColorRight }}
        >
          STORIESYA
        </span>
      </div>
    </div>
  );
}
