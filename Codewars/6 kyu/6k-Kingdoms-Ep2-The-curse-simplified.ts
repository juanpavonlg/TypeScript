export function translate(speech: string, vocabulary: string[]): string {  
  for (const word of speech.match(/[\w*]+/g) ?? []) {
    for (const option of vocabulary) {
      if (new RegExp(`^${word.replace(/\*/g, ".")}$`).test(option)) {
        speech = speech.replace(word, option);
      }
    }
  }
  return speech;
} // translate()

console.log(translate("***lo w***d!", ["hello", "world"]));
console.log(translate("", ["hell", "weak"]));
console.log(translate("*ow ****v* **** ****u oq**y *t***. s*opq. qro***, q*x", ["ooqqu", "ptqqq", "qqqovq", "qpqq", "qpx", "oqqqy", "qropoo", "sqopq", "qow"]));
