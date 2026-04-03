type Glove = { hand: "L" | "R"; color: string };

function matchGloves(gloves: Glove[]): string[] {
  const matches: string[] = [];
  const colors: { [color: string]: { L: number; R: number } } = {};
  for (const glove of gloves) {
    if (glove.color in colors) {
      colors[glove.color][glove.hand]++;
      if (colors[glove.color].L && colors[glove.color].R) {
        matches.push(glove.color);
        colors[glove.color].L--;
        colors[glove.color].R--;
      }
    } else {
      colors[glove.color] = { L: 0, R: 0 };
      colors[glove.color][glove.hand]++;
    }
  }
  return matches;
} // matchGloves()

const gloves: Glove[] = [
  { hand: "L", color: "red" },
  { hand: "R", color: "red" },
  { hand: "R", color: "green" },
  { hand: "L", color: "blue" },
  { hand: "L", color: "green" },
];
console.log(matchGloves(gloves));
const gloves2: Glove[] = [
  { hand: "L", color: "gold" },
  { hand: "R", color: "gold" },
  { hand: "L", color: "gold" },
  { hand: "L", color: "gold" },
  { hand: "R", color: "gold" },
];
console.log(matchGloves(gloves2));
const gloves3: Glove[] = [
  { hand: "L", color: "red" },
  { hand: "R", color: "green" },
  { hand: "L", color: "blue" },
];
console.log(matchGloves(gloves3));
const gloves4: Glove[] = [
  { hand: "L", color: "green" },
  { hand: "L", color: "red" },
  { hand: "R", color: "red" },
  { hand: "R", color: "green" },
];
console.log(matchGloves(gloves4));
