import React, { useMemo, useState } from "react";
import Table from "./components/Table";
import MoneyTreeLogo from "./components/MoneyTreeLogo";
import ScorePill from "./components/ScorePill";
import Hand from "./components/Hand";
import Deck from "./components/Deck";
import { dealerHand1, playerHand1, dealerHand2, playerHand2, score } from "./utils/cards";

export default function App() {
  // Toggle between the two screenshot scenes
  const [scene, setScene] = useState(1);

  const dealer = useMemo(
    () => (scene === 1 ? dealerHand1 : dealerHand2),
    [scene]
  );
  const player = useMemo(
    () => (scene === 1 ? playerHand1 : playerHand2),
    [scene]
  );

  const dealerScore = score(dealer);
  const playerScore = score(player);

  return (
    <div className="min-h-dvh flex flex-col bg-backdrop">
      {/* Toggle (dev aid) */}
      <div className="p-2 sm:p-3 flex gap-1 sm:gap-2 justify-center flex-wrap">
        <button
          className={`px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-md bg-pill hover:bg-pill/80 transition ${scene === 1 ? "ring-2 ring-money/70" : ""}`}
          onClick={() => setScene(1)}
        >
          <span className="hidden sm:inline">Scene 1 (3,8 vs 3,8,8)</span>
          <span className="sm:hidden">Scene 1</span>
        </button>
        <button
          className={`px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-md bg-pill hover:bg-pill/80 transition ${scene === 2 ? "ring-2 ring-money/70" : ""}`}
          onClick={() => setScene(2)}
        >
          <span className="hidden sm:inline">Scene 2 (9‑stack)</span>
          <span className="sm:hidden">Scene 2</span>
        </button>
      </div>

      {/* Table stage */}
      <div className="relative flex-1 flex items-center justify-center p-2 sm:p-4">
        {/* Responsive oval container */}
        <div className="relative w-full max-w-[320px] aspect-[4/5] sm:max-w-[480px] sm:aspect-[3/2] md:max-w-[720px] md:aspect-[2/1] lg:max-w-[1120px] lg:aspect-[2.6/1]">
          <Table className="absolute inset-0" />

          {/* Dealer score pill (top center) */}
          <ScorePill
            value={dealerScore}
            className="absolute -top-5 sm:-top-7 left-1/2 -translate-x-1/2"
          />

          {/* Deck (top-right) */}
          <Deck
            count={5}
            className="absolute -top-6 -right-2 sm:-top-8 sm:right-0 md:-top-10 md:right-2"
          />

          {/* Dealer hand (top, centered) */}
          <Hand
            cards={dealer}
            size="sm"
            className="absolute top-[8%] sm:top-[10%] left-1/2 -translate-x-1/2"
            overlap={-12}
          />

          {/* Center brand + rules */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 sm:gap-3">
            <MoneyTreeLogo className="scale-75 sm:scale-100" />
            <div className="text-[9px] sm:text-[11px] md:text-sm space-y-1 sm:space-y-2 text-white/85 text-center">
              <div className="inline-block bg-pill/80 px-2 sm:px-3 py-1 sm:py-2 rounded-md">
                BLACKJACK PAYS 3 TO 2
              </div>
              <div className="inline-block bg-pill/80 px-2 sm:px-3 py-1 sm:py-2 rounded-md">
                INSURANCE PAYS 2 TO 1
              </div>
            </div>
          </div>

          {/* Player score pill (bottom center) */}
          <ScorePill
            value={playerScore}
            className="absolute -bottom-5 sm:-bottom-7 left-1/2 -translate-x-1/2"
          />

          {/* Player hand (bottom, centered) */}
          <Hand
            cards={player}
            size="sm"
            className="absolute bottom-[6%] sm:bottom-[8%] left-1/2 -translate-x-1/2"
            overlap={-12}
          />
        </div>
      </div>
    </div>
  );
}