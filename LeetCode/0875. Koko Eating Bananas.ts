function minEatingSpeed(piles: number[], h: number): number {
  let l = 1;
  let r = Math.max(...piles);
  while (l < r) {
    const k = ((l + r) / 2) | 0;
    if (works(piles, k) > h) {
      l = k + 1;
    } else {
      r = k;
    }
  }
  return l;
} // minEatingSpeed()

function works(piles: number[], k: number): number {
  let hours = 0;
  for (const pile of piles) {
    hours += Math.ceil(pile / k);
  }
  return hours;
} // works()

console.log(minEatingSpeed([3, 6, 7, 11], 8));
console.log(minEatingSpeed([30, 11, 23, 4, 20], 5));
console.log(minEatingSpeed([30, 11, 23, 4, 20], 6));
