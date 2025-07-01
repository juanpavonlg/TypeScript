function isPerfectSquare(num: number): boolean {
  let l = 1;
  let r = num;
  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    const square = m * m;
    if (square === num) {
      return true;
    } else if (square < num) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
  return false;
} // isPerfectSquare()

console.log(isPerfectSquare(16));
console.log(isPerfectSquare(14));
