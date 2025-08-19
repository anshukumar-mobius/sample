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
    <div className="h-dvh flex flex-col bg-backdrop overflow-hidden">
      {/* Toggle (dev aid) */}
      <div className="p-1 sm:p-2 flex gap-1 sm:gap-2 justify-center flex-wrap shrink-0">
        <button
          className={`px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm rounded-md bg-pill hover:bg-pill/80 transition ${scene === 1 ? "ring-2 ring-money/70" : ""}`}
          onClick={() => setScene(1)}
        >
          <span className="hidden sm:inline">Scene 1 (3,8 vs 3,8,8)</span>
          <span className="sm:hidden">Scene 1</span>
        </button>
        <button
          className={`px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm rounded-md bg-pill hover:bg-pill/80 transition ${scene === 2 ? "ring-2 ring-money/70" : ""}`}
          onClick={() => setScene(2)}
        >
          <span className="hidden sm:inline">Scene 2 (9‑stack)</span>
          <span className="sm:hidden">Scene 2</span>
        </button>
      </div>

      {/* Table stage */}
      <div className="relative flex-1 flex items-center justify-center p-1 sm:p-2 md:p-3 overflow-hidden min-h-0">
        {/* Responsive oval container */}
        <div className="relative w-full h-full max-w-[95vw] max-h-[95%]">
          {/* Aspect ratio container that fits within available space */}
          <div className="relative w-full h-full" style={{
            aspectRatio: window.innerWidth < 640 ? '4/5' : 
                        window.innerWidth < 768 ? '3/2' : 
                        window.innerWidth < 1024 ? '2/1' : '2.6/1',
            maxWidth: '100%',
            maxHeight: '100%'
          }}>
          <Table className="absolute inset-0" />

          {/* Dealer score pill (top center) */}
          <ScorePill
            value={dealerScore}
            className="absolute -top-3 sm:-top-4 md:-top-5 left-1/2 -translate-x-1/2"
          />

          {/* Deck (top-right) */}
          <Deck
            count={5}
            className="absolute -top-4 -right-1 sm:-top-5 sm:right-0 md:-top-6 md:right-1"
          />

          {/* Dealer hand (top, centered) */}
          <Hand
            cards={dealer}
            size="sm"
            className="absolute top-[10%] sm:top-[12%] left-1/2 -translate-x-1/2"
            overlap={-8}
          />

          {/* Center brand + rules */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1 sm:gap-2">
            <MoneyTreeLogo className="scale-[0.6] sm:scale-75 md:scale-90" />
            <div className="text-[8px] sm:text-[10px] md:text-xs space-y-0.5 sm:space-y-1 text-white/85 text-center">
              <div className="inline-block bg-pill/80 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md">
                BLACKJACK PAYS 3 TO 2
              </div>
              <div className="inline-block bg-pill/80 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md">
                INSURANCE PAYS 2 TO 1
              </div>
            </div>
          </div>

          {/* Player score pill (bottom center) */}
          <ScorePill
            value={playerScore}
            className="absolute -bottom-3 sm:-bottom-4 md:-bottom-5 left-1/2 -translate-x-1/2"
          />

          {/* Player hand (bottom, centered) */}
          <Hand
            cards={player}
            size="sm"
            className="absolute bottom-[8%] sm:bottom-[10%] left-1/2 -translate-x-1/2"
            overlap={-8}
          />
          </div>
        </div>
      </div>
    </div>
  );
}