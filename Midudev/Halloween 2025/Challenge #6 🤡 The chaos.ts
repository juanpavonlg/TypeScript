function surviveRoulette(n: number, k: number): number {
  let i = 1;
  let survivor = 0;
  while (i <= n) {
    survivor = (survivor + k) % i;
    i++;
  }
  return survivor;
  return n === 1 ? 0 : (surviveRoulette(n - 1, k) + k) % n;
} // surviveRoulette()

console.log(surviveRoulette(4, 2));
console.log(surviveRoulette(5, 3));
console.log(surviveRoulette(5, 10));
console.log(surviveRoulette(6, 2));
console.log(surviveRoulette(1, 1));
