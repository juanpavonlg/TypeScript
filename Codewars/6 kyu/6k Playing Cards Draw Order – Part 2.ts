export const prepareDeck = (drawnCards: string[]): string[] => {
  const deck: string[] = [];
  while (drawnCards.length) {
    if (deck.length) {
      deck.unshift(deck.pop()!);
    }
    deck.unshift(drawnCards.pop()!);
  }
  return deck;
}; // prepareDeck()

console.log(prepareDeck(["KC", "QC", "KD", "QD", "KH", "QH", "KS", "QS"]));
