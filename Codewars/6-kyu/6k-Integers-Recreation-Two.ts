export const prod2sum = (a: number, b: number, c: number, d: number): number[][] => {
  const sols = new Set([a * c + b * d, a * d + b * c, a * c - b * d, a * d - b * c].map((e) => Math.abs(e)));                        
  const n = (a * a + b * b) * (c * c + d * d);
  const ans: [number, number][] = [];
  const sqrt = Math.floor(Math.sqrt(n));
  for (let e = sqrt; e >= sqrt / 2; e--) {
    const f = Math.floor(Math.sqrt(n - e * e));
    const tuple: [number, number] = e > f ? [f, e] : [e, f];
    if (e * e + f * f === n && sols.has(e) && sols.has(f)) {
      if (!ans.contains(tuple)) {
        ans.push(tuple);
      }
    }
  }
  return ans;
  const [e1, e2, f2, f1] = [a * c + b * d, a * d + b * c, a * c - b * d, a * d - b * c].map((e) => Math.abs(e)).sort((a, b) => a - b);
  return e1 !== e2 ? [[e1, f1], [e2, f2]] : [[e1, f1]];
} // prod2sum()

Array.prototype.contains = function (tuple) {
  for (const element of this) {
    if (element[0] === tuple[0] && element[1] === tuple[1]) {
      return true;
    }
  }
  return false;
} // contains()

declare global {
  interface Array<T> {
    contains(tuple: T): boolean;
  }
}

console.log(prod2sum(1, 2, 1, 3));
console.log(prod2sum(2, 3, 4, 5));
console.log(prod2sum(1, 2, 2, 3));
console.log(prod2sum(1, 1, 3, 5));
console.log(prod2sum(1, 20, -4, -5));
console.log(prod2sum(0, 0, 0, 0));
console.log(prod2sum(27, 27, 25, 239));
