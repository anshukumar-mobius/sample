import React from "react";

export default function Table({
  className = ""
}: { className?: string }) {
  return (
    <div className={`relative rounded-[9999px] border-[8px] border-tableRing w-full h-full ${className}`}>
      <div className="absolute inset-4 rounded-[9999px] border-[4px] border-tableRingInner"></div>
    </div>
  );
}