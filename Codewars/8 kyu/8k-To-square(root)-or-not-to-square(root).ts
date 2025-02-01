export function squareOrSquareRoot(array: number[]): number[] {
  return array.map((e) => {
    const r = Math.sqrt(e);
    return r % 1 ? e * e : r;
  });
} // squareOrSquareRoot()

console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));
