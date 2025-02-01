export function mygcd(x: number, y: number): number {
  return y !== 0 ? mygcd(y, x % y): x;
} // mygcd()

console.log(mygcd(30, 12));
console.log(mygcd(36, 12));
console.log(mygcd(8, 9));
console.log(mygcd(1, 1));
