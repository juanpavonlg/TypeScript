export function removeNb(n: number): number[][] {
  const sum = (1 + n) * n / 2;
  const ans: [number, number][] = [];
  for (let a = Math.ceil((sum - n) / (n + 1)); a < Math.floor(Math.sqrt(sum)); a++) {
    const b = (sum - a) / (a + 1);
    if (b % 1 === 0) {
      ans.push([a, b], [b, a]);
    }
  }
  return ans.sort((a, b) => a[0] - b[0]);
} // removeNb()

console.log(removeNb(26));
console.log(removeNb(101));
console.log(removeNb(102));
console.log(removeNb(110));
console.log(removeNb(1000003));
console.log(removeNb(358));
