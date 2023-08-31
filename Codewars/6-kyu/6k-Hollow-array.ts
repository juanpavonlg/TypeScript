export function isHollow(x: number[]): boolean {
  const s = x.indexOf(0);
  const f = x.lastIndexOf(0);
  return x.slice(s, f + 1).every((e) => e === 0) && f - s > 1 && s - 0 === x.length - 1 - f;
} // isHollow()

console.log(isHollow([-1, 0, 0, 0, 3]));
console.log(isHollow([1, 0, 0, 0, 0]));
console.log(isHollow([0, 1, 0, 0, 0, 1, 0]));
console.log(isHollow([1, 3, 0, 0, -2, 7, 8, 9, 0, 5, 4]));
