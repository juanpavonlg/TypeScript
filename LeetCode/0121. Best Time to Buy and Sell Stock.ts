function maxProfit(prices: number[]): number {
  let profit = 0;
  let buy = prices[0];
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buy) {
      buy = prices[i];
    } else {
      profit = Math.max(prices[i] - buy, profit);
    }
  }
  return profit;
} // maxProfit()

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]));
