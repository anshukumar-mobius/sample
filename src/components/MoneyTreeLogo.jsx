import React from "react";

export default function MoneyTreeLogo({ className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Clover */}
      <svg
        width="28"
        height="28"
        viewBox="0 0 64 64"
        className="drop-shadow-glow sm:w-8 sm:h-8 md:w-9 md:h-9"
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
      <div className="font-display tracking-[0.2em] sm:tracking-[0.3em] text-lg sm:text-xl md:text-2xl">
        MONEYTREE
      </div>
    </div>
  );
}