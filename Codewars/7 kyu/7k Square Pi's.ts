export function squarePi(digits: number): number {
  const PI =
    "31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679";
  return Math.ceil(Math.sqrt([...PI.slice(0, digits)].reduce((a, e) => a + (+e) ** 2, 0)));
} // squarePi()

console.log(squarePi(1));
console.log(squarePi(3));
