export function balancedNum(number: number): string {
  let left = 0;
  let right = 0;
  const digits = number.toString().split("").map(Number);
  const limit = ~~(digits.length / 2) + (digits.length % 2 ? 0 : -1);
  for (let i = 0; i < limit; i++) {
    left += digits[i];
    right += digits[digits.length - 1 - i];
  }
  return left === right ? "Balanced" : "Not Balanced";
} // balancedNum()

console.log(balancedNum(131));
console.log(balancedNum(7));
console.log(balancedNum(112));
console.log(balancedNum(131231));
