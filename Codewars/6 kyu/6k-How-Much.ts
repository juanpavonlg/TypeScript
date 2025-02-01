export function howMuch(m: number, n: number): string[][] {
  const ans: string[][] = [];
  if (m > n) {
    [m, n] = [n, m];
  }
  for(let i = m; i <= n; i++) {
    if (i % 7 === 2 && i % 9 === 1) {
      ans.push([`M: ${i}`, `B: ${~~(i / 7)}`, `C: ${~~(i / 9)}`]);
    }
  }
  return ans;
} // howMuch()

console.log(howMuch(1, 100));
console.log(howMuch(1000, 1100));
console.log(howMuch(2950, 2950));
console.log(howMuch(10000, 9950));
