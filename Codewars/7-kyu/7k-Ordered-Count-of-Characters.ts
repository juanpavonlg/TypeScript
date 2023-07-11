function orderedCount(text: string): [string, number][] {
  const counts: {[i: string]: number} = {};
  for (const char of text) { 
    if(counts[char]) {
      counts[char]++;
    } else {
      counts[char] = 1;
    }
  }
  return [...new Set(text)].map(char => [char, counts[char]]);
} // orderedCount()

console.log(orderedCount("/department"));
