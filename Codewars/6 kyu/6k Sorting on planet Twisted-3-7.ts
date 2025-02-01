export function sortTwisted37(array: number[]): number[] {
  const copy = [...array];
  return copy.sort((a, b) => {
    const aStr = a.toString();
    if (/[37]/.test(aStr)) {
      const sign = Math.sign(a);
      const len = aStr.length - 1;
      for (let i = len; i >= 0; i--) {
        if (/3/.test(aStr[i])) {
          a += sign * 4 * 10 ** (len - i);
        } else if (/7/.test(aStr[i])) {
          a -= sign * 4 * 10 ** (len - i);
        }
      }
    }
    const bStr = b.toString();
    if (/[37]/.test(bStr)) {
      const sign = Math.sign(b);
      const len = bStr.length - 1;
      for (let i = len; i >= 0; i--) {
        if (/3/.test(bStr[i])) {
          b += sign * 4 * 10 ** (len - i);
        } else if (/7/.test(bStr[i])) {
          b -= sign * 4 * 10 ** (len - i);
        }
      }
    }
    return a - b;
  });
} // sortTwisted37()

console.log(sortTwisted37([1, 2, 7, 4, 5, 6, 3, 8, 9]));
console.log(sortTwisted37([12, 14, 13]));
console.log(sortTwisted37([2, 7, 4, 3, 9]));
console.log(sortTwisted37([37, 4, -11, 45, 32, 74, 41, -24, 42, 27, 12, -5, -19, 23, 5, 3, 52, -27, 55]));
