export function f(x: number): number {
  return x / (Math.sqrt(1 + x) + 1);
} // f()

console.log(f(1e-15));
console.log(f(1.7e-15));
console.log(f(2.1e-07));
console.log(f(4.6e-16));
console.log(f(2.8e-13));
