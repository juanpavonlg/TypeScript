export function spinningRings(innerMax: number, outerMax: number): number {
  let numberOfSpinsTillRingsAreEqual = 0;
  let inner = 0;
  let outer = 0;
  do {
    inner = (innerMax + inner) % (innerMax + 1);
    outer = ++outer % (outerMax + 1);
    numberOfSpinsTillRingsAreEqual++;
  } while (inner != outer);
  return numberOfSpinsTillRingsAreEqual;
}; // spinningRings()

console.log(spinningRings(2, 3));
