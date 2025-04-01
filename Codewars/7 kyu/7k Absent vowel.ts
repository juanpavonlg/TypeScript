export function absentVowel(x: string) {
  const count: number[] = new Array(5).fill(0);
  const vowels: { [key: string]: () => void } = {
    a: () => count[0]++,
    e: () => count[1]++,
    i: () => count[2]++,
    o: () => count[3]++,
    u: () => count[4]++,
  };
  for (const ch of x) {
    if (ch in vowels) {
      vowels[ch]();
    }
  }
  return count.indexOf(0);
  return ["a", "e", "i", "o", "u"].findIndex((c) => !x.includes(c));
} // absentVowel()

console.log(absentVowel("John Doe hs seven red pples under his bsket"));
console.log(absentVowel("Bb Smith sent us six neatly arranged range bicycles"));
