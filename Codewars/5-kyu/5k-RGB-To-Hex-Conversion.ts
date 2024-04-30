export function rgb(r: number, g: number, b: number): string {
  let hex = "";
  for (const c of [r, g, b]) {
    hex += (c < 0 ? 0 : c > 255 ? 255 : c).toString(16).padStart(2, "0");
  }
  return hex.toUpperCase();
} // rgb()

console.log(rgb(255, 255, 255));
console.log(rgb(255, 255, 300));
console.log(rgb(0, 0, 0));
console.log(rgb(148, 0, 211));
