export function nextBigger(n: number): number {
  const digits = n.toString().split("").map(Number);
  let l = digits.length - 2;
  while (l >= 0) {
    const next = l + 1;
    let i = -1;
    for (let r = next; r < digits.length; r++) {
      if (digits[r] - digits[l] > 0) {
        i = r;
      }
    }
    if (i >= 0) {
      [digits[l], digits[i]] = [digits[i], digits[l]];
      digits.splice(next, digits.length - next, ...digits.slice(next).sort());
      return +digits.join("");
    }
    l--;
  }
  return -1;
} // nextBigger()

console.log(nextBigger(1653));
console.log(nextBigger(513));
console.log(nextBigger(2017));
console.log(nextBigger(9));
console.log(nextBigger(111));
console.log(nextBigger(531));
console.log(nextBigger(59884848459853));
  