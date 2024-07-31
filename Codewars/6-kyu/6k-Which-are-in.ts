export function inArray(a1: string[], a2: string[]): string[] {
  return a1.filter((s1) => a2.some((s2) => s2.includes(s1))).sort();
} // inArray()

console.log(inArray(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]));
console.log(inArray(["tarp", "mice", "bull"], ["lively", "alive", "harp", "sharp", "armstrong"]));
