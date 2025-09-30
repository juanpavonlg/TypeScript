export function longestRepetition(text: string): [string, number] {
  let char = "";
  let max = 0;
  let [l, r] = [0, 0];
  while (r < text.length) {
    r++;
    if (text[r] !== text[r - 1]) {
      const count = r - l;
      if (count > max) {
        max = count;
        char = text[l];
      }
      l = r;
    }
  }
  return [char, max];
} // longestRepetition()

console.log(longestRepetition("aaaabb"));
console.log(longestRepetition("bbbaaabaaaa"));
console.log(longestRepetition("cbdeuuu900"));
console.log(longestRepetition("abbbbb"));
console.log(longestRepetition("aabb"));
console.log(longestRepetition("ba"));
console.log(longestRepetition(""));
