export const stat = (s: string): string => {
  const t = s.split(", ").map((t) => toSeconds(t)).sort((a, b) => a - b);
  const rng = toFormat(t[t.length - 1] - t[0]);
  const avg = toFormat(t.reduce((a, b) => a + b) / t.length);
  const i = ~~(t.length / 2);
  const med = toFormat(t.length % 2 ? t[i] : (t[i - 1] + t[i]) / 2);
  return s ? `Range: ${rng} Average: ${avg} Median: ${med}` : "";
} // stat()

const toSeconds = (s: string): number => {
  return s.split("|").reduce((acc, t, i) => acc + +t * 60 ** (2 - i), 0);
} // toSeconds()

const toFormat = (t: number): string => {
  const h = ~~(t / 3600);
  const m = ~~(t % 3600 / 60);
  const s = ~~(t % 60);
  return [("0" + h).slice(-2), ("0" + m).slice(-2), ("0" + s).slice(-2)].join("|");
} // toFormat()

console.log(stat("01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17"));
console.log(stat("02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41"));
console.log(stat("02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|32|34, 2|17|17"));
