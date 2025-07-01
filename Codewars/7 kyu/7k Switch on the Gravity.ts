export function switchGravity(arr: ("-" | "#")[][]): ("-" | "#")[][] {
  for (let r = 0; r < arr.length - 1; r++) {
    for (let c = 0; c < arr[0].length; c++) {
      if (arr[r][c] === "#") {
        let row = r;
        let free = row;
        while (row < arr.length) {
          if (arr[row][c] === "-") {
            free = row;
          }
          row++;
        }
        [arr[r][c], arr[free][c]] = [arr[free][c], arr[r][c]];
      }
    }
  }
  return arr;
} // switchGravity()

console.log(
  switchGravity([
    ["-", "#", "#", "-"],
    ["-", "-", "-", "-"],
    ["-", "-", "-", "-"],
    ["-", "-", "-", "-"],
  ])
);
console.log(
  switchGravity([
    ["-", "#", "#", "-"],
    ["-", "-", "#", "-"],
    ["-", "-", "-", "-"],
  ])
);
console.log(
  switchGravity([
    ["-", "#", "#", "#", "#", "-"],
    ["#", "-", "-", "#", "#", "-"],
    ["-", "#", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-"],
  ])
);
