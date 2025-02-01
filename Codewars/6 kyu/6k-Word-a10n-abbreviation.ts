export function abbreviate(str: string): string {
  // return str.match(/\w+|\W/g)!.map((s) => s.length > 3 ? `${s[0]}${s.length - 2}${s.slice(-1)}` : s).join("");
  return str.replace(/[a-z]{4,}/gi, (s) => `${s[0]}${s.length - 2}${s.slice(-1)}`);
} // abbreviate()

console.log(abbreviate("elephant-rides are really fun!"));
