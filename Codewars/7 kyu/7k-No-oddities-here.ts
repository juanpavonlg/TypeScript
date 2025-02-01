export function noOdds(values: number[]): number[] {
  return values.filter(n => n % 2 === 0);
} // noOdds()

console.log(noOdds([0,1,2,3]));
