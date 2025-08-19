import React from "react";
import PlayingCard from "./PlayingCard";

export default function Hand({
  cards,
  size = "md",
  className = "",
  overlap = -12
}) {
  // Responsive overlap
  const getResponsiveOverlap = () => {
    // Adjust overlap based on screen size and number of cards
    const cardCount = cards.length;
    if (cardCount <= 2) return overlap * 0.8;
    
    // More aggressive overlap for larger hands on small screens
    return overlap * 0.6;
  };

  return (
    <div className={`flex ${className}`} aria-label="hand">
      {cards.map((c, i) => (
        <div
          key={i}
          className="first:ml-0"
          style={{ marginLeft: i === 0 ? 0 : `${getResponsiveOverlap()}px` }}
        >
          <PlayingCard
            rank={c.rank}
            suit={c.suit}
            faceDown={c.faceDown}
            size={size}
          />
        </div>
      ))}
    </div>
  );
}