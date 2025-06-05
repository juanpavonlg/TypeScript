function getPermutation(n: number, k: number): string {
  const nums = Array.from({length: n}, (_, i) => i + 1);
  let perm = "";
  k--;
  while (n--) {
    const fact = factorial(n);
    const index = Math.floor(k / fact);
    k %= fact;
    perm += nums.splice(index, 1)[0];
  }
  return perm;
} // getPermutation()

function factorial(n: number): number {
  return n > 1 ? n * factorial(n - 1) : 1;
} // fact()

console.log(getPermutation(3, 3));
console.log(getPermutation(4, 9));
console.log(getPermutation(3, 1));
console.log(getPermutation(9, 206490));
