export const stringy = (n: number): string => {
  return Array.from({ length: n }, (_, i) => (i + 1) % 2).join("");
}; // stringy()

console.log(stringy(6));
console.log(stringy(4));
console.log(stringy(12));
