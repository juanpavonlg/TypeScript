function maxProfit(prices: number[]): number {
  let profit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    const diff = prices[i + 1] - prices[i];
    if (diff > 0) {
      profit += diff;
    }
  }
  return profit;
} // maxProfit()

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([1, 2, 3, 4, 5]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([0, 5, 5, 6, 2, 1, 1, 3]));
