function numJewelsInStones(jewels: string, stones: string): number {
  const jewelsSet = new Set(jewels);
  let count = 0;
  for (const stone of stones) {
    if (jewelsSet.has(stone)) {
      count++;
    }
  }
  return count;
} // numJewelsInStones()

console.log(numJewelsInStones("aA", "aAAbbbb"));
console.log(numJewelsInStones("z", "ZZ"));
