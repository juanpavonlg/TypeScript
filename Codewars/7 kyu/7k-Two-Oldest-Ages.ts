// return the two oldest/oldest ages within the array of ages passed in.
// it should return the two ages as a sorted array, youngest age first
export function twoOldestAges(ages: number[]): number[] {
  let max = 0;
  let sec = max;
  ages.forEach((age) => {
    if (age >= max) {
      sec = max;
      max = age;
    } else if (age > sec) {
      sec = age;
    }
  });
  return [sec, max];
} // twoOldestAges()

console.log(twoOldestAges([1, 2, 10, 8]));
console.log(twoOldestAges([1, 5, 87, 45, 8, 8]));
console.log(twoOldestAges([1, 3, 10, 0]));
