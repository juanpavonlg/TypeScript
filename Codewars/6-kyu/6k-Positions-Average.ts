export function posAverage(s: string): number {
  let pos = 0;
  const str = s.split(", ");
  for (let i = 0; i < str.length - 1; i++) {
    for (let j = i + 1; j < str.length; j++) {
      for (let k = 0; k < str[i].length; k++) {
        pos += str[i][k] === str[j][k] ? 1 : 0;
      }
    }
  }
  return 100 * pos / (str[0].length * (str.length * (str.length - 1) / 2));
} // posAverage()

console.log(posAverage("6900690040, 4690606946, 9990494604"));
console.log(posAverage("466960, 069060, 494940, 060069, 060090, 640009, 496464, 606900, 004000, 944096"));
console.log(posAverage("444996, 699990, 666690, 096904, 600644, 640646, 606469, 409694, 666094, 606490"));
console.log(posAverage("0, 0, 1"));
