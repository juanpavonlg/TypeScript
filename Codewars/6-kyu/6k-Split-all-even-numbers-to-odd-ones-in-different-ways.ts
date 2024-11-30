export function splitAllEvenNumbers(numbers: number[], way: number): number[] {
  const copy = [...numbers];
  for (let i = 0; i < copy.length; i++) {
    if (copy[i] % 2 === 0) {
      const odds: number[] = [];
      switch (way) {
        case 0:
          const half = copy[i] / 2;
          const r = 1 - half % 2;
          odds.push(half - r, half + r);
          break;
        case 1:
          odds.push(1, copy[i] - 1);
          break;
        case 2:
          let max = copy[i];
          while (max % 2 === 0) {
            max /= 2;
          }
          odds.push(...Array(copy[i] / max).fill(max));
          break;
        case 3:
          odds.push(...Array(copy[i]).fill(1));
          break;
      }
      copy.splice(i, 1, ...odds);
    }
  }
  return copy;
} // splitAllEvenNumbers()

console.log(splitAllEvenNumbers([1, 10, 1, 3], 0));
console.log(splitAllEvenNumbers([1, 10, 1, 3], 1));
console.log(splitAllEvenNumbers([1, 10, 1, 3], 2));
console.log(splitAllEvenNumbers([1, 10, 1, 3], 3));
console.log(splitAllEvenNumbers([1, 1, 3, 8], 0));
console.log(splitAllEvenNumbers([1, 1, 3, 8], 1));
console.log(splitAllEvenNumbers([1, 1, 3, 8], 2));
console.log(splitAllEvenNumbers([1, 1, 3, 8], 3));
