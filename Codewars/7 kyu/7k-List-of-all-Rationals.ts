export function* allRationals(): IterableIterator<[number, number]> {
  const tree: [[number, number]] = [[1, 1]];
  let i = 0;
  while (true) {
    yield tree[i];
    tree.push([tree[i][0], tree[i][0] + tree[i][1]], [tree[i][0] + tree[i][1], tree[i][1]]);
    i++;
  }
  // yield [1, 1];
  // for (const [a, b] of allRationals()) {
  //   yield [a, a + b];
  //   yield [a + b, b];
  // }
} // allRationals()

const gen = allRationals();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
