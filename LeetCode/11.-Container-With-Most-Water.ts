function maxArea(height: number[]): number {
  let [area, l, r] = [0, 0, height.length - 1];
  while (l < r) {
    area = Math.max(Math.min(height[l], height[r]) * (r - l), area);
    height[l] < height[r] ? l++ : r--;
  }
  return area;
} // maxArea()

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));
