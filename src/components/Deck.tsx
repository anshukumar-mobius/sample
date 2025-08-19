import React from "react";
import CardBack from "./CardBack";

export default function Deck({
  count = 5,
  className = ""
}: { count?: number; className?: string }) {
  // Slight vertical stack offset
  const offsets = Array.from({ length: count }, (_, i) => i);
  return (
    <div className={`relative ${className}`} aria-label="deck">
      {offsets.map((i) => (
        <div
          key={i}
          className="w-[70px] aspect-[3/4] rounded-xl shadow-card absolute"
          style={{ top: `${i * 3}px` }}
        >
          <CardBack />
        </div>
      ))}
      {/* Ensures container has height */}
      <div style={{ height: `${count * 3 + 120}px`, width: "70px" }} />
    </div>
  );
}