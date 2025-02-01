export function jumpingNumber(n: number) {
  const digits = n.toString().split("").map(Number);
  for (let i = 0; i < digits.length - 1; i++) {
    if (Math.abs(digits[i] - digits[i + 1]) !== 1) {
      return "Not!!";
    }
  }
  return "Jumping!!";
} // jumpingNumber()

console.log(jumpingNumber(12322));
