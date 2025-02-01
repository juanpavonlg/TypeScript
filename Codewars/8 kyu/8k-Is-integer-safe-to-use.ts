export function SafeInteger(n: number): boolean {
  return Number.isSafeInteger(n);
} // SafeInteger

console.log(SafeInteger(9007199254740990));
console.log(SafeInteger(9007199254740992));
