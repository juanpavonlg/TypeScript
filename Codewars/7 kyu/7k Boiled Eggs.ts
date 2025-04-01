export function cookingTime(eggs: number): number {
  return 5 * Math.ceil(eggs / 8);
} // cookingTime()

console.log(cookingTime(0));
console.log(cookingTime(5));
console.log(cookingTime(10));
