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
          className="w-[50px] sm:w-[60px] md:w-[70px] aspect-[3/4] rounded-xl shadow-card absolute"
          style={{ top: `${i * 2}px` }}
        >
          <CardBack />
        </div>
      ))}
      {/* Ensures container has height */}
      <div style={{ 
        height: `${count * 2 + 80}px`, 
        width: window.innerWidth < 640 ? "50px" : window.innerWidth < 768 ? "60px" : "70px" 
      }} />
    </div>
  );
}