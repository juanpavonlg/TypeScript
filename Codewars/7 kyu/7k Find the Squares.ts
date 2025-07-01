export const findSquares = (num: number): string => {
  const bigger = Math.ceil(num / 2);
  const smaller = num - bigger;
  return `${bigger ** 2}-${smaller ** 2}`;
}; // findSquares()

console.log(findSquares(9));
console.log(findSquares(5));
console.log(findSquares(7));
