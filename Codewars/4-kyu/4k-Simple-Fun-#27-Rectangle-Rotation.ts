export function rectangleRotation(a: number, b: number): number {
  const x = Math.floor(a / Math.sqrt(2));
  const y = Math.floor(b / Math.sqrt(2));
  const r = (x + 1) * (y + 1) + x * y;
  return r + r % 2 - 1;
} // rectangleRotation()

console.log(rectangleRotation(6, 4));
console.log(rectangleRotation(16, 20));
