import React from "react";
import PlayingCard from "./PlayingCard";
import type { Suit } from "./SuitIcon";

export type CardData = { rank?: string; suit?: Suit; faceDown?: boolean };

export default function Hand({
  cards,
  size = "md",
  className = "",
  overlap = -18
}: {
  cards: CardData[];
  size?: "sm" | "md" | "lg";
  className?: string;
  overlap?: number; // negative px to overlap
}) {
  return (
    <div className={`flex ${className}`} aria-label="hand">
      {cards.map((c, i) => (
        <div
          key={i}
          className="first:ml-0"
          style={{ marginLeft: i === 0 ? 0 : `${overlap}px` }}
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