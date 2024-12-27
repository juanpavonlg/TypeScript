function combinationSum2(candidates: number[], target: number): number[][] {
  const combs: number[][] = [];
  candidates.sort((a, b) => a - b);
  console.log(candidates);
  

  function findCombs(n: number, target: number, comb: number[]) {
    if (target === 0) {
      combs.push([...comb]);
      return;
    }
    let prev = -1;
    for (let i = n; i < candidates.length; i++) {
      if (candidates[i] === prev) {
        continue;
      }
      if (candidates[i] <= target) {
        comb.push(candidates[i]);
        findCombs(i + 1, target - candidates[i], comb);
        comb.pop();
        prev = candidates[i];
      }
    }
  }

  findCombs(0, target, []);
  return combs;
} // combinationSum2()

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
console.log(combinationSum2([2, 5, 2, 1, 2], 5));
