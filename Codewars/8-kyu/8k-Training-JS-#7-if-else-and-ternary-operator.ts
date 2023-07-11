export function saleHotdogs(n: number): number {
  return n * (n < 5 ? 100 : n < 10 ? 95 : 90);
} // saleHotdogs()

console.log(saleHotdogs(15));
