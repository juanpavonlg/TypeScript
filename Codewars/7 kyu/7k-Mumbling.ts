export function accum(s: string): string {
  return s.split("")
          .map((char, i) => char.toUpperCase() + (char.toLowerCase()).repeat(i))
          .join('-');
} // accum()

console.log(accum("ZpglnRxqenU"));
