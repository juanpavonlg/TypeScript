export function nextHigher(n: number): number {
  const digits = [0, ...n.toString(2).split("").map(Number)];
  let index0 = -1;
  for (let i = digits.length - 2; i >= 0; i--) {
    if (digits[i] < digits[i + 1]) {
      index0 = i;
      break;
    }
  }
  const index1 = digits.lastIndexOf(1);
  [digits[index0], digits[index1]] = [digits[index1], digits[index0]];
  const next = index0 + 1;
  digits.splice(next, digits.length - next, ...digits.slice(next).sort());
  return parseInt(digits.join(""), 2);
} // nextHigher()

console.log(nextHigher(129));
console.log(nextHigher(127));
console.log(nextHigher(1));
console.log(nextHigher(323423));
console.log(nextHigher(128));
console.log(nextHigher(1022));
