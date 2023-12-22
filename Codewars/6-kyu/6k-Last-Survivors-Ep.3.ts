export function lastSurvivors(arr: string[], nums: number[]): string {
  for (let c = 0; c < nums.length; c++) {
    let del = 0;
    for (let r = arr.length - 1; r >= 0 && del < nums[c]; r--) {
      if (arr[r][c] !== " ") {
        arr[r] = `${arr[r].slice(0, c)} ${arr[r].slice(c + 1)}`;
        del++;
      }
    }
  }
  return arr.join("").replace(/ /g, "");
} // lastSurvivors()

console.log(lastSurvivors(["to   ", "  tal", "it   ", "  ari", "an   ", "  ism"], [7, 6, 4, 2, 1]));
console.log(lastSurvivors(["help us we are dying"], [2, 0, 2, 1, 2, 0, 2, 1, 2, 0, 2, 1, 2, 0, 2, 1, 2, 0, 2, 1]));
