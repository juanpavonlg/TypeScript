export function divCon(x: (string | number)[]): number {
  return x.reduce((a: number, e) => a + (typeof e === "number" ? e : -e), 0);
} // divCon()

console.log(divCon([9, 3, "7", "3"]));
console.log(divCon(["5", "0", 9, 3, 2, 1, "9", 6, 7]));
console.log(divCon(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"]));
