export function dropCap(s: string): string {
  return s.replace(/\b\w+\b/g, (w) => w.length > 2 ? w.toLowerCase().replace(/^./, (c) => c.toUpperCase()) : w);
} // dropCap()

console.log(dropCap("ALL CAPS CRAZINESS"));
console.log(dropCap("one   space"));
console.log(dropCap("of"));
console.log(dropCap("  leading spaces"));
console.log(dropCap("Revelation of the contents outraged American public opinion, and helped generate"));
