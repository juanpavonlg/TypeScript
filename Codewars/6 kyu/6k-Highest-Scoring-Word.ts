export const high = (str: string): string => {
  const scores: number[] = str.split(" ").map(word => word.split("").reduce((sum, char) => sum + char.charCodeAt(0) - 96, 0));
  return str.split(" ")[scores.indexOf(Math.max(...scores))];
} // high()

console.log(high('man i need a taxi up to ubud'));
console.log(high('what time are we climbing up the volcano'));
