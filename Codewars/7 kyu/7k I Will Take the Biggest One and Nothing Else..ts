export function maxIntChain(n: number): number {
  return n > 4 ? (Math.ceil(n / 2) - 1) * (Math.floor(n / 2) + 1) : -1;
} // maxIntChain()

console.log(maxIntChain(26));
