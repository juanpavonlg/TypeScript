export function findTheNotFittingElement(series: any[]): any {
  const tests = [
    (a: any, b: any) => a === b,
    (a: any, b: any) => typeof a === typeof b,
    (a: any, b: any) => a > 0 === b > 0,
    (a: any, b: any) => a % 2 === b % 2,
    (a: any, b: any) => /[A-Z]/.test(a) === /[A-Z]/.test(b),
    (a: any, b: any) => /[a-z]/i.test(a) === /[a-z]/i.test(b),
  ];
  for (const test of tests) {
    const lst: any[] = [];
    for (const a of series) {
      if (series.filter((b) => test(a, b)).length === 1) {
        lst.push(a);
      }
    }
    if (lst.length === 1) {
      return lst[0];
    }
  }
  return null;
} // findTheNotFittingElement()

console.log(findTheNotFittingElement([1, 2, 2, 2, 2]));
console.log(findTheNotFittingElement([true, true, true, false, true]));
console.log(findTheNotFittingElement(["a", "a", "b", "a", "a", "a", "a"]));
console.log(findTheNotFittingElement(["1", 2, "4", "6", "8"]));
console.log(findTheNotFittingElement([2, 2, 2, 2, 2, "2"]));
console.log(findTheNotFittingElement([1, 2, 4, 6, true]));
console.log(findTheNotFittingElement(["Z", "L", "3", "t", 4]));
console.log(findTheNotFittingElement([1, 2, 4, 6, 10]));
console.log(findTheNotFittingElement([2, 2, -2, 6, 10]));
console.log(findTheNotFittingElement([2, 4, 5, 6, 10]));
console.log(findTheNotFittingElement(["Z", "L", "P", "t", "G"]));
console.log(findTheNotFittingElement(["Z", "L", "3", "t", "G"]));
console.log(findTheNotFittingElement(["Z", "e", ".", "a", "G"]));
