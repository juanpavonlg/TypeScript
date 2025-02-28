function longestConsecutive(nums: number[]): number {
  const set = new Set(nums);
  let max = 0;
  for (const num of set) {
    if (!set.has(num - 1)) {
      let len = 0;
      let next = num;
      while (set.has(next++)) {
        len++;
      }     
      max = Math.max(len, max);
    }
  }
  return max;
} // longestConsecutive()

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
console.log(longestConsecutive([1, 0, 1, 2]));
console.log(longestConsecutive([0, -1]));
