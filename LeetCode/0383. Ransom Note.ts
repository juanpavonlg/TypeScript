function canConstruct(ransomNote: string, magazine: string): boolean {
  const alphabet: number[] = new Array(26).fill(0);
  for (let i = 0; i < magazine.length; i++) {
    alphabet[magazine.charCodeAt(i) - 97]++;
  }
  for (let i = 0; i < ransomNote.length; i++) {
    const index = ransomNote.charCodeAt(i) - 97;
    if (!alphabet[index]) {
      return false;
    }
    alphabet[index]--;
  }
  return true;
} // canConstruct()

console.log(canConstruct("a", "b"));
console.log(canConstruct("aa", "ab"));
console.log(canConstruct("aa", "aab"));
