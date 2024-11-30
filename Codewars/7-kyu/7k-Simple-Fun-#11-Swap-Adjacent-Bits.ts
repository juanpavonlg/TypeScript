export function swapAdjacentBits(n: number): number {
  // const bin = n.toString(2);
  // const arr = ((bin.length % 2 ? "0" : "") + bin).split("");
  // for (let i = 0; i < arr.length; i += 2) {
  //   if (arr[i] !== arr[i + 1]) {
  //     [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
  //   }
  // }
  // return parseInt(arr.join(""), 2);
  return parseInt(n.toString(2).padStart(32, "0").replace(/(\d)(\d)/g, "$2$1"), 2);
} // swapAdjacentBits()

console.log(swapAdjacentBits(13));
console.log(swapAdjacentBits(74));
