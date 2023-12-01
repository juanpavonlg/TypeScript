export function solve(a: number, b: number, c: number, alpha: number, beta: number, gamma: number): number[] {
  const factor = Math.PI / 180;
  const [aRad, bRad, gRad] = [alpha, beta, gamma].map((e, i) => (e + 90 * i) * factor);
  const rx = a * Math.cos(aRad) + b * Math.cos(bRad) + c * Math.cos(gRad);
  const ry = a * Math.sin(aRad) + b * Math.sin(bRad) + c * Math.sin(gRad);
  const r = Math.round(Math.hypot(rx, ry));
  const deg = 180 + Math.atan(ry / rx) / factor;
  const min = deg % 1 * 60;
  const sec = min % 1 * 60;
  return [r, Math.floor(deg), Math.floor(min), Math.floor(sec)];
} // solve()

console.log(solve(12, 20, 18, 45, 30, 60));
