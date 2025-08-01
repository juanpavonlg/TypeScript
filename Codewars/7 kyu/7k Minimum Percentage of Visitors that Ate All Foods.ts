export function minimumPercentage(foods: number[]): number {
  foods.sort((a, b) => a - b);
  for (let i = 1; i < foods.length; i++) {
    foods[0] -= 100 - foods[i];
  }
  return Math.max(foods[0], 0);
} // minimumPercentage()

console.log(minimumPercentage([76]));
console.log(minimumPercentage([50, 50]));
console.log(minimumPercentage([65, 80, 80, 90]));
