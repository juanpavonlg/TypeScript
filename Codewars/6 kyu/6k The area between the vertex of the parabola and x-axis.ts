export function areaBetweenRoots(a: number, b: number, c: number): number {
  const det = b * b - 4 * a * c;
  if (det <= 0) {
    return 0;
  }
  const x1 = (-b - Math.sqrt(det)) / (2 * a);
  const x2 = (-b + Math.sqrt(det)) / (2 * a);
  const calculate = (x: number) => (a * x ** 3) / 3 + (b * x * x) / 2 + c * x;
  return calculate(x1) - calculate(x2);
} // areaBetweenRoots()

console.log(areaBetweenRoots(3, 10, 20));
console.log(areaBetweenRoots(1, -10, 25));
console.log(areaBetweenRoots(3, -42, 144));
console.log(areaBetweenRoots(1, -10, 21));
console.log(areaBetweenRoots(12.225867, 54.249312, -293.764));
console.log(areaBetweenRoots(256, 2023, -3879));
console.log(areaBetweenRoots(4000, 4000, -4000));
