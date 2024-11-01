export function F(n: number): number {
  return n ? n - M(F(n - 1)) : 1;
} // F()

export function M(n: number): number {
  return n ? n - F(M(n - 1)) : 0;
} // M()

console.log(F(0));
console.log(M(0));
console.log(F(1));
console.log(M(1));
console.log(F(2));
console.log(M(2));
