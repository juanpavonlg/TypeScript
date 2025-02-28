export const crossover = (chromosome1: string, chromosome2: string, index: number) => {
  const [c1, c2] = [[...chromosome1], [...chromosome2]];
  for (let i = index; i < c1.length; i++) {
    [c1[i], c2[i]] = [c2[i], c1[i]];
  } 
  return [c1.join(""), c2.join("")];
}; // crossover()

console.log(crossover("1011011001111", "1011100100110", 4));
console.log(crossover("111000", "000110", 3));
