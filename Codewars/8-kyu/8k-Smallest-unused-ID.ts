export function nextId(ids: number[]): number {
  const set = [...new Set(ids)].sort((a, b) => a - b);
  for (let i = 0; i < set.length; i++) {
    if (i !== set[i]) {
      return i;
    }
  }
  return set.length;
  // let i = 0;
  // while (ids.includes(i)) {
  //   i++;
  // }
  // return i;
} // nextId()

console.log(nextId([0, 1, 2, 3, 5]));
console.log(nextId([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

function keepWholeObject(a: string, b = 0 ) {
  // let { a, b = 1001 } = wholeObject;
  console.log(a, b);
  
}

keepWholeObject("5");
keepWholeObject("5", 3);
