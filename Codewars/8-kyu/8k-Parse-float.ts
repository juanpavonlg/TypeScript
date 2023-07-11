export function parseF(s: string): number | null {
  return !isNaN(Number(s)) ? parseFloat(s) : null;
} // parseF()

console.log(parseF("a"));
