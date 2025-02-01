export const sxore = function (n: number): number {
  return [n, 1, n + 1, 0][n % 4];
}; // sxore()

console.log(sxore(0));
console.log(sxore(1));
console.log(sxore(50));
console.log(sxore(1000000));
console.log(sxore(999999999999999));
