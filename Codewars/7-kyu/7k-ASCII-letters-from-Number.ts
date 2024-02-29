export function convert(n: string): string {
  return String.fromCharCode(...(n.match(/\d{2}/g) ?? []).map(Number));
} // convert()

console.log(convert("658776"));
console.log(convert("73327673756932858080698267658369"));
