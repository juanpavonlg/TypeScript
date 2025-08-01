export function interlockable(a: bigint, b: bigint): boolean {
  const binA = a.toString(2).split("").reverse();
  const binB = b.toString(2).split("").reverse();;
  const len = Math.min(binA.length, binB.length);
  for (let i = 0; i < len; i++) {
    if (binA[i] === "1" && binB[i] === "1") {
      return false;
    }
  }
  return true;
  return !(a & b);
} // interlockable()

console.log(interlockable(9n, 4n));
console.log(interlockable(3n, 6n));
