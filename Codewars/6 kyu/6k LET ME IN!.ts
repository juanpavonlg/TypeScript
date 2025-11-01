export function getInLine(arr: number[]): number {
  let minutes = 1;
  arr.sort((a, b) => {
    if ((a > 0 && a < 3) || (b > 0 && b < 3)) {
      if (a === 0 || b === 0) {
        return b - a;
      }
      return a - b;
    }
    return 0;
  });
  while (arr[0] !== 0) {
    if (arr.shift() === 1) {
      swap(arr);
    }
    minutes++;
  }
  return minutes;
} // getInLine()

function swap(arr: number[]) {
  let [l, r] = [0, arr.length - 1];
  while (l < r) {
    if (arr[l] !== 1 && arr[l] !== 3 && arr[r] !== 3) {
      [arr[l], arr[r]] = [arr[r], arr[l]];
    }
    l++, r--;
  }
} // swap()

console.log(getInLine([1, 1, 3, 2, 0]));
console.log(getInLine([0, 8, 2, 1, 4, 2, 12, 3, 2]));
