function reverse(x: number): number {
  const sign = Math.sign(x);
  x = Math.abs(x);
  let inv = 0;
  while (x) {
    inv = 10 * inv + x % 10;
    if (inv > 2_147_483_647 || -inv < -2_147_483_648) {
      return 0;
    }
    x = Math.floor(x / 10);
  }
  return sign * inv;
} // reverse()

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
