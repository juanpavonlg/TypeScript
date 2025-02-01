export function checkchoose(m: number, n: number): number {
  let comb = n;
  for (let x = 1; x <= n / 2; x++) {
    if (comb === m) {
      return x;
    }
    comb = comb * (n - x) / (x + 1); 
  }
  return -1;
} // checkchoose()

console.log(checkchoose(6, 4));
console.log(checkchoose(4, 2));
console.log(checkchoose(155117520, 30));
console.log(checkchoose(184756, 20));
