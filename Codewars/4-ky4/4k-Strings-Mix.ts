export const mix = (s1: string, s2: string): string => {
  const letters = new Set((s1 + s2).match(/[a-z]/g)?.sort());
  const ans: [string, string][] = [];
  letters.forEach((letter) => {
    const l1 = s1.split("").filter((l) => l === letter).join("");
    const l2 = s2.split("").filter((l) => l === letter).join("");
    if (l1.length > 1 || l2.length > 1) {
      ans.push(l1.length > l2.length ? ["1", l1] : l2.length > l1.length ? ["2", l2] : ["=", l1]);
    }
  });
  ans.sort((a, b) => a[1].length === b[1].length ? a[0].charCodeAt(0) - b[0].charCodeAt(0) : b[1].length - a[1].length);
  return ans.map((e) => e.join(":")).join("/");
}; // mix()

console.log(mix("Are they here", "yes, they are here"));
