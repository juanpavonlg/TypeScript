export function hexWordSum(string: string): number {
  return string.replace(/O/g, "0").replace(/S/g, "5").split(" ").reduce((a, e) => a + (/^[0-9A-F]+$/.test(e) ? parseInt(e, 16) : 0), 0);
} // hexWordSum()

console.log(hexWordSum("BAG OF BEES"));
