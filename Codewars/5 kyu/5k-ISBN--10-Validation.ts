export function validISBN10(isbn: string): boolean {
  if (!/^\d{9}[\dX]$/.test(isbn)) {
    return false;
  }
  return !([...isbn].reduce((a, e, i) => a + (e !== "X" ? +e : 10) * (i + 1), 0) % 11);
} // validISBN10()

console.log(validISBN10("1112223339"));
console.log(validISBN10("111222333"));
console.log(validISBN10("1112223339X"));
console.log(validISBN10("1234554321"));
console.log(validISBN10("1234512345"));
console.log(validISBN10("048665088X"));
console.log(validISBN10("X123456788"));
