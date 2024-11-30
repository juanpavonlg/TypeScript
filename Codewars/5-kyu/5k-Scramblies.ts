export function scramble(str1: string, str2: string): boolean {
  const count: { [key: string]: number } = {};
  for (const ch of str1) {
    count[ch] = (count[ch] ?? 0) + 1;
  }
  for (const ch of str2) {
    if (count[ch]) {
      count[ch]--;
    } else {
      return false;
    }
  }
  return true;
} // scramble()

console.log(scramble("rkqodlw", "world"));
console.log(scramble("cedewaraaossoqqyt", "codewars"));
console.log(scramble("katas", "steak"));
