import React from "react";

export default function MoneyTreeLogo({ className = "" }) {
  return (
    <div className={`flex items-center gap-2 sm:gap-3 ${className}`}>
      {/* Clover */}
      <svg
        width="24"
        height="24"
        viewBox="0 0 64 64"
        className="drop-shadow-glow sm:w-7 sm:h-7 md:w-8 md:h-8"
        aria-hidden
      >
        <g fill="#34E59B">
          <circle cx="20" cy="18" r="10" />
          <circle cx="44" cy="18" r="10" />
          <circle cx="32" cy="36" r="10" />
          <rect x="29" y="42" width="6" height="14" rx="3" />
        </g>
      </svg>
      {/* Wordmark */}
      <div className="font-display tracking-[0.15em] sm:tracking-[0.2em] text-base sm:text-lg md:text-xl">
        MONEYTREE
      </div>
    </div>
  );
}