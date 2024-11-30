function findClosestNumber(nums: number[]): number {
  let closest = nums[0];
  for (const num of nums) {
    const absNum = Math.abs(num);
    const absClosest = Math.abs(closest);
    if (absNum < absClosest) {
      closest = num;
    } else if (absNum === absClosest) {
      if (num > closest) {
        closest = num;
      }
    }
  }
  return closest;
} // findClosestNumber()

console.log(findClosestNumber([-4, -2, 1, 4, 8]));
console.log(findClosestNumber([2, -1, 1]));
