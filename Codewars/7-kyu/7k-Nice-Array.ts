export function isNice(arr: number[]): boolean {
  return arr.length > 0
    ? arr.every((n) => arr.includes(n - 1) || arr.includes(n + 1))
    : false;
} // isNice()

console.log(isNice([2, 10, 9, 3]));
console.log(isNice([3, 4, 5, 7]));
