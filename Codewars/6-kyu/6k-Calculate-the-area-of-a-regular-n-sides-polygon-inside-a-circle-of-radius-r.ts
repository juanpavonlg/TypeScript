export function areaOfPolygonInsideCircle(circleRadius: number, numberOfSides: number): number {
  const angle = Math.PI / numberOfSides;
  return +(numberOfSides * circleRadius ** 2 * Math.sin(angle) * Math.cos(angle)).toFixed(3);
} // areaOfPolygonInsideCircle()

console.log(areaOfPolygonInsideCircle(3, 3));
