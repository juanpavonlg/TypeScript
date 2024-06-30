export const closestMultiple10 = (num: number): number => {
  return Math.round(num / 10) * 10;
}; // closestMultiple10()

console.log(closestMultiple10(22));
console.log(closestMultiple10(25));
console.log(closestMultiple10(37));
