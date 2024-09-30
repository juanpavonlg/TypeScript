export const f = (x: number, cc: { a: number; b: number; c: number }): number => {
  const values = Object.values(cc);
  return values[(values.indexOf(x) + 1) % 3];
}; // f()

console.log(f(3, { a: 3, b: 4, c: 5 }));
