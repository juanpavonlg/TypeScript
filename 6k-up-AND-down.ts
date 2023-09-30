export function arrange(strng: string): string {
  const words = strng.split(" ");
  for (let i = 0; i < words.length - 1; i++) {
    if (i % 2 === 0 && words[i].length > words[i + 1].length || i % 2 && words[i].length < words[i + 1].length) {
      [words[i], words[i + 1]] = [words[i + 1], words[i]];
    }
  }
  return words.map((e, i) => i % 2 ? e.toUpperCase() : e.toLowerCase()).join(" ");
} // arrange()

console.log(arrange("after be arrived two My so"));
console.log(arrange("My after be arrived so two"));
console.log(arrange(""));
console.log(arrange("who hit retaining The That a we taken"));
console.log(arrange("on I came up were so grandmothers"));
console.log(arrange("way the my wall them him"));
