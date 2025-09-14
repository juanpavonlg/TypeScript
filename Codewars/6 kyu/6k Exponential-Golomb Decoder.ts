export function decoder(sequence: string): number[] {
  const ans: number[] = [];
  let zeros = 0;
  let l = 0;
  for (let r = 0; r < sequence.length; ) {
    if (sequence[r] === "0") {
      zeros++;
      r++;
    } else {
      r += zeros + 1;
      ans.push(parseInt(sequence.slice(l, r), 2) - 1);
      l = r;
      zeros = 0;
    }
  }
  return ans;
} // decoder()

console.log(decoder("001000000101111001010001101"));
