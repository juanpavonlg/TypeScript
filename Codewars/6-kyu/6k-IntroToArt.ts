export function getW(height: number) {
  if (height < 2) {
    return [];
  }
  const lim = 4 * height - 3;
  const w = Array.from({ length: height }, () => new Array(lim).fill(" "));
  let di = -1;
  for (let i = 0, j = 0; j < lim; i += di, j++) {
    w[i][j] = "*";
    if (i === 0 || i === height - 1) {
      di *= -1;
    }
  }
  return w.map((e) => e.join(""));
} // getW()

console.log(getW(3));
console.log(getW(5));
