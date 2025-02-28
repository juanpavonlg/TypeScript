export function partsSums(ls: number[]): number[] {
  let sum = ls.reduce((a, e) => a + e, 0);
  return [sum, ...ls.map((e) => sum -= e)];
} // partsSums()

console.log(partsSums([0, 1, 3, 6, 10]));
console.log(partsSums([1, 2, 3, 4, 5, 6]));
console.log(partsSums([744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]));

const obj = {
  name: "Hermione",
  getName() {
    return this.name;
  }
}
