function carryGifts(gifts: string[], maxWeight: number) {
  if (gifts.every((e) => e.length > maxWeight)) {
    return [];
  }
  const bags = [""];
  for (const gift of gifts) {
    if (bags.at(-1)!.replace(/ /g, "").length + gift.length <= maxWeight) {
      bags[bags.length - 1] += ` ${gift}`;
      bags[bags.length - 1] = bags[bags.length - 1].trim();
    } else if (gift.length <= maxWeight) {
      bags.push(gift);
    }
  }
  return bags;
} // carryGifts()

console.log(carryGifts(["game", "bike", "book", "toy"], 10));
console.log(carryGifts(["game", "bike", "book", "toy"], 7));
console.log(carryGifts(["game", "bike", "book", "toy"], 4));
console.log(carryGifts(["toy", "gamme", "toy", "bike"], 6));
