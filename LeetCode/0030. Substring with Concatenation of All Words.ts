function findSubstring(s: string, words: string[]): number[] {
  const indices: number[] = [];
  const freq: {[key: string]: number} = {};
  words.forEach((word) => {
    freq[word] ? freq[word]++ : freq[word] = 1;
  });
  const match = words[0].length * words.length;
  const lim = s.length - match;
  for (let i = 0; i <= lim; i++) {
    const curr = {...freq};
    let matched = true;
    const lim2 = i + match;
    for (let j = i; j < lim2; j += words[0].length) {
      const word = s.slice(j, j + words[0].length);
      if (!curr[word]) {
        matched = false;
        break;
      }
      curr[word]--;
    }
    if (matched) {
      indices.push(i);
    }
  }
  return indices;
} // findSubstring()

console.log(findSubstring("barfoothefoobarman", ["foo", "bar"]));
console.log(findSubstring("wordgoodgoodgoodbestword", ["word", "good", "best", "word"]));
console.log(findSubstring("barfoofoobarthefoobarman", ["bar", "foo", "the"]));
console.log(findSubstring("lingmindraboofooowingdingbarrwingmonkeypoundcake", ["fooo","barr","wing","ding","wing"]));
