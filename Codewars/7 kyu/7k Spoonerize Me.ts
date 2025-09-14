export function spoonerize(words: string): string {
  let [word1, word2] = words.split(" ");
  return `${word2[0]}${word1.slice(1)} ${word1[0]}${word2.slice(1)}`;
} // spoonerize()

console.log(spoonerize("not picking"));
