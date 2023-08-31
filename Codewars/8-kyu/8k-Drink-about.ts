export function peopleWithAgeDrink(old: number): string {
  return `drink ${
    old < 14 ? "toddy" : old < 18 ? "coke" : old < 21 ? "beer" : "whisky"
  }`;
} // peopleWithAgeDrink()

console.log(peopleWithAgeDrink(14));
