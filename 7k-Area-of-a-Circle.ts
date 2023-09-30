export function circleArea(radius: number): number {
  if (radius <= 0) {
    throw new RangeError("radius must be positive");  
  }
  return +(Math.PI * radius ** 2).toFixed(3);
} // circleArea()

try {
  console.log(circleArea(0));
} catch(e) {
  if (e instanceof RangeError) {
    console.error(e.message);
  }
}
console.log(circleArea(1));
console.log(circleArea(43.2673));

