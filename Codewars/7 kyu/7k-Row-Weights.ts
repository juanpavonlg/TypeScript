export function rowWeights(arr: number[]) {
  const weights: number[] = [0 , 0];
  for (let i = 0; i < arr.length; i++) {
    weights[i % 2] += arr[i];
  }
  return weights;
} // rowWeights()

console.log(rowWeights([80]));
