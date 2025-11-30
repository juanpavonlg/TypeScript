function countSheep(letters: string): number {
  const sheep: { [key: string]: number } = { s: 0, h: 0, e: 0, p: 0 };
  for (const ch of letters) {
    if (ch in sheep) {
      sheep[ch]++;
    }
  }
  sheep.e = (sheep.e / 2) | 0;
  return Math.min(...Object.values(sheep));
} // countSheep

console.log(countSheep("sheepxsheepy"));
console.log(countSheep("sshhheeeepppp"));
console.log(countSheep("hola"));
console.log(countSheep("peesh"));
