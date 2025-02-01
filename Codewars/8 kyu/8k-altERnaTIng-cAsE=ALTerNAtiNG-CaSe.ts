export function toAlternatingCase(s: string): string {
  return s.replace(/./g, x => /[A-Z]/.test(x) ? x.toLowerCase() : x.toUpperCase());
} // toAlternatingCase()

console.log(toAlternatingCase("1a2b3c4d5e"));
