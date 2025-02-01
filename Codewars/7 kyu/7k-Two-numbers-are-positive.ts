export function twoArePositive(a: number, b: number, c: number): boolean {
  return [a, b, c].reduce((a, e) => a + (e > 0 ? 1 : 0), 0) === 2;
  return [a, b, c].filter((e) => e > 0).length === 2;
} // twoArePositive()

console.log(twoArePositive(2, 4, -3));
console.log(twoArePositive(-4, 6, 0));
