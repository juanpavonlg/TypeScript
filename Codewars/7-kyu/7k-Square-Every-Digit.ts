export class Kata {
  static squareDigits(num: number): number {
    return +[...num.toString()].map((e) => (+e) ** 2).join("");
  } // squareDigits
} // Kata

console.log(Kata.squareDigits(9119));
console.log(Kata.squareDigits(765));
