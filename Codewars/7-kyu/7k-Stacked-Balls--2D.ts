export function stackHeight2d(layers: number) {
  return layers ? Math.sqrt(3) * (layers - 1) / 2 + 1 : 0;
} // stackHeight2d()

console.log(stackHeight2d(0));
console.log(stackHeight2d(1));
console.log(stackHeight2d(2));
