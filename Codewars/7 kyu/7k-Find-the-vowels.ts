export function vowelIndices(word: string): number[] {
  const indices: number[] = [];
  for (let i = 0; i < word.length; i++) {
    if (/[aeiouy]/i.test(word[i])) {
      indices.push(i + 1);
    }
  }
  return indices;
} // vowelIndices()

console.log(vowelIndices("Paracetamol"));
console.log(vowelIndices("RZdngcPGBymtIpCUOcyytoIyJcTANHkZMYB"));
