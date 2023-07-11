export function maxBall(v0: number): number {
  let h = 0;
  let max = 0;
  let tenth = 0;
  v0 = v0 / 3.6;
  while (h >= max) {
    const t = ++tenth / 10;
    max = h;
    h = v0 * t - 0.5 * 9.81 * t * t;
  }
  return tenth - 1;
} // maxBall()

console.log(maxBall(15));
console.log(maxBall(37));
