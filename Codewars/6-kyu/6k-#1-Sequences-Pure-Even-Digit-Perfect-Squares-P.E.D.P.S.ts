export const evenDigitSquares = (a: number, b: number): number[] => {
  const ans: number[] = [];
  for (let i = a; i <= b; i += 2) {
    const sqrt = ~~Math.sqrt(i);
    if (sqrt ** 2 === i && /^[02468]+$/.test(String(i))) {
      ans.push(i);
    }
  }
  return ans;
}; // evenDigitSquares()

console.log(evenDigitSquares(0, 100));
console.log(evenDigitSquares(100, 1000));
