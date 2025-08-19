import React from "react";

export type Suit = "spade" | "club" | "diamond" | "heart";

export default function SuitIcon({
  suit,
  className = ""
}: { suit: Suit; className?: string }) {
  const color =
    suit === "diamond" || suit === "heart" ? "text-red-500" : "text-black";
  const symbol = suit === "spade" ? "♠" :
                 suit === "club" ? "♣" :
                 suit === "diamond" ? "♦" : "♥";
  return (
    <span className={`${color} ${className}`} aria-hidden>
      {symbol}
    </span>
  );
}