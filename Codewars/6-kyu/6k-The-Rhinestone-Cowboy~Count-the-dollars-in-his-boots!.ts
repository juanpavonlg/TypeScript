export function cowboysDollars(boots: string[]): string {
  const left = (boots[0].match(/\|\[\(1\)\]\|/g) || []).length;
  const right = (boots[1].match(/\|\[\(1\)\]\|/g) || []).length;
  return `This Rhinestone Cowboy has ${right} dollar bills in his right boot and ${left} in the left`;
} // cowboysDollars()

const left = [
    "",
    "   ,|___|,",
    "   |     |",
    "   |     |",
    "   |[(1)]|",
    "   | ==  |",
    "   |[(1)]|",
    "   /    &|",
    ".-'`  ,   )****",
    "|         |   **",
    "`~~~~~~~~~~    ^",
  ],
  right = [
    "",
    "   ,|___|,",
    "   |[(1)]|",
    "   |     |",
    "   |[(1)]|",
    "   | ==  |",
    "   |[(1)]|",
    "   /    &|",
    ".-'`  ,   )****",
    "|[(1)]    |   **",
    "`~~~~~~~~~~    ^",
  ];
const boots = [left.join("\n"), right.join("\n")];
console.log(cowboysDollars(boots));
