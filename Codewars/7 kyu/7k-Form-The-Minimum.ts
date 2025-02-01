export const minValue = (values: number[]): number => {
  return parseInt([...new Set(values)].sort().join(""));
}; // minValue()

console.log(minValue([1, 3, 1]));
