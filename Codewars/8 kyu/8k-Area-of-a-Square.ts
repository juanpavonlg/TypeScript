export const squareArea = (num : number) : number =>  {
  const r = 2 * num / Math.PI;
  return +(r * r).toFixed(2);
} // squareArea()

console.log(squareArea(2));
