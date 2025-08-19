import React from "react";
import CardBack from "./CardBack";

export default function Deck({ count = 5, className = "" }) {
  // Slight vertical stack offset
  const offsets = Array.from({ length: count }, (_, i) => i);
  return (
    <div className={`relative ${className}`} aria-label="deck">
      {offsets.map((i) => (
        <div
          key={i}
          className="w-[40px] sm:w-[48px] md:w-[56px] aspect-[3/4] rounded-xl shadow-card absolute"
          style={{ top: `${i * 1.5}px` }}
        >
          <CardBack />
        </div>
      ))}
    </div>
  );
}