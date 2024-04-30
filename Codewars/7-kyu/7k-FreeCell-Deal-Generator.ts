const DECK = [
  "AC", "AD", "AH", "AS", "2C", "2D", "2H", "2S", "3C", "3D", "3H", "3S", "4C",
  "4D", "4H", "4S", "5C", "5D", "5H", "5S", "6C", "6D", "6H", "6S", "7C", "7D",
  "7H", "7S", "8C", "8D", "8H", "8S", "9C", "9D", "9H", "9S", "TC", "TD", "TH",
  "TS", "JC", "JD", "JH", "JS", "QC", "QD", "QH", "QS", "KC", "KD", "KH", "KS",
];

export function deal(n: number): string[] {
  const deck = [...DECK];
  const deal: string[] = [];
  let state = n;
  while (deck.length) {
    state = (state * 214_013 + 2_531_011) % 2_147_483_648;
    const nextValue = Math.floor(state / 65_536);
    const index = nextValue % deck.length;
    deal.push(deck[index]);
    const last = deck.pop()!;
    if (index < deck.length) {
      deck[index] = last;
    }
  }
  return deal;
} // deal()

console.log(deal(1));
console.log(deal(11982));
