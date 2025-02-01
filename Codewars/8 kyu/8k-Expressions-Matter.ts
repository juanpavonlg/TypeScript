export function expressionsMatter(a: number, b: number, c: number): number {
  return Math.max(a + b + c, a * b * c, a * (b + c), (a + b) * c);
} // expressionsMatter()

console.log(expressionsMatter(2, 3, 4));
console.log(expressionsMatter(1, 1, 1));
