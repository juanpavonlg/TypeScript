export function printerError(s: string): string {
  return `${(s.match(/[n-z]/g) ?? []).length}/${s.length}`;
} // printerError()

console.log(printerError("aaabbbbhaijjjm"));
console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"));
