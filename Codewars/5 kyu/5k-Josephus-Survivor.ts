export function josephusSurvivor(n: number, k: number): number {
  return n === 1 ? 1 : (josephusSurvivor(n - 1, k) + k - 1) % n + 1;
} // josephusSurvivor()

console.log(josephusSurvivor(7, 3));
console.log(josephusSurvivor(41, 2));
