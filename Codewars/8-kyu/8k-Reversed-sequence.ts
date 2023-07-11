export const reverseSeq = (n: number): number[] => {
  let arr: number[] = [];
  for (let i = n; i > 0; i--) {
    arr.push(i);
  }
  return arr;
}; // reverseSeq()

console.log(reverseSeq(5));
