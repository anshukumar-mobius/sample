import React from "react";
import SuitIcon, { Suit } from "./SuitIcon";
import CardBack from "./CardBack";

type Props = {
  rank?: string;
  suit?: Suit;
  faceDown?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizeMap = {
  sm: "w-[56px] aspect-[3/4]",
  md: "w-[72px] aspect-[3/4]",
  lg: "w-[88px] aspect-[3/4]"
};

export default function PlayingCard({
  rank = "A",
  suit = "spade",
  faceDown = false,
  className = "",
  size = "md"
}: Props) {
  const sizeCls = sizeMap[size];

  if (faceDown) {
    return (
      <div className={`${sizeCls} rounded-xl shadow-card ${className}`}>
        <CardBack />
      </div>
    );
  }

  const isRed = suit === "heart" || suit === "diamond";
  const corner = (
    <div className={`flex flex-col items-center leading-none ${isRed ? "text-red-500" : "text-black"}`}>
      <div className="text-[15px] font-bold">{rank}</div>
      <SuitIcon suit={suit} className="text-[14px]" />
    </div>
  );

  return (
    <div
      className={`bg-cardFace text-black rounded-xl border border-cardFace/80 shadow-card relative overflow-hidden ${sizeCls} ${className}`}
      role="img"
      aria-label={`${rank} of ${suit}s`}
    >
      <div className="absolute top-1 left-1">{corner}</div>
      <div className="absolute bottom-1 right-1 rotate-180">{corner}</div>
      <div className="absolute inset-0 flex items-center justify-center">
        <SuitIcon
          suit={suit}
          className={`opacity-90 ${size === "sm" ? "text-2xl" : size === "md" ? "text-3xl" : "text-4xl"}`}
        />
      </div>
    </div>
  );
}