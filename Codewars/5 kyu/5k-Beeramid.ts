export function beeramid(bonus: number, price: number): number {
  let max = Math.floor(bonus / price);
  let levels = 0;
  let beers = 1;
  while (beers <= max) {
    levels++;
    beers += (levels + 1) ** 2;
  }
  return levels;
} // beeramid()

console.log(beeramid(1500, 2));
console.log(beeramid(5000, 3));
