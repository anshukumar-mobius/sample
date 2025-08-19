import React from "react";

export default function ScorePill({
  value,
  className = ""
}: { value: number | string; className?: string }) {
  return (
    <div
      className={`px-3 py-1 rounded-lg bg-pill/90 text-white font-semibold text-base shadow-inner ${className}`}
      aria-label={`Score ${value}`}
    >
      {value}
    </div>
  );
}