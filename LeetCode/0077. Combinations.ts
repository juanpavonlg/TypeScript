function combine(n: number, k: number): number[][] {
  const ans: number[][] = [];
  const sol: number[] = [];

  function backtrack(num: number) {
    if (sol.length === k) {
      ans.push([...sol]);
      return;
    }
    for (let i = num; i <= n; i++) {
      sol.push(i);
      backtrack(i + 1);
      sol.pop();
    }
  } // backtrack()

  backtrack(1);
  return ans;
} // combine()

console.log(combine(4, 2));
console.log(combine(1, 1));
