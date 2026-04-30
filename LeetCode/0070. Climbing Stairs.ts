function climbStairs(n: number): number {
  let [prev, curr] = [1, 2];
  for (let i = 3; i <= n; i++) {
    [prev, curr] = [curr, prev + curr];
  }
  return n > 1 ? curr : prev;
} // climbStairs()

console.log(climbStairs(2));
console.log(climbStairs(3));
