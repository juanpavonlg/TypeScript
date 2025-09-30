export function zigZagCamel(d: number, h: number): number {
  return (Math.atan(h / d) * 180) / Math.PI > 30 ? 2 * h : Math.hypot(d, h);
} // zigZagCamel()

console.log(zigZagCamel(10, 5));
console.log(zigZagCamel(149.62054142257108, 88.0292693054811));
