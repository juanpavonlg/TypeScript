function isPalindrome(x: number): boolean {
  let copy = x;
  let rev = 0;
  while (copy > 0) {
    rev = 10 * rev + copy % 10;
    if (-rev < -2_147_483_648 || rev > 2_147_483_647) {
      return false;
    }
    copy = Math.floor(copy / 10);
  }
  return x === rev;
} // isPalindrome()

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
