export function climbingStairs(cost: number[]): number {
  const minCosts = [0, 0];
  for (let i = 2; i <= cost.length; i++) {
    const minCost = Math.min(cost[i - 1] + minCosts[i - 1], cost[i - 2] + minCosts[i - 2]);
    minCosts.push(minCost);
  }
  return minCosts[minCosts.length - 1];
} // climbingStairs()

console.log(climbingStairs([0, 2, 2, 1]));
console.log(climbingStairs([0, 2, 3, 2]));
console.log(climbingStairs([10, 15, 20]));
console.log(climbingStairs([0, 0, 0, 0, 0, 0]));
