function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }
  const alphabet: {[key: string]: number} = {};
  for (const letter of s) {
    alphabet[letter] = alphabet[letter] ? ++alphabet[letter] : 1;
  }
  for (const letter of t) {
    if (!alphabet[letter]) {
      return false;
    }
    alphabet[letter]--;
  }
  return Object.values(alphabet).every((e) => !e);
} // isAnagram()

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
