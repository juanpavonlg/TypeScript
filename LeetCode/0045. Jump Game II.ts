function jump(nums: number[]): number {
  let jumps = 0;
  let [l, r] = [0, 0];
  while (r < nums.length - 1) {
    let longest = 0;
    for (let i = l; i <= r; i++) {
      longest = Math.max(i + nums[i], longest);
    }
    l = r + 1;
    r = longest;
    jumps++;
  }
  return jumps;
  // Para 55. Jump Game:
  // if (nums.length <= 1) {
  //   return 0;
  // }
  // let jumps = Number.longest_SAFE_INTEGER;

  // function findCombs(n: number, comb: number[]) {
  //   if (n === nums.length - 1 && comb.length < jumps) {
  //     console.log(n, comb);
      
  //     jumps = comb.length;
  //     return;
  //   }
  //   for (let j = 1; j <= nums[n]; j++) {
  //     comb.push(n);
  //     findCombs(n + j, comb);
  //     comb.pop();
  //   }
  // }

  // findCombs(0, []);
  // return jumps;
} // jump()

console.log(jump([2, 3, 1, 1, 4]));
console.log(jump([2, 3, 0, 1, 4]));
console.log(jump([5, 6, 4, 4, 6, 9, 4, 4, 7, 4, 4, 8, 2, 6, 8, 1, 5, 9, 6, 5, 2, 7, 9, 7, 9, 6, 9, 4, 1, 6, 8, 8, 4, 4, 2, 0, 3, 8, 5]));
