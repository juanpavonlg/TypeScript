export const shuffint = (n: number): number => {
  let bin = n.toString(2);
  if (!/0/.test(bin)) {
    return 0;
  }
  let int = 0;
  while (bin) {
    int = 2 * int + pickDigit(bin);
    bin = bin.replace(`${int & 1}`, "");
  }
  return int !== n ? int : shuffint(n);
}; // shuffint()

const pickDigit = (bin: string): number => {
  return +bin[(Math.random() * bin.length) | 0];
}; // shuffle()

console.log(shuffint(1));
console.log(shuffint(2));
console.log(shuffint(3));
console.log(shuffint(4));
console.log(shuffint(5));
console.log(shuffint(6));
console.log(shuffint(7));
console.log(shuffint(8));
console.log(shuffint(9));
