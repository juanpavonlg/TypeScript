export class Kata {
  static validatePin(pin: string): boolean {
    return /^(\d{4}|\d{6})$/.test(pin);
  } // validatePin()
} // Kata

console.log(Kata.validatePin("1234"));
console.log(Kata.validatePin("12345"));
console.log(Kata.validatePin("a234"));
console.log(Kata.validatePin("123456"));
console.log(Kata.validatePin("1234567"));
