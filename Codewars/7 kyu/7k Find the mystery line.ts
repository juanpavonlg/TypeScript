type MysteryFunction = (x: number) => number;

export const findMysteryEquation = (func: MysteryFunction): [number, number] => {
  const b = func(0);
  const m = func(1) - b;
  return [m, b];
} // findMysteryEquation()

const exampleEquation: MysteryFunction = (x) => (2 * x) + 5;
console.log(findMysteryEquation(exampleEquation));

