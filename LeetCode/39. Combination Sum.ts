function combinationSum(candidates: number[], target: number): number[][] {
  const ans: number[][] = [];

  function findCombs(n: number, target: number, comb: number[]) {
    if (target === 0) {
      ans.push([...comb]);
      return;
    }
    for (let i = n; i < candidates.length; i++) {
      if (candidates[i] <= target) {
        comb.push(candidates[i]);
        findCombs(i, target - candidates[i], comb);
        comb.pop();
      }
    }
  }

  findCombs(0, target, []);
  return ans;
} // combinationSum()

console.log(combinationSum([2, 3, 6, 7], 7));
console.log(combinationSum([2, 3, 5], 8));
console.log(combinationSum([2], 1));
