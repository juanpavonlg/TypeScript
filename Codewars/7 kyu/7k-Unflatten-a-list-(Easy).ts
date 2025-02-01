export function unflatten(flatArray: any[]): any[] {
  const unflattened = [];
  for (let i = 0; i < flatArray.length; ) {
    if (flatArray[i] < 3) {
      unflattened.push(flatArray[i++]);
    } else {
      unflattened.push(flatArray.slice(i, i += flatArray[i]));
    }
  }
  return unflattened;
} // unflatten()

console.log(unflatten([1, 4, 5, 2, 1, 2, 4, 5, 2, 6, 2, 3, 3]));
