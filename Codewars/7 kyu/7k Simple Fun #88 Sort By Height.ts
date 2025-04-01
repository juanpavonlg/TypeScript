export function sortByHeight(list: number[]): number[] {
  const people = list.filter((e) => e > -1).sort((a, b) => a - b);
  return list.map((e) => e > -1 ? people.shift()! : e);
} // sortByHeight()

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
