export function isNegativeZero(n: number): boolean { 
  return 1 / Math.floor(n) === -Infinity;
} // isNegativeZero()

console.log(isNegativeZero(-0));
console.log(isNegativeZero(0));
console.log(isNegativeZero(-Number.MIN_VALUE));
