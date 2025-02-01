export class Kata {
  static dnaStrand(dna: string) {
    const comp: { [key: string]: string } = { A: "T", C: "G", G: "C", T: "A" };
    return dna.replace(/./g, (e) => comp[e]);
  } // dnaStrand()
} // Kata

console.log(Kata.dnaStrand("ATTGC"));
console.log(Kata.dnaStrand("GTAT"));
