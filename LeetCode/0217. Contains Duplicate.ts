function containsDuplicate(nums: number[]): boolean {
  const numsSet = new Set<number>();
  for (const num of nums) {
    if (numsSet.has(num)) {
      return true;
    }
    numsSet.add(num);
  }
  return false;
} // containsDuplicate()

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
