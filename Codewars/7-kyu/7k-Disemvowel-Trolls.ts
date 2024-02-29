export class Kata {
  static disemvowel(str: string): string {
    return str.replace(/[aeiou]/gi, "");
  } // disemvowel()
} // Kata

console.log(Kata.disemvowel("This website is for losers LOL!"));
