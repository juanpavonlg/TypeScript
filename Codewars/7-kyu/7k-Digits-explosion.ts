export function explode(s: string): string {
  return [...s].reduce((a, e) => a + e.repeat(+e), "");
} // explode()

console.log(explode("312"));
console.log(explode("102269"));
