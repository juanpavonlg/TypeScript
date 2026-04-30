function minCostClimbingStairs(cost: number[]): number {
  let [prev, curr] = [cost[0], cost[1]];
  for (let i = 2; i <= cost.length; i++) {
    [prev, curr] = [curr, (cost[i] ?? 0) + Math.min(prev, curr)];
  }
  return curr;
  // let [prev, curr] = [0, 0];
  // for (let i = 2; i <= cost.length; i++) {
  //   [prev, curr] = [curr, Math.min(cost[i - 1] + curr, cost[i - 2] + prev)];
  // }
  // return curr;
  // let [curr, next] = [cost.at(-2)!, cost.at(-1)!];
  // for (let i = cost.length - 3; i >= 0; i--) {
  //   [curr, next] = [cost[i] + Math.min(curr, next), curr];
  // }
  // return Math.min(curr, next);
  // const dp: number[] = new Array(cost.length);
  // for (let i = cost.length - 1; i >= 0; i--) {
  //   dp[i] = cost[i] + Math.min(dp[i + 1] ?? 0, dp[i + 2] ?? 0);
  // }
  // return Math.min(dp[0], dp[1]);
} // minCostClimbingStairs()

console.log(minCostClimbingStairs([10, 15, 20]));
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
