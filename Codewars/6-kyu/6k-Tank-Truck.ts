export function tankvol(h: number, d: number, vt: number) {
  const r = d / 2;
  const angle = 2 * Math.acos((r - h) / r);
  const aSector = (r ** 2 * angle) / 2;
  const base = Math.sqrt(r ** 2 - (r - h) ** 2);
  const aTriangle = base * (r - h);
  const l = vt / (Math.PI * r ** 2);
  return ~~((aSector - aTriangle) * l);
} // tankvol()

console.log(tankvol(40, 120, 3500));
console.log(tankvol(60, 120, 3500));
console.log(tankvol(80, 120, 3500));
