function distributeGifts(packOfGifts: string[], reindeers: string[]) {
  const packWeight = packOfGifts.reduce((a, e) => a + e.length, 0);
  const maxWeight = reindeers.reduce((a, e) => a + 2 * e.length, 0);
  return (maxWeight / packWeight) | 0;
} // distributeGifts()

const packOfGifts = ["book", "doll", "ball"];
const reindeers = ["dasher", "dancer"];
console.log(distributeGifts(packOfGifts, reindeers));
