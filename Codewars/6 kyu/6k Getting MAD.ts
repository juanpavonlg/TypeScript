export function gettingMad(array: number[]): number {
  const mads: number[] = [];
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      mads.push(Math.abs(array[i] - array[j]))
    }
  }
  return Math.min(...mads);
} // gettingMad()

console.log(gettingMad([-10, 0, -3, 1]));
