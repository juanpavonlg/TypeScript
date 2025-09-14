export function drawStairs(n: number): string {
  return Array.from({ length: n }, (_, i) => `${" ".repeat(i)}I`).join("\n");
} // drawStairs()

console.log(drawStairs(3));
console.log(drawStairs(7));
