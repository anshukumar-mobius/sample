import React from "react";

export default function CardBack({
  className = ""
}: { className?: string }) {
  return (
    <div
      className={`bg-money card-grid w-full h-full rounded-xl border border-black/20 flex items-center justify-center ${className}`}
    >
      <svg width="40" height="40" viewBox="0 0 64 64" aria-hidden>
        <g fill="black" opacity="0.6">
          <circle cx="20" cy="18" r="10" />
          <circle cx="44" cy="18" r="10" />
          <circle cx="32" cy="36" r="10" />
          <rect x="29" y="42" width="6" height="14" rx="3" />
        </g>
      </svg>
    </div>
  );
}