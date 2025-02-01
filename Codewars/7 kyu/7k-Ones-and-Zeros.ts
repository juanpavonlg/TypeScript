export function binaryArrayToNumber(arr: number[]): number {
  return parseInt(arr.join(""), 2);
}; // binaryArrayToNumber()

console.log(binaryArrayToNumber([0,1,1,0]));
