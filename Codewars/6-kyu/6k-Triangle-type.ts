/* Should return ᐃ type:
  0 : if ᐃ cannot be made with given sides
  1 : acute ᐃ
  2 : right ᐃ
  3 : obtuse ᐃ
*/
export function triangleType(a: number, b: number, c: number): number {
  if (a >= b + c || b >= a + c || c >= a + b) {
    return 0;
  }
  const [aa, bb, cc] = [a * a, b * b, c * c];
  const r = [aa - bb - cc, bb - aa - cc, cc - aa - bb];
  if (r.every((e) => e < 0)) {
    return 1;
  }
  if (r.some((e) => e === 0)) {
    return 2;
  }
  return 3;
} // triangleType()

console.log(triangleType(2, 4, 6));
console.log(triangleType(8, 5, 7));
console.log(triangleType(3, 4, 5));
console.log(triangleType(7, 12, 8));
