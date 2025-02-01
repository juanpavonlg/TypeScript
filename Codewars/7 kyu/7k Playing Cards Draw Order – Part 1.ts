export const draw = (deck: string[]): string[] => {
  const drawnCards: string[] = [];
  while (deck.length) {
    drawnCards.push(deck.shift()!);
    if (deck.length) {
      deck.push(deck.shift()!);
    }
  }
  return drawnCards;
}; // draw()

console.log(draw(["KC", "KH", "QC", "KS", "KD", "QH", "QD", "QS"]));
