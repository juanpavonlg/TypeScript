export function sakuraFall(v: number): number {
  return v > 0 ? 400 / v : 0;
} // sakuraFall()

console.log(sakuraFall(5));
console.log(sakuraFall(10));
console.log(sakuraFall(200));
console.log(sakuraFall(-1));
console.log(sakuraFall(0));
