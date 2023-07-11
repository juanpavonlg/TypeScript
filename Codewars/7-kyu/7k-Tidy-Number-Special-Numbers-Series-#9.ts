export function tidyNumber(num: number): boolean {
  return num === +num.toString().split("").sort().join("");
} // tidyNumber()

console.log(tidyNumber(102));
console.log(tidyNumber(567));
console.log(tidyNumber(54));
console.log(tidyNumber(55));
console.log(tidyNumber(1));
