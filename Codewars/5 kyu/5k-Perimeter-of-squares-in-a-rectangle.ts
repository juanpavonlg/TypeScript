export const perimeter = (n: number): number => {
  let sum = 0;
  let [curr, next] = [0, 1];
  for (let i = 1; i <= n + 1; i++) {
    [curr, next] = [next, curr + next];
    sum += curr;
  }
  return 4 * sum;
} // perimeter()

console.log(perimeter(5));
console.log(perimeter(7));
console.log(perimeter(0));
  