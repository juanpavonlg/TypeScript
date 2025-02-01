export function collision(x1: number, y1: number, r1: number, x2: number, y2: number, r2: number): boolean {
  return Math.hypot(x2 - x1, y2 - y1) <= r1 + r2;
} // collision()

console.log(collision(1, 1, 1, 1.1, 1.1, 0.1));
