export function squareDigitsSequence(a: number): number {
  const ans = new Set<number>();
  while (!ans.has(a)) {
    ans.add(a);
    a = a.toString().split("").map(Number).reduce((a, e) => a + e * e, 0);
  }
  return ans.size + 1;
} // squareDigitsSequence()

console.log(squareDigitsSequence(16));
console.log(squareDigitsSequence(103));
