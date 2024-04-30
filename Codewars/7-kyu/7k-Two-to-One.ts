export const longest = (s1: string, s2: string): string => {
  return [...new Set(s1 + s2)].sort().join("");
}; // longest()

console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));
console.log(longest("abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz"));
