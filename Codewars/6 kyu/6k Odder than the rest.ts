export function oddest(a: number[]): number | null {
  const oddities = a.map(getOddity);
  const maxOddity = Math.max(...oddities);
  const i = oddities.indexOf(maxOddity);
  const j = oddities.indexOf(maxOddity, i + 1);
  return i !== -1 && j === -1 ? a[i] : null;
} // oddest()

function getOddity(n: number): number {
  return n === -1 ? Infinity : n % 2 ? 1 + getOddity((n - 1) / 2) : 0;
} // getOddity()

console.log(oddest([1, 2]));
console.log(oddest([1, 3]));
console.log(oddest([1, 5]));
console.log(oddest([0]));
