export const code = (s: string): string => {
  const n = Math.ceil(Math.sqrt(s.length));
  const t = s.padEnd(n * n, "\v");
  const sq = Array(n).fill("").map((_, i) => t.slice(n * i, n * i + n));  
  return sq.map((e, i) => e.split("").map((_, j) => sq[n - 1 - j][i]).join("")).join("\n");
}; // code()

export const decode = (s: string): string => {
  const sq = s.split("\n");
  const t = sq.map((e, i) => e.split("").map((_, j) => sq[j][e.length - 1 - i]).join("")).join("\n");
  return t.replace(/[\n\v]/g, "");
}; // decode()

console.log(code("I.was.going.fishing.that.morning.at.ten.o'clock"));
console.log(code("SATORAREPOTENETOPERAROTAS"));
console.log(code(""));
console.log(decode(code("I.was.going.fishing.that.morning.at.ten.o'clock")));
console.log(decode(code("SATORAREPOTENETOPERAROTAS")));
