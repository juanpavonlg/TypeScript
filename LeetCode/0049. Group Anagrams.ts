function groupAnagrams(strs: string[]): string[][] {
  const anagrams: {[key: string]: string[]} = {};
  for (const word of strs) {
    const sorted = [...word].sort().join();
    if (sorted in anagrams) {
      anagrams[sorted].push(word);
    } else {
      anagrams[sorted] = [word];
    }
  }
  return Object.values(anagrams);
} // groupAnagrams()

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));
