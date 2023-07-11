export function remove(s: string): string {
  return s.replace(/!$/g, "");
} // remove()

console.log(remove("!Hi!!"));
