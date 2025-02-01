export function disariumNumber(n: number): string {
  const digits = n.toString().split("").map(Number);
  return digits.reduce((sum, d, i) => sum += d ** (i + 1), 0) === n ? "Disarium !!" : "Not !!";
} // disariumNumber()

console.log(disariumNumber(89));
