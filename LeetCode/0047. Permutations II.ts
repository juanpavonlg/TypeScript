function permuteUnique(nums: number[]): number[][] {
  const perms: number[][] = [];
  const count: {[key: number]: number} = {};
  for (const num of nums) {
    count[num] = count[num] ? ++count[num] : 1;
  }

  function dfs(sol: number[]) {
    if (sol.length === nums.length) {
      perms.push([...sol]);
      return;
    }
    for (const num in count) {
      if (count[num]) {
        count[num]--;
        sol.push(+num);
        dfs(sol);
        sol.pop();
        count[num]++;
      } 
    }
  } // dfs()

  dfs([]);
  return perms;
} // permuteUnique()

console.log(permuteUnique([1, 1, 2]));
console.log(permuteUnique([1, 2, 3]));
