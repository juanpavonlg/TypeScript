function checkJump(heights: number[]) {
  const left = heights.splice(0, heights.indexOf(Math.max(...heights)));
  const goesUp = left.slice(1).every((e, i) => e >= left[i]);
  const goesDown = heights.slice(1).every((e, i) => e <= heights[i]);
  return goesUp && goesDown && left.length > 0 && heights.length > 1;
} // checkJump()

console.log(checkJump([1, 3, 8, 5, 2]));
console.log(checkJump([1, 7, 3, 5]));
console.log(checkJump([7, 5, 3, 1]));
console.log(checkJump([1, 3, 5, 7]));
console.log(checkJump([1, 2, 2, 2, 1]));
