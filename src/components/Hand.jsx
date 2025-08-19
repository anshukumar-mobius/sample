import React from "react";
import PlayingCard from "./PlayingCard";

export default function Hand({
  cards,
  size = "md",
  className = "",
  overlap = -18,
  responsive = true
}) {
  // Responsive card sizing
  const getResponsiveSize = () => {
    if (!responsive) return size;
    // On mobile, use smaller cards regardless of passed size
    return size;
  };

  // Responsive overlap
  const getResponsiveOverlap = () => {
    // Adjust overlap based on screen size and number of cards
    const cardCount = cards.length;
    if (cardCount <= 2) return overlap;
    
    // More aggressive overlap for larger hands on small screens
    return overlap * 0.8;
  };

  return (
    <div className={`flex ${className}`} aria-label="hand" style={{ 
      // Ensure hand doesn't overflow on small screens
      maxWidth: '90vw'
    }}>
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
            size={getResponsiveSize()}
          />
        </div>
      ))}
    </div>
  );
}