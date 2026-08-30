function largestRectangleArea(heights: number[]): number {
  let area = 0;
  const stack: [number, number][] = [];
  for (let i = 0; i < heights.length; i++) {
    let start = i;
    while (stack.length && heights[i] < stack.at(-1)![0]) {
      const [height, j] = stack.pop()!;
      area = Math.max(height * (i - j), area);
      start = j;
    }
    stack.push([heights[i], start]);
  }
  while (stack.length) {
    const [height, j] = stack.pop()!;
    area = Math.max(height * (heights.length - j), area);
  }
  return area;
} // largestRectangleArea()

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));
console.log(largestRectangleArea([2, 4]));
console.log(largestRectangleArea([2, 1, 2]));
