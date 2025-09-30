export function fromProquint(proquint: string): number {
  const consonants = "bdfghjklmnprstvz";
  const vowels = "aiou";
  const quints = proquint.split("-");
  let bits = "";
  for (const quint of quints) {
    for (let i = 0; i < quint.length; i++) {
      if (i % 2) {
        bits += vowels.indexOf(quint[i]).toString(2).padStart(2, "0");
      } else {
        bits += consonants.indexOf(quint[i]).toString(2).padStart(4, "0");
      }
    }
  }
  return parseInt(bits, 2);
} // fromProquint()

export function toProquint(number: number): string {
  const consonants = "bdfghjklmnprstvz";
  const vowels = "aiou";
  const bits = number.toString(2).padStart(32, "0");
  const quints: [string, string] = ["", ""];
  for (let i = 0; i < quints.length; i++) {
    quints[i] += consonants[parseInt(bits.slice(16 * i, 16 * i + 4), 2)];
    quints[i] += vowels[parseInt(bits.slice(16 * i + 4, 16 * i + 6), 2)];
    quints[i] += consonants[parseInt(bits.slice(16 * i + 6, 16 * i + 10), 2)];
    quints[i] += vowels[parseInt(bits.slice(16 * i + 10, 16 * i + 12), 2)];
    quints[i] += consonants[parseInt(bits.slice(16 * i + 12, 16 * i + 16), 2)];
  }
  return quints.join("-");
} // toProquint()

console.log(fromProquint("vital-datum"));
console.log(toProquint(3880194936));
