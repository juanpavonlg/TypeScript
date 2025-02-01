export function height(n: number): string {
  let h = 2_000_000;
  let sum = h;
  while (n--) {
    sum += h *= 0.4;
  }
  return sum.toFixed(3);
} // height()

console.log(height(0));
console.log(height(7));
