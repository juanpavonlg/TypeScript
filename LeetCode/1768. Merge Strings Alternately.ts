function mergeAlternately(word1: string, word2: string): string {
  let ans: string[] = [];
  let [i, j] = [0, 0];
  while (i < word1.length && j < word2.length) {
    ans.push(word1[i++], word2[j++]);
  }
  while (i < word1.length) {
    ans.push(word1[i++]);
  }
  while (j < word2.length) {
    ans.push(word2[j++]);
  }
  return ans.join("");
} // mergeAlternately()

console.log(mergeAlternately("abc", "pqr"));
console.log(mergeAlternately("ab", "pqrs"));
console.log(mergeAlternately("abcd", "pq"));
