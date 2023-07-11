export function specialNumber(n: number) {
  return /[6-9]/.test(n.toString()) ? "NOT!!" : "Special!!";
} // specialNumber()

console.log(specialNumber(7));

