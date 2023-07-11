export function potatoes(p0: number, w0: number, p1: number): number {
  return ~~(w0 * (100 - p0) / (100 - p1));
} // potatoes()

console.log(potatoes(99, 100, 98));
console.log(potatoes(82, 127, 80));
