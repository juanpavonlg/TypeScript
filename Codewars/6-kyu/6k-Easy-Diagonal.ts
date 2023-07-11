export function diagonal(n: number, p: number): number {
  return comb(n + 1, p + 1);
} // diagonal()

function comb(n: number, k: number): number {
  let num = 1;
  let den = 1;
  for (let i = 0; i < k; i++) {
    num *= n - i;
    den *= i + 1;
  }
  return Math.round(num / den);
} // comb()

console.log(diagonal(7, 0));
console.log(diagonal(7, 1));
console.log(diagonal(7, 2));
console.log(diagonal(7, 3));
console.log(diagonal(7, 4));
console.log(diagonal(7, 5));
