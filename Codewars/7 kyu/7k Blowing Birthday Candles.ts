export function blowCandles(str: string): number {
  const arr = str.split("").map(Number);
  let blows = 0;
  while (arr.some((e) => e > 0)) {
    const start = arr.findIndex((candle) => candle !== 0);
    for (let i = start; i < start + 3; i++) {
      if (arr[i]) {
        arr[i]--;
      }
    }
    blows++;
  }
  return blows;
} // blowCandles()

console.log(blowCandles("1321"));
console.log(blowCandles("0323456"));
console.log(blowCandles("2113"));
