function subsets(nums: number[]): number[][] {
  const ans: number[][] = [];
  const sol: number[] = [];

  function backtrack(index: number) {
    if (index === nums.length) {
      ans.push([...sol]);
      return;
    }
    backtrack(index + 1);
    sol.push(nums[index]);
    backtrack(index + 1);
    sol.pop();
  } // backtrack()

  backtrack(0);
  return ans;
} // subsets()

console.log(subsets([1, 2, 3]));
console.log(subsets([0]));
