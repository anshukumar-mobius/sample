import React from "react";
import SuitIcon from "./SuitIcon";
import CardBack from "./CardBack";

const sizeMap = {
  sm: "w-[48px] sm:w-[56px] aspect-[3/4]",
  md: "w-[56px] sm:w-[72px] md:w-[80px] aspect-[3/4]",
  lg: "w-[64px] sm:w-[80px] md:w-[88px] lg:w-[96px] aspect-[3/4]"
};

export default function PlayingCard({
  rank = "A",
  suit = "spade",
  faceDown = false,
  className = "",
  size = "md"
}) {
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
      <div className="text-[11px] sm:text-[13px] md:text-[15px] font-bold">{rank}</div>
      <SuitIcon suit={suit} className="text-[10px] sm:text-[12px] md:text-[14px]" />
    </div>
  );

  return (
    <div
      className={`bg-cardFace text-black rounded-xl border border-cardFace/80 shadow-card relative overflow-hidden ${sizeCls} ${className}`}
      role="img"
      aria-label={`${rank} of ${suit}s`}
    >
      <div className="absolute top-0.5 sm:top-1 left-0.5 sm:left-1">{corner}</div>
      <div className="absolute bottom-0.5 sm:bottom-1 right-0.5 sm:right-1 rotate-180">{corner}</div>
      <div className="absolute inset-0 flex items-center justify-center">
        <SuitIcon
          suit={suit}
          className={`opacity-90 ${
            size === "sm" ? "text-lg sm:text-xl md:text-2xl" : 
            size === "md" ? "text-xl sm:text-2xl md:text-3xl" : 
            "text-2xl sm:text-3xl md:text-4xl"
          }`}
        />
      </div>
    </div>
  );
}