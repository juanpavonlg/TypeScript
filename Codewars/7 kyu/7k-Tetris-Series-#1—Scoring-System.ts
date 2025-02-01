export function getScore(arr: number[]): number {
  const perLines = [0, 40, 100, 300, 1200];
  let level = 0;
  let points = 0;
  for (const lines of arr) {
    points += perLines[lines] * (~~(level / 10) + 1);
    level += lines;
  }
  return points;
} // getScore()

console.log(getScore([4, 2, 2, 3, 3, 4, 2]));
