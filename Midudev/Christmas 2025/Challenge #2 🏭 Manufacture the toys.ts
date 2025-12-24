function manufactureGifts(
  giftsToProduce: Array<{ toy: string; quantity: number }>
): string[] {
  const list: string[] = [];
  for (let {toy, quantity} of giftsToProduce) {
    if (quantity > 0) {
      while (quantity--) {
        list.push(toy);
      }
    }
  }
  return list;
} // manufactureGifts()

const production1 = [
  { toy: "car", quantity: 3 },
  { toy: "doll", quantity: 1 },
  { toy: "ball", quantity: 2 },
];
console.log(manufactureGifts(production1));
const production2 = [
  { toy: "train", quantity: 0 },
  { toy: "bear", quantity: -2 },
  { toy: "puzzle", quantity: 1 },
];
console.log(manufactureGifts(production2));
const production3: Array<{ toy: string; quantity: number }> = [];
console.log(manufactureGifts(production3));
