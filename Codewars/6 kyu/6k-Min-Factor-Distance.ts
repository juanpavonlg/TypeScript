export function minDistance(n: number): number {
  let last = 1;
  let min = Infinity;
  for (let d = 2; d <= n; d++) {
    if (n % d === 0) {
      const diff = d - last;
      min = Math.min(min, diff);
      last = d;
    }
  }  
  return min;
} // minDistance()

console.log(minDistance(25));
console.log(minDistance(13013));
