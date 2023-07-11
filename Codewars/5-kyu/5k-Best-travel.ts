export function chooseBestSum(t: number, k: number, ls: number[]): number | null {
  if (ls.length < k) {
    return null;
  }
  let sum = 0;
  const indices: number[] = [];
  for (let i = 0; i < k; i++) {
    indices.push(i);
  }
  for (let i = 0; i < ls.length; i++) {
    
  }
  return sum;
} // chooseBestSum()

console.log(chooseBestSum(163, 3, [50, 55, 56, 57, 58]));
