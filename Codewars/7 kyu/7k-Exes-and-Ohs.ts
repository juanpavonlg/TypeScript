export function xo(str: string) : boolean {
  return str.replace(/[^x]/gi, "").length === str.replace(/[^o]/gi, "").length;
} // xo()

console.log(xo("ooxx"));
console.log(xo("xooxx"));
console.log(xo("ooxx"));
console.log(xo("ooxXm"));
console.log(xo("zpzpzpp"));
console.log(xo("zzoo"));
