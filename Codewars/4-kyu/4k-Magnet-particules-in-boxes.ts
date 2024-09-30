export function doubles(maxk: number, maxn: number): number {
  let s = 0;
  for (let k = 1; k <= maxk; k++) {
    const pow = 2 * k;
    let u = 0;
    for (let n = 1; n <= maxn; n++) {
      u += 1 / (k * (n + 1) ** pow);
    }
    if (u <= 1e-6) {
      break;
    }
    s += u;
  }
  return s;
} // doubles()

console.log(doubles(1, 3));
console.log(doubles(1, 10));
console.log(doubles(10, 100));
console.log(doubles(297, 23905));
