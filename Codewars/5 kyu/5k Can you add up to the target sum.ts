export function getNumbers(numbers: number[], target: number): number[] {
  const memo: {[key: number]: number[] | null} = {};

  function dfs(curr: number): number[] | null {
    if (curr === 0) {
      return [];
    }
    if (curr in memo) {
      return memo[curr];
    }
    for (const num of numbers) {
      if (num <= curr) {
        const res = dfs(curr - num);
        if (res !== null) {
          memo[curr] = [num, ...res];
          return memo[curr];
        }
      }
    }
    memo[curr] = null;
    return null;
  } // dfs()

  return dfs(target) ?? [];
} // getNumbers()

console.log(getNumbers([100, 25, 15, 7, 3], 24));
console.log(getNumbers([100, 25, 15, 7, 3], 53));
console.log(getNumbers([100, 25, 15, 7, 3], 35));
console.log(getNumbers([100, 25, 15, 7, 3], 107));
console.log(getNumbers([100, 25, 15, 7, 3], 57));
console.log(getNumbers([100, 25, 15, 7, 3], 301));
console.log(getNumbers([35, 20, 7], 81));
console.log(getNumbers([100, 25, 15, 7, 3], 4));
console.log(getNumbers([10, 8, 6, 4, 2], 9999));
console.log(getNumbers([81, 27, 9, 3], 4913));
