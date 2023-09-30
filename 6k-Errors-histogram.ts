export function hist(s: string): string {
  const ans: string[] = [];
  for (const error of "uwxz") {
    const n = [...s].filter((e) => e === error).length;
    n ? ans.push(`${error}  ${n.toString().padEnd(6, " ")}${"*".repeat(n)}`) : "";
  }
  return ans.join("\r");
} // hist()

console.log(hist("uuaaaxbbbbyyhwawiwjjjwwxym"));
console.log(hist("aaifzlnderpeurcuqjqeywdq"));
