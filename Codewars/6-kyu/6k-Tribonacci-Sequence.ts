export function tribonacci([a, b, c]: [number, number, number], n: number): number[] {
  const trib = [a, b, c];
  for (let i = 3; i < n; i++) {
    trib[i] = trib[i - 1] + trib[i - 2] + trib[i - 3];
  }
  return trib.slice(0, n);
} // tribonacci()

console.log(tribonacci([1, 1, 1], 10));
console.log(tribonacci([0, 0, 1], 10));
