function maxNumberOfBalloons(text: string): number {
  const balloon: {[key: string]: number} = { b: 0, a: 0, l: 0, o: 0, n: 0 };
  for (const ch of text) {
    if (ch in balloon) {
      balloon[ch]++;
    }
  }
  balloon.l = Math.floor(balloon.l / 2);
  balloon.o = Math.floor(balloon.o / 2);
  return Math.min(...Object.values(balloon));
} // maxNumberOfBalloons()

console.log(maxNumberOfBalloons("nlaebolko"));
console.log(maxNumberOfBalloons("loonbalxballpoon"));
