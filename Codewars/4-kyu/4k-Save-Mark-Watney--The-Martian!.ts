export function saveMark(c1: string, c2: string): string {
  const signs1 = (c1.match(/[NSEW]/g) ?? []).map((e) => ["N", "E"].includes(e) ? 1 : -1);
  const signs2 = (c2.match(/[NSEW]/g) ?? []).map((e) => ["N", "E"].includes(e) ? 1 : -1);
  const [f1, l1] = (c1.match(/\d+.\d+/g) ?? []).map((e, i) => signs1[i] * 0.0174533 * +e);
  const [f2, l2] = (c2.match(/\d+.\d+/g) ?? []).map((e, i) => signs2[i] * 0.0174533 * +e);
  const d = 2 * 3_390 * Math.asin(Math.sqrt((1 - Math.cos(f2 - f1) + Math.cos(f1) * Math.cos(f2) * (1 - Math.cos(l2 - l1))) / 2));
  return `${10 * Math.floor(d / 10)}KM`;
} // saveMark()

console.log(saveMark("48.23° N, 89.10° E", "48.84° N, 89.40° E"));
console.log(saveMark("52.10° S, 56.25° W", "52.10° N, 56.25° W"));
console.log(saveMark("11.28° S, 78.98° E", "21.28° S, 75.56° E"));
