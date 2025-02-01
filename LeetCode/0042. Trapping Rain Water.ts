function trap(height: number[]): number {
  const gaps: [number, number][] = [];
  for (let i = 0; i < height.length - 1; i++) {
    if (height[i]) {
      let min = Number.MAX_VALUE;
      let end = -1;
      for (let j = i + 1; j < height.length; j++) {
        if (height[j] >= height[i]) {
          end = j;
          break;
        } else {
          const diff = height[i] - height[j];
          if (diff <= min) {
            end = j;
            min = diff;
          }
        }
      }
      if (end - i > 1) {
        gaps.push([i, end]);
      }
      i = end - 1;
    }
  }
  let traped = 0;
  for (const gap of gaps) {
    const top = Math.min(height[gap[0]], height[gap[1]]);
    for (let k = gap[0] + 1; k <= gap[1] - 1; k++) {
      traped += top - height[k];
    }
  }
  return traped;
} // trap()

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log(trap([4, 2, 0, 3, 2, 5]));
console.log(trap([6, 8, 5, 0, 0, 6, 5]));
