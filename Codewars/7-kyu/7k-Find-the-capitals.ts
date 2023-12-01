export function capitals(word: string): number[] {
  const indices: number[] = [];
  for (let i = 0; i < word.length; i++) {
    if (word.charCodeAt(i) < 97) {
      indices.push(i);
    }
  }
  return indices;
} // capitals()

console.log(capitals("CodEWaRs"));

