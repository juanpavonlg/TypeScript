export function openOrSenior(data: number[][]): string[] {
  return data.map((e) => e[0] >= 55 && e[1] > 7 ? "Senior" : "Open");
} // openOrSenior()

console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]));
