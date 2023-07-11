export function maxTriSum(nums: number[]): number  {
   let sum = 0;
   nums = new Array(...new Set(nums));
   for (let i = 0; i < 3; i++) {
      sum += nums.splice(nums.indexOf(Math.max(...nums)), 1)[0];
   }
   return sum;
} // maxTriSum()

console.log(maxTriSum([3, 2, 6, 8, 2, 3]));
