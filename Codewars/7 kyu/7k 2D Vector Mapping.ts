export function mapVector(
  vector: [number, number],
  circle1: [number, number, number],
  circle2: [number, number, number]
): [number, number] {
  const factor = circle2[2] / circle1[2];
  return [
    circle2[0] + (vector[0] - circle1[0]) * factor,
    circle2[1] + (vector[1] - circle1[1]) * factor,
  ];
} // mapVector()

console.log(mapVector([5, 5], [10, 20, 42], [-100, -42, 69]));
