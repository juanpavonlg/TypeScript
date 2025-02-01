export class Kata {
  static highAndLow(numbers: string): string {
    const arr = numbers.split(" ").map(Number).sort((a, b) => a - b);    
    return `${arr.slice(-1)} ${arr[0]}`;
  } // highAndLow()
} // Kata

console.log(Kata.highAndLow("1 2 -3 4 -5"));
