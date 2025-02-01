export function chooseBestSum(t: number, k: number, ls: number[]): number | null {
  const towns: number[] = [];
  let ans = 0;
  
  function combinations(town: number) {
    if (towns.length === k) {
      const sum = towns.reduce((a, e) => a + e);
      if (sum <= t && sum > ans) {
        ans = sum;
      }
      return;
    }
    for (let i = town; i < ls.length; i++) {
      towns.push(ls[i])
      combinations(i + 1);
      towns.pop();
    }
  }

  combinations(0);
  return ans ? ans : null;
} // chooseBestSum()

console.log(chooseBestSum(174, 3, [50, 55, 57, 58, 60]));
console.log(chooseBestSum(163, 3, [50, 55, 56, 57, 58]));
console.log(chooseBestSum(163, 3, [50]));
console.log(chooseBestSum(230, 3, [91, 74, 73, 85, 73, 81, 87]));
console.log(chooseBestSum(880, 8, [100, 76, 56, 44, 89, 73, 68, 56, 64, 123, 2333, 144, 50, 132, 123, 34, 89]));
