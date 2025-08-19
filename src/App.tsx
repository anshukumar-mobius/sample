import React, { useMemo, useState } from "react";
import Table from "./components/Table";
import MoneyTreeLogo from "./components/MoneyTreeLogo";
import ScorePill from "./components/ScorePill";
import Hand from "./components/Hand";
import Deck from "./components/Deck";
import { dealerHand1, playerHand1, dealerHand2, playerHand2, score } from "./utils/cards";

export default function App() {
  // Toggle between the two screenshot scenes
  const [scene, setScene] = useState<1 | 2>(1);

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
    <div className="min-h-dvh flex flex-col">
      {/* Toggle (dev aid) */}
      <div className="p-3 flex gap-2 justify-center">
        <button
          className={`px-3 py-1 rounded-md bg-pill hover:bg-pill/80 transition ${scene === 1 ? "ring-2 ring-money/70" : ""}`}
          onClick={() => setScene(1)}
        >
          Scene 1 (3,8 vs 3,8,8)
        </button>
        <button
          className={`px-3 py-1 rounded-md bg-pill hover:bg-pill/80 transition ${scene === 2 ? "ring-2 ring-money/70" : ""}`}
          onClick={() => setScene(2)}
        >
          Scene 2 (9‑stack)
        </button>
      </div>

      {/* Table stage */}
      <div className="relative flex-1 flex items-center justify-center">
        {/* Responsive oval container */}
        <div className="relative w-[92vw] max-w-[1120px] aspect-[2/1] md:aspect-[2.2/1] lg:aspect-[2.6/1]">
          <Table className="absolute inset-0" />

          {/* Dealer score pill (top center) */}
          <ScorePill
            value={dealerScore}
            className="absolute -top-7 left-1/2 -translate-x-1/2"
          />

          {/* Deck (top-right) */}
          <Deck
            count={5}
            className="absolute -top-8 right-0 md:-top-10 md:right-2"
          />

          {/* Dealer hand (top, centered) */}
          <Hand
            cards={dealer}
            size="md"
            className="absolute top-[10%] left-1/2 -translate-x-1/2"
            overlap={-20}
          />

          {/* Center brand + rules */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3">
            <MoneyTreeLogo />
            <div className="text-[11px] md:text-sm space-y-2 text-white/85 text-center">
              <div className="inline-block bg-pill/80 px-3 py-2 rounded-md">
                BLACKJACK PAYS 3 TO 2
              </div>
              <div className="inline-block bg-pill/80 px-3 py-2 rounded-md">
                INSURANCE PAYS 2 TO 1
              </div>
            </div>
          </div>

          {/* Player score pill (bottom center) */}
          <ScorePill
            value={playerScore}
            className="absolute -bottom-7 left-1/2 -translate-x-1/2"
          />

          {/* Player hand (bottom, centered) */}
          <Hand
            cards={player}
            size="md"
            className="absolute bottom-[8%] left-1/2 -translate-x-1/2"
            overlap={-20}
          />
        </div>
      </div>

      {/* Mobile portrait adjustments (via utility classes) */}
      <style>{`
        @media (max-width: 640px) {
          /* Taller table feel for phones like screenshot 2 */
          .aspect-\\[2\\/1\\] { aspect-ratio: 3 / 4 !important; }
        }
      `}</style>
    </div>
  );
}