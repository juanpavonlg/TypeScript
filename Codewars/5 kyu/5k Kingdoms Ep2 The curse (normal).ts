export function translate(speech: string, vocabulary: string[]): string {
  const words: string[] = speech.match(/[\w*]+/g) ?? [];
  while (words.length) {
    for (let i = 0; i < words.length; i++) {
      const word = new RegExp(`^${words[i].replace(/\*/g, ".")}$`);
      let matches = 0;
      let index = -1;
      for (let j = 0; j < vocabulary.length; j++) {
        if (word.test(vocabulary[j])) {
          matches++;
          index = j;
        }
      }
      if (matches === 1) {
        speech = speech.replace(words[i], vocabulary[index]);
        vocabulary.splice(index, 1);
        words.splice(i, 1);
        i--;
      }
    }
  }
  return speech;
} // translate()

console.log(translate("a**? *c*. **e,", ["ace", "acd", "abd"]));
console.log(translate("*t**** d** s*ccc **du *d* **d *re**d!", ["cedu","creccd","ddd","ddc","seccc","dec","ctccde"]));
