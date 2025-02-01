export const cycle = (n: number): number => {
  if (n % 2 === 0 || n % 5 === 0) {
    return -1;
  }
  let r = 1;
  let c = 0;
  do {
    r = (10 * r) % n;
    c++;    
  } while (r !== 1);  
  return c;
}; // cycle()

console.log(cycle(7));
console.log(cycle(11));
console.log(cycle(5));
console.log(cycle(69));
console.log(cycle(197));
console.log(cycle(218713));
console.log(cycle(1234567));
