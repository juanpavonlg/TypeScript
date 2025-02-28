export const mutate = (chromosome: string, p: number): string => {
  return [...chromosome].map((e) => Math.random() < p ? +e ^ 1 : +e).join("");
}; // mutate()

const zero = '0'.repeat(9);
const one  = '1'.repeat(9);
console.log(mutate(zero, 1));
console.log(mutate(one, 1));
console.log(mutate(zero, 0));
console.log(mutate(one, 0));
console.log(mutate(zero, 0.5));
console.log(mutate(one, 0.5));
