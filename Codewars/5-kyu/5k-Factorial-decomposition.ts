export function decomp(n: number): string {
  let ans: { [i: number]: number } = {};
  for (let i = 2; i <= n; i++) {
    let factor = i;
    let prime = 2;
    while (factor !== 1) {
      if (factor % prime === 0) {
        factor /= prime;
        ans[prime] = ans[prime] + 1 || 1;
      } else {
        prime++;
      }
    }
  }
  return Object.entries(ans)
    .map(([k, v]) => `${k}${v > 1 ? `^${v}` : ""}`)
    .join(" * ");
} // decomp()

console.log(decomp(5));
console.log(decomp(17));
console.log(decomp(25));
console.log(decomp(4000));
