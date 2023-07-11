export function arr2bin(arr: any[]): string {
  return arr.reduce((a, e) => a += typeof e === "number" ? e : 0, 0).toString(2);
} // arr2bin()

console.log(arr2bin([true,true,false,15]));
