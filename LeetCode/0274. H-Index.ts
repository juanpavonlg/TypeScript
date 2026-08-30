function hIndex(citations: number[]): number {
  let h = 0;
  citations.sort((a, b) => b - a);
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] >= i + 1) {
      h++;
    }
  }
  return h;
} // hIndex()

console.log(hIndex([3, 0, 6, 1, 5]));
console.log(hIndex([1, 3, 1]));
