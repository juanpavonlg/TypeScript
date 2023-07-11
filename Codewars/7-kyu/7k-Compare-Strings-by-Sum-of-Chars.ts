export function compare(s1: string | null, s2: string | null): boolean {
  return asciiSum(s1) === asciiSum(s2);
} // compare()

function asciiSum(str: string | null): number {
  if (!str) {
    return 0;
  }
  let sum = 0;
  for (const char of str) {
    const charCode = char.toUpperCase().charCodeAt(0);
    if (charCode >= 65 && charCode <= 90) {
      sum += charCode;
    } else {
      return 0;
    }
  }
  return sum;
} // asciiSum()

console.log(compare("AD", "BC"));
console.log(compare("AD", "DD"));
