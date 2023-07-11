export function closest(strng: string): number[][] {
  if (!strng.length) {
    return [];
  }
  const weights = strng
    .split(" ")
    .map((n, i) => [n.split("").reduce((a, d) => a + +d, 0), i, +n]);
  weights.sort((a, b) => a[0] - b[0]);
  let min = weights[1][0] - weights[0][0];
  let index = 0;
  for (let i = 1; i < weights.length - 1; i++) {
    const diff = weights[i + 1][0] - weights[i][0];
    if (diff < min) {
      min = diff;
      index = i;
    }
  }
  return [weights[index], weights[index + 1]];
} // closest()

console.log(closest(""));
console.log(closest("103 123 4444 99 2000"));
console.log(
  closest("241259 154 155206 194 180502 147 300751 200 406683 37 57")
);
