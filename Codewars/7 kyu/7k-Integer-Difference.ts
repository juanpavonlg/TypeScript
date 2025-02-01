export const intDiff = (arr: number[], n: number): number => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      count += Math.abs(arr[i] - arr[j]) === n ? 1 : 0;
    }
  }
  return count;
} // intDiff()

console.log(intDiff([1, 1, 5, 6, 9, 16, 27], 4));
