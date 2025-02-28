function permute(nums: number[]): number[][] {
  const perms: number[][] = [];

  function dfs(sol: number[]) {
    if (sol.length === nums.length) {
      perms.push([...sol]);
      return;
    }
    nums.forEach((num) => {
      if (!sol.includes(num)) {
        sol.push(num);
        dfs(sol);
        sol.pop();
      }
    });
  } // dfs()

  dfs([]);
  return perms;
} // permute()

console.log(permute([1, 2, 3]));
console.log(permute([0, 1]));
console.log(permute([1]));
