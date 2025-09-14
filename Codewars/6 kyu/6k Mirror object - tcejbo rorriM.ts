export const mirror = (obj: Record<string, any>): Record<string, string> => {
  const ans: Record<string, string> = {};
  for (const key in obj) {
    ans[key] = [...key].reverse().join("");
  }
  return ans;
}; // mirror()

const obj = { abc: undefined, arara: undefined, xyz: undefined };
console.log(mirror(obj));

