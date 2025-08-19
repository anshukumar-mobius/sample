import React from "react";

export default function Table({ className = "" }) {
  return (
    <div className={`relative rounded-[9999px] border-4 sm:border-6 md:border-8 border-tableRing w-full h-full ${className}`}>
      <div className="absolute inset-2 sm:inset-3 md:inset-4 rounded-[9999px] border-2 sm:border-3 md:border-4 border-tableRingInner"></div>
    </div>
  );
}