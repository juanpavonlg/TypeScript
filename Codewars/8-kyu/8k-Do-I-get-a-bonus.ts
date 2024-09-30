export class Kata {
  public static bonusTime(salary: number, bonus: boolean): string {
    return `£${salary * (bonus ? 10 : 1)}`;
  } // bonusTime()
} // Kata

console.log(Kata.bonusTime(10000, true));
console.log(Kata.bonusTime(10000, false));
console.log(Kata.bonusTime(25000, true));
console.log(Kata.bonusTime(60000, false));
console.log(Kata.bonusTime(2, true));
console.log(Kata.bonusTime(78, false));
console.log(Kata.bonusTime(67890, true));
