function countAndSay(n: number): string {
  let rle = "1";
  while (--n) {
    const freq: [string, number][] = [];
    let i = -1;
    for (let j = 0; j < rle.length; j++) {
      if (rle[j] !== rle[j - 1]) {
        freq[++i] = [rle[j], 1];
      } else {
        freq[i][1]++;
      }
    }
    rle = freq.reduce((a, e) => a + e[1] + e[0], "");
  }
  return rle;
} // countAndSay()

console.log(countAndSay(4));
console.log(countAndSay(1));
