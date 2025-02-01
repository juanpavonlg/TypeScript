export class Kata {
  static findLongest(array: number[]): number {
    return array.reduce((long, n) => long = n.toString().length > long.toString().length ? n : long);
  } // findLongest()
} // Kata

console.log(Kata.findLongest([1, 10, 100]));
console.log(Kata.findLongest([9000, 8, 800]));
