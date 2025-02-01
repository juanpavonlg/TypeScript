export function checkParity(parity: string, bin: string) {
  return bin.replace(/0/g, "").length % 2 ? parity === "even" ? 1 : 0 : parity === "odd" ? 1 : 0;
} // checkParity()

console.log(checkParity("even","101010"));
console.log(checkParity("odd","101010"));
console.log(checkParity("even","101011"));
console.log(checkParity("odd","101011"));
