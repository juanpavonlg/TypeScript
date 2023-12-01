export function f(x: number, y: number, z: number): number {
  return x + y + z + 2 * (x * y + x * z + y * z) + 3 * x * y * z;
} // function()

console.log(f(1, 1, 1));
console.log(f(2, 1, 1));
console.log(f(2, 2, 2));
console.log(f(1, 2, 3));
