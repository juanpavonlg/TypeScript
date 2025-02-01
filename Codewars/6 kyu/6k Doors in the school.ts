export const doors = (n: number): number => {
  return Math.floor(Math.sqrt(n));
}; // doors()

console.log(doors(5));
console.log(doors(33110));
