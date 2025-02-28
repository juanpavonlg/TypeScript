export function countSixes(n: number): number {
  return Math.floor((n - n % 2) * Math.log10(2));
} // countSixes()

for (let i = 0; i <= 580; i++) {
  console.log(i, countSixes(i));
}
