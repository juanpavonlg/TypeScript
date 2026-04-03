function sortToys(toys: string[], positions: number[]) {
  return toys
    .slice()
    .sort((a, b) => positions[toys.indexOf(a)] - positions[toys.indexOf(b)]);
} // sortToys()

const toys = ["ball", "doll", "car", "puzzle"];
const positions = [2, 3, 1, 0];
console.log(sortToys(toys, positions));
const moreToys = ["pc", "xbox", "ps4", "switch", "nintendo"];
const morePositions = [8, 6, 5, 7, 9];
console.log(sortToys(moreToys, morePositions));
