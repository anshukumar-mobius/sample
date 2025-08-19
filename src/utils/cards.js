// Example hands that match screenshots
export const dealerHand1 = [
  { rank: "3", suit: "diamond" },
  { rank: "8", suit: "spade" },
  { faceDown: true }
];

export const playerHand1 = [
  { rank: "3", suit: "diamond" },
  { rank: "8", suit: "spade" },
  { rank: "8", suit: "club" }
];

export const dealerHand2 = [
  { rank: "9", suit: "spade" },
  { rank: "9", suit: "spade" },
  { rank: "9", suit: "spade" },
  { rank: "9", suit: "spade" },
  { faceDown: true }
];

export const playerHand2 = [
  { rank: "9", suit: "spade" },
  { rank: "9", suit: "spade" },
  { rank: "9", suit: "spade" },
  { rank: "6", suit: "spade" },
  { rank: "4", suit: "heart" }
];

export function score(cards) {
  const rankValue = (r) => {
    if (!r) return 0;
    if (["J", "Q", "K"].includes(r)) return 10;
    if (r === "A") return 11;
    return parseInt(r, 10);
  };
  return cards.filter(c => !c.faceDown).reduce((t, c) => t + rankValue(c.rank), 0);
}