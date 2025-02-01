export function usdcny(usd: number): string {
  return `${(6.75 * usd).toFixed(2)} Chinese Yuan`;
} // usdcny()

console.log(usdcny(15));
console.log(usdcny(465));
