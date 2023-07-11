export function revRot(s: string, sz: number): string {
  let res = "";
  if (sz <= 0 || !s || sz > s.length) {
    return res;
  }
  for (let i = 0; i < s.length; i += sz) {
    const str = s.slice(i, i + sz);
    if (str.length === sz) {
      res +=
        str.split("").reduce((sum, dig) => sum + (+dig) ** 3, 0) % 2
          ? str.slice(1) + str[0]
          : str.split("").reverse().join("");
    }
  }
  return res;
} // revRot()

console.log(revRot("123456987654", 6));
