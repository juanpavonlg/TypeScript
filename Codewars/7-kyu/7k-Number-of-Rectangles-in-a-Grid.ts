export function numberOfRectangles(m: number, n: number): number {
  return (m + m * m) * (n + n * n) / 4;
} // numberOfRectangles()

console.log(numberOfRectangles(3, 2));
console.log(numberOfRectangles(4, 4));
