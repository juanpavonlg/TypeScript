export function pointInCircle(x: number, y: number): boolean {
  return Math.sqrt(x ** 2 + y ** 2) < 1;
} // pointInCircle()

console.log(pointInCircle(0.5, 0.5));
console.log(pointInCircle(-1, 0.5));
