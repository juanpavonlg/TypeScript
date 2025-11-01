export function toRange(arr: number[]): string {
  const nums = [...new Set(arr.sort((a, b) => a - b))];
  let ans: string[] = [];
  for (let i = 0; i < nums.length; i++) {
    let span = 1;
    let j = i + 1;
    for (; j < nums.length; j++) {
      if (nums[j] === nums[j - 1] + 1) {
        span++;
      } else {
        break;
      }
    }
    if (span < 2) {
      ans.push(`${nums[i]}`);
    } else {
      ans.push(`${nums[i]}_${nums[j - 1]}`);
      i = j - 1;
    }
  }  
  return ans.join(",");
} // toRange()

export function toArray(str: string): number[] {
  const ranges = str ? str.split(",") : [];
  const ans: number[] = [];
  for (const range of ranges) {
    if (/_/.test(range)) {
      const [start, end] = range.split("_").map(Number);
      for (let n = start; n <= end; n++) {
        ans.push(n);
      }
    } else {
      ans.push(+range);
    }
  }
  return ans;
} // toArray()

console.log(toRange([3, 4, 5, 6, 9]));
console.log(toArray("3_6,9"));
console.log(toRange([]));
console.log(toArray(""));
