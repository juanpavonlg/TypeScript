export const sqInRect = (l: number, w: number): null | number[] => {
  if (l === w) {
    return null;
  }
  return findSquares(l, w);
}; // sqInRect()

const findSquares = (l: number, w: number): number[] => {
  if (l === 0 || w === 0) {
    return [];
  }
  return l > w ? [w, ...findSquares(l - w, w)] : [l, ...findSquares(l, w - l)];
} // findSquares

console.log(sqInRect(5, 5));
console.log(sqInRect(5, 3));
console.log(sqInRect(3, 5));
console.log(sqInRect(20, 14));
console.log(sqInRect(14, 20));
