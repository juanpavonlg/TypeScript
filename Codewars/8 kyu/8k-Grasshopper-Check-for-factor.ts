export function checkForFactor(base: number, factor: number) {
  return !(base % factor);
} // checkForFactor()

console.log(checkForFactor(63, 7));
