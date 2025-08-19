import React from "react";

export default function ScorePill({ value, className = "" }) {
  return (
    <div
      className={`px-2 sm:px-3 py-1 rounded-lg bg-pill/90 text-white font-semibold text-sm sm:text-base shadow-inner ${className}`}
      aria-label={`Score ${value}`}
    >
      {value}
    </div>
  );
}