function coinChange(coins: number[], amount: number): number {
  const dp = new Array(amount + 1).fill(0);
  for (let i = 1; i <= amount; i++) {
    let min = Infinity;
    for (const coin of coins) {
      if (coin <= i) {
        min = Math.min(dp[i - coin] + 1, min);
      }
    }
    dp[i] = min;
  }
  return dp[amount] < Infinity ? dp[amount] : -1;
} // coinChange()

console.log(coinChange([1, 5, 2], 11));
console.log(coinChange([2], 3));
console.log(coinChange([1], 0));
